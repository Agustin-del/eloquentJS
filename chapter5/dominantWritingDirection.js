const SCRIPTS = require('./scripts');

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.find(c => c.name == name);
      if (!known) {
        counts.push({name, count: 1});
      } else {
        known.count++;
      }
    }
    return counts;
  }

function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
}
  
function dominantWritingDirection(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
      }).filter(({name}) => name != "none");

    if (scripts.length == 0) {
        return "ltr";
    }
    return scripts.reduce((a, b) => a.count > b.count ? a : b).name;
    // let dominantScript = null;
    // for (let script of scripts) {
    //     if (dominantScript === null || script.count > dominantScript.count) {
    //         dominantScript = script;
    //     }
    // }
    // dominantScript = SCRIPTS.find(script => script.name === dominantScript.name);
    // return dominantScript.direction;

}

console.log(dominantWritingDirection("Hey, مساء الخير"));
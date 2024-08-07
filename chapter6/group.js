class Group{
    constructor () {
        this.group = [];    
    }

    add (value) {
       if(!this.has(value)) {
        this.group.push(value);
       }
    }

    delete(value) {
        // if(this.has(value)) {
        //     const index = this.group.indexOf(value);
        //     this.group.splice(index, 1);
        // }
        this.group = this.group.filter(item => item !== value);
    }

    has(value) {
        return this.group.includes(value);
    }

    static from(iterable) {
        let group = new Group();
        for(const element of iterable) {
            group.add(element); 
        }
        return group;
    }

    [Symbol.iterator]() {
        let index = 0;
        let group = this.group;

        return {
            next() {
                if(index < group.length) {
                    return {
                        value:group[index++],
                        done:false
                    }
                } else {
                    return {
                        done:true
                    }
                }
            }
        }
    }
}


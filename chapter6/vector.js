class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(anotherVector) {
        return new Vec((this.x + anotherVector.x), (this.y + anotherVector.y));
    }

    minus(anotherVector) {
        return new Vec((this.x - anotherVector.x), (this.y - anotherVector.y));
    }

    get length() {
        return (Math.sqrt(this.x ** 2 +  this.y ** 2));
    }
}


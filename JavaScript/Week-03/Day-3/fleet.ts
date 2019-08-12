import { Thing } from "./thing";

class Fleet {
    private things: Thing[];

    constructor() {
        this.things = [];
    }

    add(thing: Thing) {
        this.things.push(thing);
    }
    print() {
        for (let index = 0; index < this.things.length; index++) {
            if (this.things[index].getStatus() === true) {
                console.log('[X] '.concat(this.things[index].getName()));
            } else {
                console.log('[ ] '.concat(this.things[index].getName()));
            }
        }
    }
}

export { Fleet };
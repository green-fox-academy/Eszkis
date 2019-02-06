class Thing implements Comparable {
    private name: string;
    private completed: boolean;

    constructor(name: string) {
        this.name = name;
        this.completed = false;
    }

    public complete() {
        this.completed = true;
    }
    public getStatus() {
        return this.completed;
    }
    public getName() {
        return this.name;
    }

    statusCompareTo(other: Thing) {
        if (this.completed && other.completed) {
            return 0
        } else if (this.completed && !other.completed) {
            return 1
        } else {
            return 0
        }
    }
    stringCompareTo(other: Thing) {
        if (this.name.charAt(0) < other.name.charAt(0)) {
            return -1
        } else if (this.name.charAt(0) > other.name.charAt(0)) {
            return 1
        } else {
            return 0
        }

    }
}

interface Comparable {
    statusCompareTo(other: Comparable): number;
    /*
    * returns negative number if this is smaller than other
    * returns 0 if they are the same
    * returns positive number if this is greater than other
    */
    stringCompareTo(other: Comparable): number
}


export { Thing };

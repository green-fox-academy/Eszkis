class Domino implements Comparable {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }

    compareTo(other: Domino) {
        if (this.values[0] < other.values[0]) {
            return -1
        } else if (this.values[0] > other.values[0]) {
            return 1
        } else {
            return 0
        }
    }

    printAllFields() {
        let info: any = {
            values: this.values
        }
        return info
    }
}

interface Comparable {
    compareTo(other: Comparable): number;
    /*
    * returns negative number if this is smaller than other
    * returns 0 if they are the same
    * returns positive number if this is greater than other
    */
}

interface Printable {
    printAllFields(): any;
}

export { Domino };
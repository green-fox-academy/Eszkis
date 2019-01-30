class Thing {
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
}

export { Thing };

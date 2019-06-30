class MyError extends Error {
    constructor(args) {
        super(args);
        this.name = 'MyError'
    }
}

const test = () => {
    throw new MyError('my message')
}

test()
class MinStack {
    constructor() {
        this.minStack = [];
        this.helpArr = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.helpArr.length === 0 || val < this.helpArr[this.helpArr.length - 1]) {
            this.helpArr.push(val);
        } else {
            this.helpArr.push(this.helpArr[this.helpArr.length - 1]);
        }
        this.minStack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
        this.helpArr.pop();
        return this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.minStack[this.minStack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.helpArr[this.helpArr.length - 1];
    }
}








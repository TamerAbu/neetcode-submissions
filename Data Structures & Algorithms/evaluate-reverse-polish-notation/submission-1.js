class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(const token of tokens){
            if (token !== '-' && token !== '+' && token !== '*' && token !== '/'){
                stack.push(Number(token));
            } else if (token === '-'){
                let a = stack.pop();
                let b = stack.pop();
                stack.push(b - a)
            } else if (token === '+'){
                let a = stack.pop();
                let b = stack.pop();
                stack.push(b + a)
            } else if (token === '*'){
                let a = stack.pop();
                let b = stack.pop();
                stack.push(b * a)
            } else if (token === '/'){
                let a = stack.pop();
                let b = stack.pop();
                stack.push(Math.trunc(b / a))
            }
        }
        return stack.pop();
    }
}


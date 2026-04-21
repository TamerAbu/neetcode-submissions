class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        for (const c of s) {
            if (c === "(" || c === "[" || c === "{") {
                stack.push(c);
            } 
            else if (c === ")") {
                if (stack.pop() !== "(") return false;
            } 
            else if (c === "]") {
                if (stack.pop() !== "[") return false;
            } 
            else if (c === "}") {
                if (stack.pop() !== "{") return false;
            }
        } 
        
        return stack.length === 0;
    }
}

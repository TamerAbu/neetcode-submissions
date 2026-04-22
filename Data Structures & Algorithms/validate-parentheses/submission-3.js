class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for (const c of s){
            if (c === "{" || c === "[" || c === "(") {
                stack.push(c);
            } else {
                if ( c === "]" && stack[ stack.length - 1 ] !== "[" ) return false;
                if ( c === ")" && stack[ stack.length - 1 ] !== "(" ) return false;
                if ( c === "}" && stack[ stack.length - 1 ] !== "{" ) return false;
                stack.pop();
            }
        }

        return stack.length === 0;
    }
}

class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for(const str of strs) {
            res += str.length + "#" + str;
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const arr = new Array();
        let i = 0;
        while (i < str.length){
            let j = str.indexOf("#",i);
            let length = parseInt(str.substring(i, j));
            arr.push(str.substring(j + 1, j + 1 + length));
            i = j + length + 1;
        }
        return arr;
    }
}


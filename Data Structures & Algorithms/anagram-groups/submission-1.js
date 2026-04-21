class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const mapi = new Map();
        for (const str of strs){
            const sorted = str.split('').sort().join('');
            if (!mapi.has(sorted)){
                mapi.set(sorted, []) ;
            }
            mapi.get(sorted).push(str);
        }
        return Array.from(mapi.values());
    }
}

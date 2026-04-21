class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const ans = new Map ();

        for (const str of strs){
            const sortedKey = [...str].sort().join('');

            if (!ans.has(sortedKey)) {
                ans.set(sortedKey, []);
            }

            ans.get(sortedKey).push(str);
        }

        return Array.from(ans.values());
    }
}

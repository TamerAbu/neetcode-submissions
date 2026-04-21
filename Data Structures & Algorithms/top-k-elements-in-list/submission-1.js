class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mapi = new Map();
        for (const num of nums){
            mapi.set(num,(mapi.get(num) || 0) + 1);
        }

        const sortedArray = [...mapi.entries()].sort((a,b) => b[1] - a[1]);
        return sortedArray.slice(0, k).map(entry => entry[0]);

    }
}

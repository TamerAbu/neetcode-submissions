class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const seti = new Set(nums);
        
        let longest = 0;


        const starts = new Set();

        for (const num of nums){
            if(!seti.has(num - 1)){
                starts.add(num);
            }
        }

        for (const startNum of starts) {
            let currentstrike = 1;
            let currentNum = startNum;

            while (seti.has(currentNum + 1)){
                currentstrike += 1;
                currentNum += 1;
            }

            if (longest < currentstrike) {
                longest = currentstrike;
            }

        }

        return longest;

    }
}



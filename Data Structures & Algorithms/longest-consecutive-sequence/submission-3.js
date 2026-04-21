class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0;
        const seti = new Set(nums);

        for (const num of seti){
            if(!seti.has(num - 1)){
                let curr = num;
                let currStrike = 0;
                while(seti.has(curr)){
                    currStrike += 1;
                    curr += 1;
                }
                if (currStrike > longest){
                    longest = currStrike;
                }
            }
        }

        return longest;
    }
}



class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        
        const seti = new Set(nums);
        let longest = 0;

        for (const num of seti) {
            if (!seti.has(num - 1)) {
                let currentStreak = 1;
                let currentNum = num;

                while (seti.has(currentNum + 1)) {
                    currentStreak += 1;
                    currentNum += 1;
                }

                if (longest < currentStreak) {
                    longest = currentStreak;
                }
            }
        }

        return longest;
    }
}



class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = 0;
        let max = nums.length - 1;
        while(min < max){
            let mid = Math.floor((min + max) / 2);
            if (nums[mid] < nums[max]){
                max = mid;
            } else {
                min = mid + 1;
            }
        }
        return nums[max];
    }
}

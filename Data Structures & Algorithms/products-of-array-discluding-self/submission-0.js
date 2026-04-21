class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const arr = new Array ();
        let prev = 1;
        for(let i = 0; i < nums.length; i++){
            arr[i] = prev;
            prev = prev * nums[i];
        }
        let next = 1;

        for(let i = nums.length - 1; i >= 0 ; i--){
            arr[i] *= next
            next = next * nums[i];
        }
        return arr;
    }
}

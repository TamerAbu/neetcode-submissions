class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let k = 0;
        let left = 0;
        let right = heights.length;
        while(left < right){
            k = Math.min(heights[left],heights[right]) * (right - left);
            if (k > max){
                max = k;
            }
            if (heights[left] < heights[right]){
                left += 1;
            } else {
                right -= 1;
            }
        }
        return max;
    }
}

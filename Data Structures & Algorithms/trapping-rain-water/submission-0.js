class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length - 1;

        let leftMax = height[left];
        let rightMax = height[right];

        let sum = 0;

        while (left < right){
            if (leftMax < rightMax){
                left++;
                if (leftMax < height[left]){
                    leftMax = height[left];
                } else {
                    sum += leftMax - height[left];
                }
            } else {
                right--;
                if (rightMax < height[right]){
                    rightMax = height[right];
                } else {
                    sum += rightMax - height[right];
                }
            }
        }

        return sum;
    }
}
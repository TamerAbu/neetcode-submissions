class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let k = 0;
        for(let i = 0 ; i < heights.length; i++){
            for (let j = i; j < heights.length; j++){
                k = (j - i) * Math.min(heights[j], heights[i]);
                if (k > max){
                    max = k;
                }
            }
        }
        return max;
    }
}

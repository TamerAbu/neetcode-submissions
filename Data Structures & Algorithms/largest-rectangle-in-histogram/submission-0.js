class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let max = 0;
        let tempH;

        for (let i = 0; i < heights.length; i++){
            let startIndex = i;
            tempH = heights[i];

            while (stack.length > 0 && heights[i] < stack[stack.length - 1][0]) {
                let popped = stack.pop()
                tempH = popped[0]  * (i - popped[1]);

                if (tempH > max){
                    max = tempH;
                }
                startIndex = popped[1];
            }
            stack.push([heights[i], startIndex]);
        }

        while (stack.length > 0) {
            let popped = stack.pop();
        
            tempH = popped[0] * (heights.length - popped[1]);
            
            if (tempH > max) {
                max = tempH;
            }
        }

        return max;
    }
}

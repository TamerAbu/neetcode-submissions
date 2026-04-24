class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let result = new Array(temperatures.length).fill(0);
        let stack = [];
        let tempIndex = 0;
        for ( let i = 0; i < temperatures.length; i++ ){
            while( stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]] ){
                tempIndex = stack.pop();
                result[tempIndex] = i - tempIndex;
            }
            stack.push(i);
        }
        return result;
    }
}
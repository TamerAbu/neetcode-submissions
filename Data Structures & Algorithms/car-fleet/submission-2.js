class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let pairs = [];

        for (let i = 0; i < position.length; i++){
            pairs.push([position[i], speed[i]]);
        }

        pairs.sort((a,b) => b[0] - a[0]);
        let stack = [];
        let tempTime;

        for ( let i = 0; i < position.length; i++){
            tempTime = (target - pairs[i][0]) / pairs[i][1];
            if( stack.length === 0 || tempTime > stack[stack.length - 1]){
                stack.push(tempTime);
            }
        }

        return stack.length;
    }
}




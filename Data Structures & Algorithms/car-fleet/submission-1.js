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
            pairs.push([position[i] ,speed[i]]);
        }
        pairs.sort((a,b) => b[0] - a[0]);

        let stack = []; 

        for (let i = 0; i < position.length; i++){
            let temp = (target - pairs[i][0]) / pairs[i][1];
            if ( stack.length == 0 || temp > stack[stack.length - 1]){
                stack.push(temp);
            }
        }
        return stack.length;
    }
}




class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (matrix.length === 0 || matrix[0].length === 0) return false;

        let rows = matrix.length;
        let cols = matrix[0].length;

        let first = 0; 
        let last = rows * cols - 1;
        while(first <= last){
            let mid = Math.floor((first + last) / 2);

            let row = Math.floor(mid / cols);
            let col = mid % cols;
            
            let temp = matrix[row][col];
            
            if(temp === target){
                return true;
            } else if(temp < target){
                first = mid + 1;
            } else {
                last = mid - 1;
            }
        }
        return false;
    }
}

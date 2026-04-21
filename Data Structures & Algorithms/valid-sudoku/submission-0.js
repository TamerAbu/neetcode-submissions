class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
         for (let i = 0; i < 9; i++) {
        let set = new Set();
        for (let j = 0; j < 9; j++) {
            let val = board[i][j];
            if (val !== ".") {
                if (set.has(val)) return false;
                set.add(val);
            }
        }
    }

    // 2. Columns
    for (let i = 0; i < 9; i++) {
        let set = new Set();
        for (let j = 0; j < 9; j++) {
            let val = board[j][i]; // Swapped indices to check columns
            if (val !== ".") {
                if (set.has(val)) return false;
                set.add(val);
            }
        }
    }

    // 3. Sub-grids (The 4-loop approach)
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            let set = new Set();
            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    let val = board[i + r][j + c]; // Use the offsets!
                    if (val !== ".") {
                        if (set.has(val)) return false;
                        set.add(val);
                    }
                }
            }
        }
    }
    return true; 

    }
}

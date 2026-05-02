class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let max = 1;
        let min = 1;
        let count = 0;
        for (const pile of piles){
            if (pile > max){
                max = pile;
            }
        }
        while (min < max){
            let mid = Math.floor((min + max) / 2);
            count = 0;
            for (const pile of piles){
                count += Math.ceil(pile / mid)
                }
            if (count <= h){
                max = mid ;
            } else {
                min = mid + 1;
            }
        }

        return min;   
    }
}


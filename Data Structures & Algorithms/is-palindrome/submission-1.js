class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let first = 0;
        let last = s.length - 1;

        while (first < last){
            while (first < last && !/[a-zA-Z0-9]/.test(s[first])){
                first += 1;
            }

            while (first < last && !/[a-zA-Z0-9]/.test(s[last])){
                last -= 1;
            }

            if(s[first].toLowerCase() != s[last].toLowerCase()){
                return false
            }

            last -= 1
            first += 1
        }

        return true;
    }
}

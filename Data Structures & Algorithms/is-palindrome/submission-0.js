class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0;
        let last = s.length - 1;
        while (start < last){
            while (start < last && !/[a-zA-Z0-9]/.test(s[start])){
                start += 1;
            }
            while (start < last && !/[a-zA-Z0-9]/.test(s[last])){
                last -= 1;
            }

            if (s[start].toLowerCase() != s[last].toLowerCase()){
                return false;
            }

            start += 1;
            last -= 1;
        }
        return true;
    }
}

class Solution:

    def encode(self, strs: List[str]) -> str:
        ans = ""
        for i in strs:
            ans += i+"א"
        return ans

    def decode(self, s: str) -> List[str]:
        curr = ""
        ans = []
        for i in s:
            if i == "א":
                ans.append(curr)
                curr = ""
            else:
                curr += i
        return ans
            
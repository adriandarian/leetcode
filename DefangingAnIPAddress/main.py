import re

class Solution:
    def defangIPaddr(self, address: str) -> str:
        return re.sub(r"[.]", "[.]", address)
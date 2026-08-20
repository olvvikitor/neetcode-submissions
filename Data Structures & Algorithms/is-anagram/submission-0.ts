class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if (s.length !== t.length) {
            return false
        }

        const contagem: Record<string, number> = {}

        for (const letra of s) {
            contagem[letra] = (contagem[letra] || 0) + 1
        }

        for (const letra of t) {
            if (!contagem[letra]) {
                return false
            }
            contagem[letra]--
        }

        return true
    }
}

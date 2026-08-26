class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(lista: string[]): string[][] {
        const grupos = new Map<string, string[]>()

        for (const palavra of lista) {
            const chave = palavra.split("").sort().join("")  // "pots" -> "opst"

            if (!grupos.has(chave)) {
                grupos.set(chave, [])
            }
            grupos.get(chave)!.push(palavra)
        }

        return [...grupos.values()]
    }
}


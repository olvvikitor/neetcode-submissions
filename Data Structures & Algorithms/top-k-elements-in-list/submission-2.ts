class Solution {
    topKFrequent(nums: number[], k: number): number[] {
        const contagem = new Map<number, number>()
        for (const n of nums) {
            contagem.set(n, (contagem.get(n) ?? 0) + 1)
        }

        // índice = frequência, conteúdo = números com essa frequência
        const baldes: number[][] = Array.from({ length: nums.length + 1 }, () => [])
        for (const [num, freq] of contagem) {
            baldes[freq].push(num)
        }

        const resultado: number[] = []
        for (let freq = baldes.length - 1; freq >= 0 && resultado.length < k; freq--) {
            for (const num of baldes[freq]) {
                resultado.push(num)
                if (resultado.length === k) break
            }
        }
        return resultado
    }
}
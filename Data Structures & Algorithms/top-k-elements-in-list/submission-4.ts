class Solution {
    topKFrequent(nums: number[], k: number): number[] {
        const contagem = new Map<number, number>()

        for (const n of nums) {
            contagem.set(n, (contagem.get(n) ?? 0) + 1)
        }

        return [...contagem.entries()]
            .sort(([, a], [, b]) => b - a)
            .slice(0, k)
            .map(([num]) => num)
    }
}
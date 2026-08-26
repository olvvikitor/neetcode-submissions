class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const numbers_list = new Map<number, number>()
        const numbers: Record<number, number> = {}

        for (let number of nums) {
            numbers[number] = (numbers[number] || 0) + 1

            numbers_list.set(number, numbers[number])

        }
        return [...numbers_list.entries()].sort(([, a], [, b]) => b - a)
            .slice(0, k)
            .map(([num]) => num)
    }
}

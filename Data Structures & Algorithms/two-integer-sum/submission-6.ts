class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let soma = 0;
        const numbers = [];
        for (let i = 0; i < nums.length; i++) {
            for (let k = i + 1; k < nums.length; k++) {
                soma = nums[i] + nums[k];
                if (soma === target) {
                    numbers.push(i, k)
                    return numbers
                }
            }
        }
    }
}

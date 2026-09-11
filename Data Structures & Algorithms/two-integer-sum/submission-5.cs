public class Solution
    {
        public int[] TwoSum(int[] nums, int target)
        {
            int[] twoNumsSum = TestPossibleCombinations(nums, target);
            return twoNumsSum;
        }
        private int[] TestPossibleCombinations(int[] nums, int target)
        {
            int sum = 0;
            int testingNumber = 0;
            
            for (int i = 0; i < nums.Length; i++)
            {
                testingNumber = nums[i];
                for (int j = 0; j < nums.Length; j++)
                {
                    if (i != j)
                    {
                        sum = testingNumber + nums[j];
                        if (sum == target)
                        {
                            return new int[]  { i, j };
                        }
                    }
                    
                }
            }
            return new int[] { };
        }
    }

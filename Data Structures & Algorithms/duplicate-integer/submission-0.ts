class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let hasDuplicateValues = false;
        nums.sort().find((num, i) => {
            if(nums[i] === nums[i+1]) {
                hasDuplicateValues = true;
            }
        });
        return hasDuplicateValues;
    };
}

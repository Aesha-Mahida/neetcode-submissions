class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let finalAnswer = [];
        nums.find((valI, i) => {
            nums.find((valJ, j) => {
                if(i !== j && (valI + valJ === target)) {
                    finalAnswer = [i, j];
                }
            })
        })
        return finalAnswer;

    }
}

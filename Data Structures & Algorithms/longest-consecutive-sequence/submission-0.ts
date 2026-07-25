class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numsSet = new Set<number>(nums);
        let maxLength = 0;

        for(const num of numsSet){
            if(!numsSet.has(num-1)){
                let currentNum = num;
                let currentStreak = 1;

                while(numsSet.has(currentNum + 1)){
                    currentNum += 1;
                    currentStreak += 1;
                }

                maxLength = Math.max(maxLength, currentStreak);
            }

        }
        return maxLength;
    }
}

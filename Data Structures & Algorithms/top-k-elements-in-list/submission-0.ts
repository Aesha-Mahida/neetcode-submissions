class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const counts = new Map<number, number>();
        const sortedNums = nums.sort();
        for(const num of sortedNums) {
            counts.set(num, (counts.get(num) || 0) + 1);
        }

        return Array.from(counts.entries()).sort((a,b) => b[1] - a[1]).slice(0,k).map(([num]) => num);
    }
}

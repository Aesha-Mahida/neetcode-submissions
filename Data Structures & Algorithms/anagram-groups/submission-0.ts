class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();
        for(const str of strs) {
            const sortedKey = str.split('').sort().join('');

            if(!map.has(sortedKey)){
                map.set(sortedKey, []);
            }
            map.get(sortedKey)!.push(str);
        }
        return Array.from(map.values());
    }
}

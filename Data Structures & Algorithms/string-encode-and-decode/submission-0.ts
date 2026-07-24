class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedString : string = '';
        for(const s of strs){
            encodedString += `${s.length}#${s}`
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decodedString: string[] = [];
        let i = 0;

        while(i < str.length){
            let j = i;
            while(str[j] !== '#'){
                j++;
            }
            const len = parseInt(str.substring(i, j), 10);
            const newStr = str.substring(j+1, j+1+len);
            decodedString.push(newStr);

            i = j + 1 + len;
        }
        return decodedString;
    }
}

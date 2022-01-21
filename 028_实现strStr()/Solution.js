/**
 * 
 * 
 * 实现 strStr() 函数。
    给你两个字符串 haystack 和 needle ，
    请你在 haystack 字符串中找出 needle 字符串出现的第一个位置（下标从 0 开始）。
    如果不存在，则返回  -1 。

 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function (haystack, needle) {
//     const length1 = haystack.length
//     const length2 = needle.length
//     if (length1 === 0 && length2 === 0) return 0
//     for(let i = 0; i + length2 <= length1; i++){
//         let flag = true
//         for(let j = 0; j < length2; j++){
//             if(haystack[i+j]!==needle[j]){
//                 flag = false
//                 break
//             }
//         }
//         if(flag) {return i}
//     }
//     return -1
// };


// kmp算法
var strStr = function (haystack, needle) {
    const n = haystack.length, m = needle.length;
    if (m === 0) {
        return 0;
    }
    const pi = new Array(m).fill(0);
    for (let i = 1, j = 0; i < m; i++) {
        while (j > 0 && needle[i] !== needle[j]) {
            j = pi[j - 1];
        }
        if (needle[i] == needle[j]) {
            j++;
        }
        pi[i] = j;
    }
    for (let i = 0, j = 0; i < n; i++) {
        while (j > 0 && haystack[i] != needle[j]) {
            j = pi[j - 1];
        }
        if (haystack[i] == needle[j]) {
            j++;
        }
        if (j === m) {
            return i - m + 1;
        }
    }
    return -1;
}

const haystack = "mississippi", needle = "issip"
console.log(strStr(haystack, needle));
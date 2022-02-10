/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0]
    let result = []
    for(let i =0; i<intervals.length; i++){
        let cur = intervals[i]
        if(cur[0] > prev[1]){
            result.push(prev)
            prev = cur
        }else{
            prev[1] = Math.max(cur[1],prev[1])
        }
    }
    result.push(prev)
    return result
};

var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    for (let i = 0; i < intervals.length; i++) {
        let start = intervals[i][0];
        let cur = intervals[i][1];
        while(i < intervals.length-1 && cur >= intervals[i+1][0]) {
            cur = Math.max(intervals[i+1][1], cur);
            i++;
        }
        res.push([start, cur]);
    }
    return res;
};

let intervals = [[1,3],[2,6],[8,10],[15,18]]
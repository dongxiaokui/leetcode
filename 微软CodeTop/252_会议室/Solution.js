/**
 * 
 * 给定一个会议时间安排的数组，每个会议时间都会包括开始和结束的时间 [[s1,e1],[s2,e2],…] (si < ei)，
 为避免会议冲突，同时要考虑充分利用会议室资源，请你计算至少需要多少间会议室，才能满足这些会议安排。

示例 1:
输入: [[0, 30],[5, 10],[15, 20]]
输出: 2

示例 2:
输入: [[7,10],[2,4]]
输出: 1
 */

const getMinRoom = function (meeting) {
  const len = meeting.length
  if (len === 0) return 0
  meeting.sort((a, b) => { return a[0] - b[0] })
  let res = 1
  let endTime = meeting[0][1]
  for (let i = 1; i < len; i++) {
    if (meeting[i][1] < endTime) {
      res++
    }
    endTime = meeting[i][1]
  }

  return res
}

var meeting = [[7,10],[2,4]]
console.log(getMinRoom(meeting));
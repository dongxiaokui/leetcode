/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let res = new ListNode(-1)
    let ans = res
    while (l1 != null && l2 != null) {
        if(l1.val <= l2.val){
            res.next = l1
            l1 = l1.next
        }else{
            res.next = l2
            l2 = l2.next
        }
        res = res.next
    }
    res.next = l1 == null ? l2 : l1
    return ans.next
};
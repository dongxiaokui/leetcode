class Solution {

    //      Definition for singly-linked list.
    public static class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode pre = new ListNode(0);
        ListNode cur = pre;
        int carry = 0;
        while(l1!= null || l2!= null){
            int x = l1 == null ? 0 : l1.val;
            int y = l2 == null ? 0 : l2.val;
            int sum = x + y + carry;
            carry = sum / 10;
            sum = sum % 10;
            cur.next = new ListNode(sum);

            cur = cur.next;
            if(l1!=null) l1 = l1.next;
            if(l2!=null) l2 = l2.next;
        }
        if(carry == 1){
            cur.next = new ListNode(carry);
        }
        return pre.next;
    }

    public static void main(String[] args) {
//        l1 = [9,9,9,9,9,9,9];
//        l2 = [9,9,9,9];
        ListNode l1 = new ListNode();
        ListNode l2 = new ListNode();
        addTwoNumbers(l1, l2);
    }
}

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Scanner;

public class RoughClass {

    public static class ListNode {
        int val;
        ListNode next;
        ListNode() {}
        ListNode(int val){
            this.val = val;
        }
        ListNode(int val, ListNode next){
            this.val = val; this.next = next;
        }
    }
        public static void main(String[] args) {

            Scanner sc = new Scanner(System.in);
            int n = sc.nextInt();
            LinkedList<Integer> li = new LinkedList<>();
            for(int i=0; i<n; i++){
                li.add(sc.nextInt())
            }
            ListNode head = li.getFirst();
            ListNode slow = head;
            ListNode fast = head;
            ListNode prev = null;

            while(fast!=null && fast.next!=null){
                prev = slow;
                slow = slow.next;
                fast = fast.next.next;
            }

            prev.next = null;

            ListNode head2 = slow;
            ListNode temp = null;
            ListNode curr = head2;
            prev = null;

            while(curr!=null){
                temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }

            ListNode count = new ListNode();
            curr = count;
            ListNode headPointer = head;

            while(headPointer!=null && head2!=null){
                curr.next = headPointer;
                headPointer = head.next;
                curr = curr.next;
                curr.next = head2;
                head2 = head2.next;
                curr = curr.next;
            }
            count.next = null;
        }
    }
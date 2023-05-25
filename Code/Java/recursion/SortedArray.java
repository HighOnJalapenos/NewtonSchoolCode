package recursion;

import java.util.Scanner;

public class SortedArray {
    static boolean sortedArray(int arr[], int i){
        if(i==arr.length-1){
            return true;
        }

        return (arr[i]<arr[i+1]) && sortedArray(arr,i+1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];

        for(int i=0; i<n; i++){
            arr[i] = sc.nextInt();
        }

        System.out.print(sortedArray(arr, 0));
    }
}

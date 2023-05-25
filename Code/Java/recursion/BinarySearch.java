package recursion;

import java.util.Scanner;

public class BinarySearch {
    private static int helperFunction(int arr[], int target, int start, int end){
        if(start>end){
            return -1;
        }

        int mid = start + (end-start)/2;
        if(arr[mid]==target){
            return mid;
        } else if(arr[mid]<target){
            return helperFunction(arr, target, mid+1, end);
        } else {
            return helperFunction(arr, target, start, mid-1);
        }
    }
    static int binarySearch(int arr[], int target){
        return helperFunction(arr, target, 0, arr.length-1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int arr[] = new int[n];

        for(int i=0; i<n; i++){
            arr[i] = sc.nextInt();
        }
        int target = sc.nextInt();
        System.out.print(binarySearch(arr, target));
    }
}

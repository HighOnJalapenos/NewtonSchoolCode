package BinarySearch;

import java.util.Scanner;

public class Ceiling {
    public static int ceiling(int arr[], int target){
        int s = 0;
        int e = arr.length-1;

        while(s<e){
            int mid = s + (e-s)/2;

            if(arr[mid]==target){
                s = mid;
                break;
            }

            if(arr[mid]<target){
                s = mid+1;
            } else {
                e = mid;
            }
        }

        return s;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int arr[] = new int[n];

        for(int i=0; i<n; i++){
            arr[i] = sc.nextInt();
        }
        int target = sc.nextInt();

        System.out.print(arr[ceiling(arr, target)]);
    }
}

package BinarySearch;

import java.util.Scanner;

public class Floor {
    public static int floor(int arr[], int target){
        int s = 0;
        int e = arr.length-1;

        while(s<e){
            int mid = s + (e-s)/2;

            if(arr[mid]==target){
                s = mid;
                break;
            }

            if(arr[mid]>target){
                e = mid-1;
            } else {
                s = mid;
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
        int a = floor(arr, target);
        System.out.print(arr[a]);
        //changes for git
    }
}

package recursion;

import java.util.ArrayList;
import java.util.Scanner;

public class LinearSearch {

    static ArrayList<Integer> findAllIndex2(int arr[], int target, int i){
        ArrayList<Integer> list = new ArrayList<>();

        if(i==arr.length){
            return list;
        }

        if(arr[i]==target) {
            list.add(i);
        }
        ArrayList<Integer> belowList = findAllIndex2(arr, target, ++i);
        list.addAll(belowList);
        return list;
    }
    static ArrayList<Integer> list = new ArrayList<>();
    static void findAllIndex(int arr[], int target, int i){
        if(i==arr.length){
            return;
        }

        if(arr[i]==target) {
            list.add(i);
        }
        findAllIndex(arr, target, ++i);
    }
    static int linearSearch(int arr[], int target, int i){
        if(i==arr.length){
            return -1;
        }

        if(arr[i]==target){
            return i;
        } else {
            return linearSearch(arr, target, ++i);
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int arr[] = new int[n];

        for(int i=0; i<n; i++){
            arr[i] = sc.nextInt();
        }

        int target = sc.nextInt();
        ArrayList<Integer>list = findAllIndex2(arr, target, 0);
        System.out.print(list);
        //System.out.print(linearSearch(arr, target, 0));
    }
}

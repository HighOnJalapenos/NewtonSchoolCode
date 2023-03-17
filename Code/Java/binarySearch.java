import java.util.Arrays;
import java.util.Scanner;

public class binarySearch {

    public static boolean binarySrch(int arr[], int target){

        boolean flag = false;
        int i=0;
        int j=arr.length - 1;
        int mid = (i+j)/2;

        while(i<=j){
            if (arr[mid]==target){
                flag = true;
                return flag;
            }
            if (arr[mid]>target){
                j = mid-1;
            } else {
                i = mid+1;
            }
        }
        return flag;
    }

    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();  
        int arr[] = new int[N];
        boolean ifFound = false;


        for (int i=0; i<N; i++){
            arr[i] = sc.nextInt();
        }

        Arrays.sort(arr);

        for (int i=0; i<N; i++){
            ifFound = binarySrch(arr, 2*arr[i]);
        }

        if (ifFound){
            System.out.print("YES");
        } else {
            System.out.print("NO");
        }
        sc.close();
    }
}

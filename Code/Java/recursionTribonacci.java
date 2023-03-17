import java.util.Scanner;

public class recursionTribonacci {

    public static int tribonacci(int arr[], int i){
        
        arr[i] = arr[i-3]+arr[i-2]+arr[i-1];
        
        if (i==arr.length - 1){
            return arr[i];
        }
        
        return tribonacci(arr,i+1);
    }

    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int arr[] = new int[N];
        arr[0]=0;
        arr[1]=0;
        arr[2]=1;

        int result = tribonacci(arr, 3);

        System.out.print(result);
        sc.close();
    }
}

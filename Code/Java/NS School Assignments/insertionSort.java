import java.util.Arrays;
import java.util.Scanner;

public class insertionSort {
    
    public static void main (String[] args) {
    Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        while (T-->0){
        int N = sc.nextInt();
        int arr[] = new int[N];

        for (int i=0; i<N; i++){
            arr[i] = sc.nextInt();
            }

            for (int i=1; i<N; i++){
                int temp = arr[i];
                int j = i-1;

                while (j>=0 && temp<arr[j]){
                    arr[i] = arr[j];
                    j--;
                }
                arr[j+1] = temp;
            }
            System.out.println(Arrays.toString(arr));
        } sc.close();
    }
}

import java.util.Scanner;

public class treeHeight {

    public static int countWood(int arr[], int height){
        int pieces = 0;
        for (int i=0; i<arr.length; i++){
            if (arr[i]>height){
                pieces = pieces + arr[i] - height;
            }
        }
        return pieces;
    }
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int K = sc.nextInt();
        int arr[] = new int[N];

        for (int i=0; i<N; i++){
            arr[i] = sc.nextInt();
        }

        int max = 0;
        for (int i=0;i<N; i++){
            if(arr[i]>max){
                max = arr[i];
            }
        }

        int i=1;
        int j=max;
        int ans = max+1;

        while (i<=j){
            int mid = (i+j)/2;

            int pieces = countWood(arr, mid);
            
            if (pieces<=K){
                if (mid<ans){
                    ans = mid;
                } 
                j = mid-1;
            } else {
                i = mid+1;
            }
        }
        System.out.print(ans);
        sc.close();
    }
}
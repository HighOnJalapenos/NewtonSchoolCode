import java.util.Scanner;

public class MaxFlags {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        for (int i=1; i<=T; i++){
            int N = sc.nextInt();
            int M = sc.nextInt();
            int arr[] = new int[M];
            int arrOut[] = new int[N];

            for (int j=0; j<M; j++){
                arr[j] = sc.nextInt();
            }

            for (int k=0; k<N; k++){
                if (arr[k]<=N){
                    arrOut[arr[k]-1] = arrOut[arr[k]-1] + 1;
                }
                
                else if (arr[k]==N+1){
                    int count = 0;
                    for (int j=0; j<N; j++){
                        if (arrOut[j]>=count){
                            count = arrOut[j];
                        }
                    }
                    for (int j=0; j<N; j++){
                        arrOut[j] = count;
                    }
                }
            } 

            for (int j=0; j<N; j++){
                System.out.print(arrOut[j] + " ");
            }
        } sc.close();
    }
}

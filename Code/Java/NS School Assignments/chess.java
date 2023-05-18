import java.util.Scanner;

public class chess {
    public static void main (String[] args){
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int arr[][] = new int[N][N];
        int count1 = 0;
        int count2 = 0;

            for (int i=0; i<N; i++){
                for (int j=0; j<N; j++){
                    arr[i][j] = sc.nextInt();
                }
            }
            
            for (int i=0; i<N; i++){
                for (int j=i%2; j<N; j+=2){
                    if (arr[i][j] == 0){
                        count1++;
                    }
                }
                for (int j=(N-i)%(N-1); j<N; j+=2){
                    if (arr[i][j] != 0){
                        count1++;
                    }
                }
            }

            for (int i=0; i<N; i++){
                for (int j=i%2; j<N; j+=2){
                    if (arr[i][j] != 0){
                        count2++;
                    }
                }
                for (int j=(N-i)%(N-1); j<N; j+=2){
                    if (arr[i][j] == 0){
                        count2++;
                    }
                }
            }

            if(count1<=count2){
                System.out.print(count1);
            } else if(count1>count2){
                System.out.print(count2);
            }
            sc.close();
    }
}

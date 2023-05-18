import java.util.Scanner;

public class zigtraversal {
public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        int M = sc.nextInt();
        int N = sc.nextInt();
        int matrix[][] = new int[M][N];

        for (int i=0; i<M; i++){
            for (int j=0; j<N; j++){
                matrix[i][j] = sc.nextInt();
            }
        }

        for (int i=0; i<M; i++){
            for (int j=0; j<=i && j<N; j++){
                System.out.print(matrix[i-j][j] + " ");
            }
            System.out.println();
        }

        for (int k=1; k<=N-1; k++){
            for (int i=M-1, j=1; i>=0 && j<=N-1; i--, j++){
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
        sc.close();
    }
}

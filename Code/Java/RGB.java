import java.util.Scanner;

public class RGB {
public static void main (String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            int N = sc.nextInt();
            int arr[] = new int[N-1];

            int count = 0;

            for (int i=0; i<N-1; i++){
                for (int j=0; j<N-1; j++){
                    for (int k=0; k<N-1; k++){
                        if ((arr[i]*arr[j])+arr[k]<=N){
                            count++;
                        }
                    }
                }
            }
            System.out.print(count);
        }
    }
} 

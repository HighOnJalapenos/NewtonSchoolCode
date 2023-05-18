import java.util.Scanner;

public class kOperation {
    public static void main (String args[]){

    try (Scanner sc = new Scanner(System.in)) {
        long N = sc.nextLong();
        long K = sc.nextLong();

            long firstDigit = 0;
            long digit = 10;
            
            for (long i=1; i<=K; i++){
                long J = N;
                
                if(N<10){
                    firstDigit = N;
                }
            
                else {
                    /*while (J>9){
                        J = J / digit;
                    }
                    digit = digit*10;
                    firstDigit = J;*/

                    for (long k=digit; J>9; k*=10){
                        J = J / k;
                        digit = k;
                    }
                    firstDigit = J;
                }
            
                if (firstDigit==1){
                    System.out.print(N);
                }
                
                else {N = N * firstDigit;
                J = N;}
            
            }
            System.out.print(N);
    }
    }
}

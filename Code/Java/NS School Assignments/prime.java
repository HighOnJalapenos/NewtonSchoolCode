import java.util.Scanner;

public class prime {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while(t-->0){
            int n = sc.nextInt();

            int sqrt = (int) Math.sqrt(n);
            int count = 0;
            for(int i=1; i<=sqrt; i++){
                if(n%i==0){
                    if(i%2==0){
                        count++;
                    }
                }
            }

            System.out.println(count);
        }
        sc.close();
    }
}

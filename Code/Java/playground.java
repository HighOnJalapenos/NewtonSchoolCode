import java.util.Scanner;

public class playground{
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int arrA[] = new int[N+1];
        int arrB[] = new int[N];
        int count = 0;

        for (int i=0; i<=N; i++){
            arrA[i] = sc.nextInt();
        }
        for (int i=0; i<N; i++){
            arrB[i] = sc.nextInt();
        }

        for (int i=0; i<N; i++){
            for (int j=i; j<=i+1; j++){
                if(arrB[i]<=arrA[j]){
                count = count + arrB[i];
                arrA[j] = arrA[j] - arrB[i];
                //continue;
                break;
                
                } else{
                    count = count + arrA[j];
                    arrB[i] = arrB[i] - arrA[j];
                }
            }
        }

        System.out.println(count);
        sc.close();
    }
}
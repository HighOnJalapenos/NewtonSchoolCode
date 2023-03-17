import java.util.Scanner;

public class maxminadd {
    public static void main (String[] args){
        /*BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        String line = reader.readLine();
        String nums[] = line.split(" ");
        long A = Long.parseLong(nums[0]);
        long N = Long.parseLong(nums[1]);*/

        Scanner sc = new Scanner(System.in);
        long A = sc.nextLong();
        long N = sc.nextLong();
        boolean zeroFound = false;

        for (long i=0; i<N; i++){

            if(zeroFound == true){
                break;
            }
            
            String num[] = Long.toString(A).split("");
            int min = 10;
            int max = -1;
            int k = num.length;

            if(k>1){

                for(int j=0; j<k; j++){
                    int n = Integer.parseInt(num[j]);

                    if(n==0){
                        zeroFound = true;
                        break;
                    }

                    if(n<min){
                        min = n;
                    }
                    if(n>max){
                        max = n;
                    }
                }
            
            } else {

                max = Integer.parseInt(num[0]);
                min = Integer.parseInt(num[0]);
            }

            A = A + (min*max);
        }

        System.out.print(A);
        sc.close();
    }
}

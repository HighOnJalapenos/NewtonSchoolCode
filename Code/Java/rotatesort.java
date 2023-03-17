import java.util.Arrays;
import java.util.Scanner;

public class rotatesort {

    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();
        
        while(T-->0){
            int N = sc.nextInt();
            int arr[] = new int[N];
            int arr2[] = new int[N];

            for (int i=0; i<N; i++){
                arr[i] = sc.nextInt();
                arr2[i] = arr[i];
            }
            int temporary = arr[0];
            int idx = 0;
            
            Arrays.sort(arr2);

            for (int i=0; i<N; i++){
                if(arr2[i] == temporary){
                    idx = i;
                }
            }

            if(idx==0){
                System.out.println("No");
                continue;
            }

            int temp[] = new int[N];
            int j=0;
            
            for(int i=idx; i<N; i++){
                temp[j] = arr2[i];
                j++;
            }

            for (int i=0; i<idx; i++){
                temp[j] = arr2[i];
                j++;
            }

            if (Arrays.equals(arr, temp)){
                System.out.println("YES");
                continue;
            }

            int b=0;
            int e=N-1;
            while (b<e){
                int a = arr2[e];
                arr2[e] = arr2[b];
                arr2[b] = a;
                b++;
                e--;
            }

            for (int i=0; i<N; i++){
                if(arr2[i] == temporary){
                    idx = i;
                }
            }

            if(idx==0){
                System.out.println("No");
                continue;
            }

            j=0;
            
            for(int i=idx; i<N; i++){
                temp[j] = arr2[i];
                j++;
            }

            for (int i=0; i<idx; i++){
                temp[j] = arr2[i];
                j++;
            }

            if (Arrays.equals(arr, temp)){
                System.out.println("YES");
                continue;
            } else {
                System.out.println("NO");
            }

        } sc.close();
    }
}

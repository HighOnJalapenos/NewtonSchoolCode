import java.util.Scanner;

class Main {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int arr[] = new int[n];

        for (int i=0; i<n; i++){
            arr[i] = sc.nextInt();
        }

        int i=0;
        int j=n-1;

        while (i<=j){
            int mid = (i+j)/2;

            if (arr[mid]!=arr[mid+1] && arr[mid]!=arr[mid]-1){
                System.out.print(arr[mid]);
                break;
            }
            if (arr[i]!=arr[i+1]){
                System.out.print(arr[i]);
                break;
            }
            if (arr[j]!=arr[j-1]){
                System.out.print(arr[j]);
                break;
            }
            if (arr[mid]==arr[mid-1]){
                j=mid-2;
            } else {
                i=mid+2;
            }
        } sc.close();
    }
}
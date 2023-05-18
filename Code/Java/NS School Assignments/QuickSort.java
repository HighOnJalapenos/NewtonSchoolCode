import java.util.*; // contains Collections framework

 public class QuickSort {

    public static void swap(int arr[], int i, int j){
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    public static int getIndex(int arr[], int left, int right){
        int partIdx = right;
        int i = left;
        for (int j=left; j<right; j++){
            if(arr[j]<arr[partIdx]){
                swap(arr, arr[i], arr[j]);
                i++;
            }
        }
        swap(arr, arr[i], arr[partIdx]);
        return i;
    }

    public static void quickSort(int arr[], int left, int right){
        if(left<right){
            int partIdx = getIndex(arr, left, right);
            quickSort(arr, left, partIdx-1);
            quickSort(arr, partIdx+1, right);
        }
    }

    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        int arr[] = new int[N];

        for (int i=0; i<N; i++){
            arr[i] = sc.nextInt();
        }

        quickSort(arr, 0, N-1);

        /*for (int i=1; i<N; i+=2){
            int temp = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = arr[i];
        }*/

        for (int i=0; i<N; i++){
            System.out.print(arr[i] + " ");
        }
        sc.close();
    }
}
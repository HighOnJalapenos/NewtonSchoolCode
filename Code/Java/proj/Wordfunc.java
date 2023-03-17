package proj;

import java.util.Arrays;
import java.util.Scanner;

class Paragraph{
    String[] arr;

    public Paragraph(String[] arr){
        this.arr = arr;
    }

    public String toString(){
        return Arrays.toString(arr);
    }
}

public class Wordfunc {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        int para = 0;
        int lines = 0;
        int words = 0;
        int c = 0;
        
        while(s!=""){
            para++;

            String[] word = s.split(" ");
            words += word.length;
            for(String w:word){
                if(w.charAt(w.length()-1) == '.'){
                    lines++;
                }
                c += w.length();
            }
            s = sc.nextLine();
        }
        
        System.out.println("The number of paragraph is: " + para);
        System.out.println("The number of lines is: " + lines);
        System.out.println("The number of words is: " + words);
        System.out.println("The number of character is: " + c);

        sc.close();
    }
}

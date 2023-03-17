import javax.swing.plaf.basic.BasicInternalFrameTitlePane;
import java.util.Random;
import java.util.Scanner;

public class UpDownGame {

    public static int game(Random r, Scanner sc){ //send random num and input instead of object
        int number = r.nextInt(100);
        int count = 0;
        boolean flag = true;

        while(flag) {
            System.out.println("Please enter your guess. Guess " + count + ":");
            int guess = sc.nextInt();
            if(guess<0 || guess>100){
                System.out.println("Entered guess is out of the 0-100 range. Invalid guess.");
                continue;
            }
            if(guess==number){
                System.out.println("YOU HAVE GUESSED IT CORRECT!! \nNumber of guesses " + count);
                flag = false;
            } else if(guess<number){
                System.out.println("Up");
            } else{
                System.out.println("Down");
            }
            count++;
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random r = new Random();
        boolean flag = false;
        int maxRes = 0;
        System.out.println("\nWelcome to the UpDown Game!! \nPlayer, would you like to know the rules of the game. " +
                "For 'How to Play' please enter 'Y', to skip and continue to the game please enter 'N'.");
        char c = sc.next().charAt(0);
        while(true) {
            if (c == 'Y') {
                flag = true;
                break;
            } else if (c == 'N') {
                flag = false;
                break;
            } else {
                System.out.println("Invalid Character!! Please enter a valid character.");
                System.out.println("For 'How to Play' please enter 'Y', to skip and continue to the game please enter 'N'.");
                c = sc.next().charAt(0);
            }
        }

        while(flag){
            System.out.println("A number between 0 and 100 has been chosen at random. The Player (which is you) has to guess that number. \nIf the guess is correct, Player wins! but if it is" +
                    " incorrect then a prompt will be shared which tells if the player should 'Up' the guess or 'Down' the guess. \nEnter 'Y' to start.");
            c = sc.next().charAt(0);
            if(c=='Y'){
                flag = false;
            } else {
                System.out.println("Incorrect prompt added. Repeating instructions.");
            }
        }

        while(!flag){
            int res = game(r,sc);
            maxRes = Math.max(res, maxRes); // change to min
            System.out.println("Play again to guess the number in less tries. To play again enter 'Y' or to QUIT enter 'N'.");
            c = sc.next().charAt(0);
            if(c=='N'){
                System.out.println("Thank you for playing the game. Your best score was " + maxRes);
                flag = true;
            } else {
                System.out.println("Starting the game again. Try and beat your best score.");
            }
        }
    }
}

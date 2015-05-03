/*
 *
*/

package nameGame;

import java.util.Scanner;

public class NameGame {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter your name: ");
		
		String name = sc.next();
		
		System.out.println(name + ", " + name + " bo " + "B" + name.substring(1) + ",");
		System.out.println("Bonana fanana fo " + "F" + name.substring(1) + ",");
		System.out.println("Fee fy mo " + "M" + name.substring(1) + ",");
		System.out.println(name + "!");
	}

}


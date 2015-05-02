package sifrovanje;

import java.util.Scanner;

public class Sifrovanje {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Unesite zeljenu recenicu: ");
		String recenica = sc.nextLine();
		String sifrovano = null;
		for(int i = 0; i < recenica.length(); i++){
			char c = recenica.charAt(i);
			if(c == ' '){
				sifrovano += " ";
				continue;
			}
			switch (c) {
			case 'A':
			case 'a':
			case 'E':
			case 'e':
			case 'I':
			case 'i':
			case 'O':
			case 'o':
			case 'U':
			case 'u':
			case '!':
			case '\'':
				if(i == 0)
					sifrovano = c + "";
				else 
					sifrovano += c;
				break;
			

			default:
				if(i == 0)
					sifrovano = c + "o" + Character.toLowerCase(c);
				else
					sifrovano += c + "o" + c;
				break;
			}
		}
		
		System.out.println("Sifrovana recenica je: " + sifrovano);
			
		sc.close();
	}

}

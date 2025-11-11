import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

class Result {

    /*
     * Complete the 'simpleArraySum' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts INTEGER_ARRAY ar as parameter.
     */

    public static int simpleArraySum(List<Integer> ar) {
    // Write your code here
        int  sum = 0;
        for(int i = 0; i < ar.size(); i++){ // on parcourt jusqu'au nombre de size() qui renvoie la taille du Liste
            sum = sum + ar.get(i);
        }
        return sum;

    }

}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in)); // On initialise un objet bufferedReader
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH"))); // On initialise un objet bufferedWriter
        
        // bufferedReader.readLine() : lit les valeurs en console en String

        int arCount = Integer.parseInt(bufferedReader.readLine().trim()); // On prend en memoire la taille du tableau en parsant en Int le String passe en console retourne par bufferedReader.readLine().trim()
 
        String[] arTemp = bufferedReader.readLine().replaceAll("\\s+$", "").split(" "); // On prend en tableau de String les futurs elements du tableau d'entiers retourne par 
        
        List<Integer> ar = new ArrayList<>(); // On initialise un tableau de Integer pour y mettre les futurs elements du tableau d entiers

        for (int i = 0; i < arCount; i++) { // boucle qui parcourt arTemp jusqu a arCount (taille du tableau)
            int arItem = Integer.parseInt(arTemp[i]); // on cree une variable arItem pour y mettre les valeurs des elements de arTemp
            ar.add(arItem); // on ajoute arItem dans ar
        }

        int result = Result.simpleArraySum(ar); // calcul des sommes des elements de ar via simpleArraySum()

        bufferedWriter.write(String.valueOf(result)); // ecrit en console la valeur de result (sum) parsed en String
        bufferedWriter.newLine();
        
        // libere les ressources allouees 
        bufferedReader.close(); 
        bufferedWriter.close();
    }
}

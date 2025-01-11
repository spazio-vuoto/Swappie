public class luca{
    public static void main(String[] args){

        int[] luca = {1,2,9,4,5,6,7,15,12};

        insertionSort(luca);

        for(int i : luca){
            System.out.println(i);
        }

    }

    public static void insertionSort(int[] array){
        
        for(int i = 1; i < array.length; i++){

            int temp = array[i];
            int j = i - 1;

            while(j >= 0 && array[j] > temp){
                array[j + 1] = array[j];
                j--; 
            }
            
            array[j + 1] = temp;

        }

    }
}
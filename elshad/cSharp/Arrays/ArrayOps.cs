using System.ComponentModel.DataAnnotations;

class ArrayOps
{
  public static void PrintArray(int[] arr)
  {
    if (arr.Length == 0)
    {
      System.Console.WriteLine("[]");
      return;
    }

    string arrToPrint = "[";
    foreach (int num in arr)
    {
      arrToPrint += $"{num}, ";
    }
    arrToPrint = arrToPrint.Trim();
    arrToPrint = arrToPrint.Substring(0, arrToPrint.Length - 1) + "]";
    System.Console.WriteLine(arrToPrint);
  }
}
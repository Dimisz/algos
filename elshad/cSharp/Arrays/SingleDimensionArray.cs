class SingleDimensionArray
{
  public int[] Arr { get; private set; }

  public SingleDimensionArray(int sizeOfArray)
  {
    Arr = new int[sizeOfArray];
    for (int i = 0; i < Arr.Length; i++)
    {
      Arr[i] = int.MinValue;
    }
  }

  public void PrintArray()
  {
    if (Arr.Length == 0)
    {
      System.Console.WriteLine("[]");
      return;
    }

    string arrToPrint = "[";
    foreach (int num in Arr)
    {
      arrToPrint += $"{num}, ";
    }
    arrToPrint = arrToPrint.Trim();
    arrToPrint = arrToPrint.Substring(0, arrToPrint.Length - 1) + "]";
    System.Console.WriteLine(arrToPrint);
  }

  public void Insert(int location, int valueToBeInserted)
  {
    if (location < 0 || location > Arr.Length - 1)
    {
      System.Console.WriteLine($"Index out of bounds: {location}");
    }
    else if (Arr[location] == int.MinValue)
    {
      Arr[location] = valueToBeInserted;
      System.Console.WriteLine($"Successfully inserted {valueToBeInserted} at index {location}");
    }
    else
    {
      System.Console.WriteLine($"Failed to insert {valueToBeInserted} at index {location}, since this index is already occupied");
    }
  }
}
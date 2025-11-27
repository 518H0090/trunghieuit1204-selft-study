namespace ExtensionMethod
{
    public static class IntExtension
    {
        public static int SumAnotherTwoNumbers(this int num1, int num2, int num3)
        {
            return num1 + num2 + num3;
        }
    }

    public static class StringExtension
    {
        public static void Print(this string text, ConsoleColor color = ConsoleColor.Red)
        {
            Console.ForegroundColor = color;
            Console.WriteLine(text);
            Console.ResetColor();
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            int num1 = 20;
            
            Console.WriteLine(num1.SumAnotherTwoNumbers(30, 60));

            string text = "Test String Extension";

            text.Print(ConsoleColor.DarkBlue);

            Console.WriteLine(text);

            Console.ReadKey();
        }
    }
}
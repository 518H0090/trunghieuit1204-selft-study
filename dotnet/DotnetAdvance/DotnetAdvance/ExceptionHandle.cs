namespace DotnetAdvance
{
    public class ExceptionHandle
    {
        public static void ExampleExceptionProcess()
        {
            try
            {
                int[] mynumbers = new int[] { 1, 2, 3 };
                int i = mynumbers[10];
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                Console.WriteLine(ex.StackTrace);
                Console.WriteLine(ex.Source);
            }
            finally
            {
                int x = 10;
                int y = 0;
                int z;

                try
                {
                    z = x / y;
                }
                catch(DivideByZeroException ex)
                {
                    Console.WriteLine(ex.Message);
                    Console.WriteLine(ex.StackTrace);
                }
                catch(Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    Console.WriteLine(ex.StackTrace);
                }
            }
        }

        public static double DivideTwoNumbers(double x, double y)
        {
            if (y == 0)
            {
                Exception exception = new Exception("y must greater than 0");
                throw exception;
            }

            return x / y;
        }

        public static void UserInput(string input)
        {
            if (input.Length > 10)
            {
                throw new ContextGreaterThanTenException();
            }
        }
    }

    public class ContextGreaterThanTenException: Exception
    {
        const string errorMessage = "Data is too long than 10";

        public ContextGreaterThanTenException() : base(errorMessage)
        {

        }
    }
}

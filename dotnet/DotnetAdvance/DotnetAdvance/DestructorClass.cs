namespace DotnetAdvance
{
    public abstract class DestructorClass
    {
        public DestructorClass()
        {
            Console.ForegroundColor = ConsoleColor.Blue;
            Console.WriteLine("Create DestructorClass");
            Console.ResetColor();
        }

        ~DestructorClass()
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine("Destroy DestructorClass");
            Console.ResetColor();
        }
    }

    public class Product: DestructorClass
    {
        private string _productName;

        public Product(string productName) : base() 
        {
            _productName = productName;
            Console.WriteLine($"Create: {productName}");
        }

        ~Product()
        {
            Console.ForegroundColor = ConsoleColor.Red;
            Console.WriteLine($"Destroy {_productName}");
            Console.ResetColor();
        }
    }
}

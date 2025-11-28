namespace DotnetAdvance
{
    public sealed class CountNumber
    {
        public static int num;

        private CountNumber() { }

        static CountNumber()
        {
            num = 0;
        }

        public static void Count()
        {
            num++;
        }

        public static int GetNum()
        {
            return num;
        }
    }

    public sealed class MethodStatic
    {
        private MethodStatic() { }

        public static int Sum(int a, int b)
        {
            return a + b;
        }
    }
}

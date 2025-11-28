namespace DotnetAdvance
{
    public class MyVector
    {
        private double _x;
        private double _y;

        public double X { set => _x = value; get => _x; }
        public double Y { set => _y = value; get => _y; }

        public MyVector(double x, double y)
        {
            _x = x;
            _y = y;
        }

        public void ShowXY()
        {
            Console.WriteLine("x = " + _x);
            Console.WriteLine("y = " + _y);
        }

        public static MyVector operator+ (MyVector a, MyVector b)
        {
            double sx = a.X + b.X;
            double sy = a.Y + b.Y;

            MyVector v = new MyVector(sx, sy);

            return v;
        }
    }
}

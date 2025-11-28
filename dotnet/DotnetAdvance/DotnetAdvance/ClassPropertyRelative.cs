using System.Numerics;

namespace DotnetAdvance
{
    public class Student
    {
        public readonly string Name;
        public const string SerialNumber = "WT-2339";

        public Student(string Name)
        {
            this.Name = Name;
        }
    }

    public static class NumberStatic
    {
        public static T SumWithColor<T>(T num1, T num2, ConsoleColor color = ConsoleColor.Cyan)
           where T : INumber<T>
        {
            T total = num1 + num2;
            Console.ForegroundColor = color;

            return total;
        }

        public static T SumWithColorGeneric<T>(this T num1, T num2, ConsoleColor color = ConsoleColor.Cyan) 
            where T: INumber<T>
        {
            T total = num1 + num2;
            Console.ForegroundColor = color;

            return total;
        }
    }

    public class IndexerExam
    {
        public string LastName = "David";
        public string FirstName = "Lee";

        public string this[int index]
        {
            get
            {
                switch(index)
                {
                    case 0:
                        return LastName;
                    case 1:
                        return FirstName;
                    default:
                        throw new Exception("Not found with this index");
                }
            }

            set
            {
                switch(index)
                {
                    case 0:
                        LastName = value;
                        break;
                    case 1:
                        FirstName = value;
                        break;
                    default:
                        throw new Exception("Not found with this index");
                }
            }
        }
    }

    public struct AccountIndexer
    {
        private string _firstName = "Ngao da";
        private string _lastName = "Met moi";
        private string _role = "Support";
        private int _access = 0;
        private int _balance = 0;

        public AccountIndexer() { }

        public string this[int index]
        {
            set 
            {
                switch (index)
                {
                    case 0:
                        _firstName = value;
                        break;
                    case 1:
                        _lastName = value;
                        break;
                    case 2:
                        _role = value;
                        break;
                    default:
                        throw new Exception("Not found with this index");
                }
            }

            get
            {
                switch (index)
                {
                    case 0:
                        return _firstName;
                    case 1:
                        return _lastName;
                    case 2:
                        return _role;
                    default:
                        throw new Exception("Not found with this index");
                }
            }
        }

        public int this[string keyword]
        {
            get
            {
                switch(keyword)
                {
                    case "Access":
                        return _access;
                    case "Balance":
                        return _balance;
                    default:
                        throw new Exception("Not found with this index");
                }
            }

            set
            {
                switch (keyword)
                {
                    case "Access":
                        _access = value;
                        break;
                    case "Balance":
                        _balance = value;
                        break;
                    default:
                        throw new Exception("Not found with this index");
                }
            }
        }
    }
}

namespace DotnetAdvance
{
    public class Program
    {
        public static void Main(string[] args)
        {
            #region DestructorClass
            TestConstructor();
            
            GC.Collect();
            #endregion DestructorClass

            #region OperatorOverloading
            MyVector v1 = new MyVector(2, 3);
            MyVector v2 = new MyVector(3, 4);

            MyVector v3 = v1 + v2;
            v3.ShowXY();
            #endregion OperatorOverloading

            #region StaticMember
            CountNumber.Count();
            CountNumber.Count();
            CountNumber.GetNum();

            Console.WriteLine(MethodStatic.Sum(4, 5));
            #endregion StaticMember

            #region ClassPropertyRelative
            Student student = new Student("Core Member");
            Console.WriteLine(Student.SerialNumber);
            Console.WriteLine(student.Name);

            Console.WriteLine(NumberStatic.SumWithColor(2, 4.5, color: ConsoleColor.Green));
            Console.WriteLine(2.SumWithColorGeneric(4, ConsoleColor.Green));

            Console.ResetColor();

            IndexerExam indexerExam = new IndexerExam();
            Console.WriteLine(indexerExam[0] + " " + indexerExam[1]);

            AccountIndexer accountIndexer = new AccountIndexer();

            accountIndexer[0] = "Binh Khiem";
            accountIndexer[1] = "Nguyen";
            accountIndexer[2] = "Bachelor";
            accountIndexer["Access"] = 30;
            accountIndexer["Balance"] = 5000;

            Console.WriteLine(accountIndexer[0] + " " + accountIndexer[1] + " " + accountIndexer[2]);
            Console.WriteLine(accountIndexer["Access"] + " " + accountIndexer["Balance"]);
            #endregion ClassPropertyRelative

            #region ExceptionHandle

            ExceptionHandle.ExampleExceptionProcess();

            try
            {
                ExceptionHandle.DivideTwoNumbers(100, 0);
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }

            try
            {
                ExceptionHandle.UserInput("This is a too long context so it will throw new exception");
            }
            catch(ContextGreaterThanTenException ex)
            {
                Console.ForegroundColor = ConsoleColor.DarkMagenta;
                Console.WriteLine(ex.ToString());
                Console.ResetColor();
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }

            #endregion ExceptionHandle

            Console.ReadKey();
        }

        #region DestructorClass
        static void TestConstructor()
        {
            Product product = new Product("ABC");
            product = null;
        }
        # endregion DestructorClass
    }
}
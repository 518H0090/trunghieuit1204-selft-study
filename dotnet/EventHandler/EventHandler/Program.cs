namespace EventProcess
{
    public class PersonEventArgs : EventArgs
    {
        private string _name;
        private string _email;
        private string _city;

        public string Name { get => _name; }
        public string Email { get => _email; }
        public string City { get => _city; }

        public PersonEventArgs(string name, string email, string city)
        {
            _name = name;
            _email = email;
            _city = city;
        }

        public override string ToString()
        {
            return $"Name : {_name} - Email : {_email} - City : {_city}";
        }
    }

    public class PersonPublisher
    {
        public event EventHandler<PersonEventArgs> EventPublish;

        public void Send()
        {
            EventPublish?.Invoke(this, new PersonEventArgs("Tieu Vuong", "tieuvuong@gmail.com", "xenshencity"));
        }
    }

    public class TeacherSubscriber
    {
        public void Sub(PersonPublisher publisher)
        {
            publisher.EventPublish += ProcessEvent;
        }

        private void ProcessEvent(object sender, PersonEventArgs e)
        {
            var info = "Teacher Info : " + e.ToString();
            Console.WriteLine(info);
        }
    }

    public class EmployeeSubscriber
    {
        public void Sub(PersonPublisher publisher)
        {
            publisher.EventPublish += ProcessEvent;
        }

        private void ProcessEvent(object sender, PersonEventArgs e)
        {
            var info = "Employee Info : " + e.ToString();
            Console.WriteLine(info);
        }
    }

    public class StudentSubscriber
    {
        public void Sub(PersonPublisher publisher)
        {
            publisher.EventPublish += ProcessEvent;
        }

        private void ProcessEvent(object sender, PersonEventArgs e)
        {
            var info = "Student Info : " + e.ToString();
            Console.WriteLine(info);
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            PersonPublisher publisher = new PersonPublisher();

            TeacherSubscriber teacherSubscriber = new TeacherSubscriber();
            teacherSubscriber.Sub(publisher);

            EmployeeSubscriber employeeSubscriber = new EmployeeSubscriber();
            employeeSubscriber.Sub(publisher);

            StudentSubscriber studentSubscriber = new StudentSubscriber();
            studentSubscriber.Sub(publisher);

            publisher.Send();

            Console.ReadKey();
        }
    }
}
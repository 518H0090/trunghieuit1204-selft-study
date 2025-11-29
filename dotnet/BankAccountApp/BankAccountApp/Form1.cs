namespace BankAccountApp
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();

            BankAccount bankAccount1 = new BankAccount("Balan Two");

            BankAccount bankAccount2 = new BankAccount("New Aow");

            BankAccount bankAccount3 = new BankAccount("You know");

            List<BankAccount> bankAccounts = new() { bankAccount1, bankAccount2, bankAccount3};
            BankAccountsGrid.DataSource = bankAccounts;
        }
    }
}

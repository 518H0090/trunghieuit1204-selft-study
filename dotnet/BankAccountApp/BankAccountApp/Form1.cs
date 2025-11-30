namespace BankAccountApp
{
    public partial class Form1 : Form
    {
        List<BankAccount> BankAccounts = new List<BankAccount>();

        public Form1()
        {
            InitializeComponent();
        }

        private void CreateAccountBtn_Click(object sender, EventArgs e)
        {
            var newOwner = OwnerTxt.Text;

            if (string.IsNullOrEmpty(newOwner))
            {
                MessageBox.Show("Owner should not be empty");
                return;
            }

            BankAccount bankAccount = new BankAccount(newOwner);
            BankAccounts.Add(bankAccount);

            RefreshGrid();

            OwnerTxt.Text = string.Empty;

            MessageBox.Show("Create new account successfully");
        }

        private void DepositBtn_Click(object sender, EventArgs e)
        {
            if (BankAccountsGrid.SelectedRows.Count == 1 && AmountNum.Value > 0)
            {
                BankAccount selectedBankAccount = BankAccountsGrid.SelectedRows[0].DataBoundItem as BankAccount;

                selectedBankAccount.Balance += AmountNum.Value;

                RefreshGrid();

                AmountNum.Value = 0;

                MessageBox.Show("Deposit successfully");
            }
            else
            {
                MessageBox.Show("Not Allow Deposit");
            }
        }

        private void WithdrawBtn_Click(object sender, EventArgs e)
        {
            if (BankAccountsGrid.SelectedRows.Count == 1 && AmountNum.Value > 0)
            {
                BankAccount selectedBankAccount = BankAccountsGrid.SelectedRows[0].DataBoundItem as BankAccount;

                selectedBankAccount.Balance -= AmountNum.Value;

                RefreshGrid();

                AmountNum.Value = 0;

                MessageBox.Show("Withdraw successfully");
            }
            else
            {
                MessageBox.Show("Not Allow Withdraw");
            }
        }

        private void RefreshGrid()
        {
            BankAccountsGrid.DataSource = null;
            BankAccountsGrid.DataSource = BankAccounts;
        }
    }
}

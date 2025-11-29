namespace BankAccountApp
{
    internal class BankAccount
    {
        public string Owner { get; set; } = string.Empty;

        public Guid AccountNumber { get; set; }

        public decimal Balance {  get; set; }

        public BankAccount() { }

        public BankAccount(string owner)
        {
            Owner = owner;
            AccountNumber = Guid.NewGuid();
            Balance = 0;
        }
    }
}

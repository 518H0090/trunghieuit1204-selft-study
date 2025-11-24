namespace FirstExampleAPIDotnet.DTOs
{
    public class AddSuperHeroDto
    {
        public required string Name { set; get; }

        public string FirstName { set; get; } = string.Empty;

        public string LastName { set; get; } = string.Empty;

        public string Place { set; get; } = string.Empty;
    }
}

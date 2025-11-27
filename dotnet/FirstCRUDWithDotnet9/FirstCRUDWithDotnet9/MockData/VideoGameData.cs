using FirstCRUDWithDotnet9.Models;

namespace FirstCRUDWithDotnet9.MockData
{
    public sealed class VideoGameData
    {
        private static List<VideoGame> videoGames = new List<VideoGame>
        {
            new VideoGame
            {
                Id = 1,
                Title = "Spider-Man 2",
                Platform = "PS5",
                Developer = "Insomniac Games",
                Publisher = "Sony Interactive Entertainment"
            },
            new VideoGame
            {
                Id = 2,
                Title = "The Legend of Zelda: Breath of the Wild",
                Platform = "Nintendo Switch",
                Developer = "Nintendo EPD",
                Publisher = "Nintendo"
            },
            new VideoGame
            {
                Id = 3,
                Title = "Cyberpunk 2077",
                Platform = "PC",
                Developer = "CD Project Red",
                Publisher = "CD Project"
            }
        };

        public static List<VideoGame> GetVideoGames()
        {
            return videoGames;
        }

        public static VideoGame GetVideoGameById(int id)
        {
            return videoGames.FirstOrDefault(x => x.Id == id);
        }

        public static int MaxId()
        {
            return videoGames.Max(x => x.Id);
        }

        public static void AddVideoGame(VideoGame request)
        {
            videoGames.Add(request);
        }

        public static void UpdateVideoGame(VideoGame request, VideoGame actualData)
        {
            actualData.Id = request.Id;
            actualData.Title = request.Title;
            actualData.Platform = request.Platform;
            actualData.Developer = request.Developer;
            actualData.Publisher = request.Publisher;
        }

        public static void DeleteVideoGame(VideoGame request)
        {
            videoGames.Remove(request);
        }
    }
}

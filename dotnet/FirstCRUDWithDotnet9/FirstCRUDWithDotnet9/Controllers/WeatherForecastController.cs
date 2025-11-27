using FirstCRUDWithDotnet9.MockData;
using FirstCRUDWithDotnet9.Models;
using Microsoft.AspNetCore.Mvc;

namespace FirstCRUDWithDotnet9.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet]
        public IActionResult GetVideoGames()
        {
            return Ok(VideoGameData.GetVideoGames());
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult GetVideoGame(int id)
        {
            var game = VideoGameData.GetVideoGameById(id);

            if (game is null)
                return NotFound();

            return Ok(game);
        }

        [HttpPost]
        public IActionResult AddVideoGame([FromBody] VideoGame request)
        {
            if (request is null)
                return BadRequest();

            request.Id = VideoGameData.MaxId() + 1;
            VideoGameData.AddVideoGame(request);

            return CreatedAtAction(nameof(AddVideoGame), request);
        }

        [HttpPut]
        public IActionResult UpdateVideoGame(VideoGame request)
        {
            var game = VideoGameData.GetVideoGameById(request.Id);

            if (game is null)
                return NotFound();

            VideoGameData.UpdateVideoGame(request, game);
            return NoContent();
        }

        [HttpDelete]
        [Route("{id}")]
        public IActionResult DeleteVideoGame(int id)
        {
            var game = VideoGameData.GetVideoGameById(id);

            if (game is null)
                return NotFound();

            VideoGameData.DeleteVideoGame(game);
            return NoContent();
        }
    }
}

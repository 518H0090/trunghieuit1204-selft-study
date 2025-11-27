using AutoMapper;
using FirstCRUDWithDotnet9.DataContext;
using FirstCRUDWithDotnet9.Dtos;
using FirstCRUDWithDotnet9.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FirstCRUDWithDotnet9.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VideoGameController : ControllerBase
    {
        private readonly VideoGameDbContext _context;
        private readonly IMapper _mapper;

        public VideoGameController(VideoGameDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetVideoGames()
        {
            return Ok(await _context.VideoGames.ToListAsync());
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetVideoGame(int id)
        {
            var game = await _context.VideoGames.FindAsync(id);

            if (game is null)
                return NotFound();

            return Ok(game); 
        }

        [HttpPost]
        public async Task<IActionResult> AddVideoGame([FromBody] VideoGameDto request)
        {
            if (request is null)
                return BadRequest();

            var newGame = await _context.VideoGames.AddAsync(_mapper.Map<VideoGame>(request));
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(AddVideoGame), request);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateVideoGame(VideoGame request)
        {
            var game = await _context.VideoGames.FindAsync(request.Id);

            if (game is null)
                return NotFound();

            _mapper.Map(request, game);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteVideoGame(int id)
        {
            var game = await _context.VideoGames.FindAsync(id);

            if (game is null)
                return NotFound();

            _context.VideoGames.Remove(game);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}

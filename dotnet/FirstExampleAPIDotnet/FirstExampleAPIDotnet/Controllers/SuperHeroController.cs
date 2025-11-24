using AutoMapper;
using FirstExampleAPIDotnet.Data;
using FirstExampleAPIDotnet.DTOs;
using FirstExampleAPIDotnet.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FirstExampleAPIDotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SuperHeroController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;

        public SuperHeroController(DataContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllHeroes()
        {
            var heroes = await _context.SuperHeroes.ToListAsync();

            return Ok(heroes);
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetHero(int id)
        {
            var hero = await _context.SuperHeroes.FindAsync(id);

            if (hero == null)
                return NotFound("Hero not found");

            return Ok(hero);
        }

        [HttpPost]
        public async Task<IActionResult> AddHero([FromBody] AddSuperHeroDto hero)
        {
            await _context.SuperHeroes.AddAsync(_mapper.Map<SuperHero>(hero));
            await _context.SaveChangesAsync();

            return Ok(await _context.SuperHeroes.ToListAsync());
        }

        [HttpPut]
        public async Task<IActionResult> UpdateHero([FromBody] UpdateSuperHeroDto request)
        {
            var hero = await _context.SuperHeroes.FindAsync(request.Id);

            if (hero == null)
                return NotFound("Hero not found");

            _mapper.Map(request, hero);

            await _context.SaveChangesAsync();

            return Ok(await _context.SuperHeroes.ToListAsync());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> DeleteHero([FromRoute] int id)
        {
            var hero = await _context.SuperHeroes.FindAsync(id);

            if (hero == null)
                return NotFound("Hero not found");

            _context.SuperHeroes.Remove(hero);

            await _context.SaveChangesAsync();

            return Ok(await _context.SuperHeroes.ToListAsync());
        }
    }
}

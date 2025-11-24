using AutoMapper;
using FirstExampleAPIDotnet.DTOs;
using FirstExampleAPIDotnet.Entities;

namespace FirstExampleAPIDotnet
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<AddSuperHeroDto, SuperHero>();
            CreateMap<UpdateSuperHeroDto, SuperHero>();
        }
    }
}

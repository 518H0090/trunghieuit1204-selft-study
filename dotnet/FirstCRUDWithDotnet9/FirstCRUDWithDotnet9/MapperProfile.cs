using AutoMapper;
using FirstCRUDWithDotnet9.Dtos;
using FirstCRUDWithDotnet9.Models;

namespace FirstCRUDWithDotnet9
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<VideoGameDto, VideoGame>();
            CreateMap<VideoGame, VideoGame>();
        }
    }
}

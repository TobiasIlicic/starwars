import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { MoviesService } from './movies.service';
import { Movie } from './schemas/movies.schema';

const mockMovie = {
  title: 'Test Movie',
  episode_id: 1,
  opening_crawl: 'Test Crawl',
  director: 'Test Director',
  producer: 'Test Producer',
  release_date: new Date("1977-05-25T00:00:00.000+00:00"),
  species: ['Species 1', 'Species 2'],
  starships: ['Starship 1', 'Starship 2'],
  vehicles: ['Vehicle 1', 'Vehicle 2'],
  characters: ['Character 1', 'Character 2'],
  planets: ['Planet 1', 'Planet 2'],
  url: 'Test URL',
  created: 'Test Created',
  edited: 'Test Edited',
};

describe('MoviesService', () => {
  let service: MoviesService;
  let model: Model<Movie>;

  const MoviesArray = [
    {
      title: 'Test Movie 1',
      episode_id: 1,
      opening_crawl: 'Test Crawl',
      director: 'Test Director',
      producer: 'Test Producer',
      release_date: new Date("1977-05-25T00:00:00.000+00:00"),
      species: ['Species 1', 'Species 2'],
      starships: ['Starship 1', 'Starship 2'],
      vehicles: ['Vehicle 1', 'Vehicle 2'],
      characters: ['Character 1', 'Character 2'],
      planets: ['Planet 1', 'Planet 2'],
      url: 'Test URL',
      created: 'Test Created',
      edited: 'Test Edited',
    },
    {
      title: 'Test Movie 2',
      episode_id: 1,
      opening_crawl: 'Test Crawl',
      director: 'Test Director',
      producer: 'Test Producer',
      release_date: new Date("1977-05-25T00:00:00.000+00:00"),
      species: ['Species 1', 'Species 2'],
      starships: ['Starship 1', 'Starship 2'],
      vehicles: ['Vehicle 1', 'Vehicle 2'],
      characters: ['Character 1', 'Character 2'],
      planets: ['Planet 1', 'Planet 2'],
      url: 'Test URL',
      created: 'Test Created',
      edited: 'Test Edited',
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesService,
        {
          provide: getModelToken('Movie'),
          useValue: {
            new: jest.fn().mockResolvedValue(mockMovie),
            constructor: jest.fn().mockResolvedValue(mockMovie),
            find: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
    model = module.get<Model<Movie>>(getModelToken('Movie'));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  /*it('should return all Movies', async () => {
    jest.spyOn(model, 'find').mockReturnValue({
      exec: jest.fn().mockResolvedValueOnce(MoviesArray),
    } as any);
    const Movies = await service.findAll();
    expect(Movies).toEqual(MoviesArray);
  });*/

  it('should insert a new Movie', async () => {
    jest.spyOn(model, 'create').mockImplementationOnce(() =>
      Promise.resolve({
        title: 'Test Movie',
        episode_id: 1,
        opening_crawl: 'Test Crawl',
        director: 'Test Director',
        producer: 'Test Producer',
        release_date: new Date("1977-05-25T00:00:00.000+00:00"),
        species: ['Species 1', 'Species 2'],
        starships: ['Starship 1', 'Starship 2'],
        vehicles: ['Vehicle 1', 'Vehicle 2'],
        characters: ['Character 1', 'Character 2'],
        planets: ['Planet 1', 'Planet 2'],
        url: 'Test URL',
        created: 'Test Created',
        edited: 'Test Edited',
      } as any),
    );
    const newMovie = await service.create({
      title: 'Test Movie',
      episode_id: 1,
      opening_crawl: 'Test Crawl',
      director: 'Test Director',
      producer: 'Test Producer',
      release_date: new Date("1977-05-25T00:00:00.000+00:00"),
      species: ['Species 1', 'Species 2'],
      starships: ['Starship 1', 'Starship 2'],
      vehicles: ['Vehicle 1', 'Vehicle 2'],
      characters: ['Character 1', 'Character 2'],
      planets: ['Planet 1', 'Planet 2'],
      url: 'Test URL',
      created: 'Test Created',
      edited: 'Test Edited',
    });
    expect(newMovie).toEqual(mockMovie);
  });
});
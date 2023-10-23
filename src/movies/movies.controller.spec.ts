import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from './movies.controller';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';
const ObjectId = require('mongoose').Types.ObjectId;

describe('Movies Controller', () => {
  let controller: MoviesController;
  let service: MoviesService;
  const CreateMovieDto: CreateMovieDto = {
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
    _id: new ObjectId(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [
        {
          provide: MoviesService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([
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
                created: '2014-12-10T14:23:31.880000Z',
                edited: '2014-12-10T14:23:31.880000Z',
                
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
                created: '2014-12-10T14:23:31.880000Z',
                edited: '2014-12-10T14:23:31.880000Z',
                
              },
              {
                title: 'Test Movie 3',
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
                created: '2014-12-10T14:23:31.880000Z',
                edited: '2014-12-10T14:23:31.880000Z',
                
              },
            ]),
            create: jest.fn().mockResolvedValue(CreateMovieDto),
          },
        },
      ],
    }).compile();

    controller = module.get<MoviesController>(MoviesController);
    service = module.get<MoviesService>(MoviesService);
  });

  describe('create()', () => {
    it('should create a new movie', async () => {
      const createSpy = jest
        .spyOn(service, 'create')
        .mockResolvedValueOnce(mockMovie);

      await controller.create(CreateMovieDto);
      expect(createSpy).toHaveBeenCalledWith(CreateMovieDto);
    });
  });

  describe('findAll()', () => {
    it('should return an array of movies', async () => {
      expect(controller.findAll()).resolves.toEqual([
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
          created: '2014-12-10T14:23:31.880000Z',
          edited: '2014-12-10T14:23:31.880000Z'
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
          created: '2014-12-10T14:23:31.880000Z',
          edited: '2014-12-10T14:23:31.880000Z'
        },
        {
          title: 'Test Movie 3',
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
          created: '2014-12-10T14:23:31.880000Z',
          edited: '2014-12-10T14:23:31.880000Z'
        },
      ]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });
});
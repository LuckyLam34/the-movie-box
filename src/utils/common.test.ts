import {
  convertArrToObj,
  mergeMovieGenre,
  filterMoviesWithSelectedGenre,
} from './common';

test('Test function convertArrToObj', () => {
  const testArr = [
    {
      id: 1,
      name: 'Jack',
    },
    {
      id: 2,
      name: 'Rose',
    },
  ];
  const results = convertArrToObj(testArr, 'id');
  const expectedResults = {
    1: {
      id: 1,
      name: 'Jack',
    },
    2: {
      id: 2,
      name: 'Rose',
    },
  };

  expect(expectedResults).toEqual(results);
});

test('Test function mergeMovieGenre', () => {
  const testMoviesArr = [
    {
      popularity: 83.955,
      vote_count: 5370,
      video: false,
      poster_path: '/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg',
      id: 330457,
      adult: false,
      backdrop_path: '/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg',
      original_language: 'en',
      original_title: 'Frozen II',
      genre_ids: [1, 2, 3],
      title: 'Frozen II',
      vote_average: 7.3,
    },
    {
      popularity: 49.479,
      vote_count: 1865,
      video: false,
      poster_path: '/oL2YfVznSkKh6tGWR98j3hxSRZ5.jpg',
      id: 8619,
      adult: false,
      backdrop_path: '/m11Mej9vbQqcXWgYrgPboCJ9NUh.jpg',
      original_language: 'en',
      original_title: 'Master and Commander: The Far Side of the World',
      genre_ids: [1],
      title: 'Master and Commander: The Far Side of the World',
      vote_average: 7,
    },
  ];

  const genreObj = {
    1: {
      id: 1,
      name: 'Action',
    },
    2: {
      id: 2,
      name: 'Fantasy',
    },
    3: {
      id: 3,
      name: 'Drama',
    },
  };

  const expectedResults = [
    {
      popularity: 83.955,
      vote_count: 5370,
      video: false,
      poster_path: '/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg',
      id: 330457,
      adult: false,
      backdrop_path: '/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg',
      original_language: 'en',
      original_title: 'Frozen II',
      genre_ids: [1, 2, 3],
      title: 'Frozen II',
      vote_average: 7.3,
      genres: ['Action', 'Fantasy', 'Drama'],
    },
    {
      popularity: 49.479,
      vote_count: 1865,
      video: false,
      poster_path: '/oL2YfVznSkKh6tGWR98j3hxSRZ5.jpg',
      id: 8619,
      adult: false,
      backdrop_path: '/m11Mej9vbQqcXWgYrgPboCJ9NUh.jpg',
      original_language: 'en',
      original_title: 'Master and Commander: The Far Side of the World',
      genre_ids: [1],
      title: 'Master and Commander: The Far Side of the World',
      vote_average: 7,
      genres: ['Action'],
    },
  ];
  const results = mergeMovieGenre(testMoviesArr, genreObj);

  expect(results).toEqual(expectedResults);
});

test('Test function filterMoviesWithSelectedGenre', () => {
  const testMoviesArr = [
    {
      popularity: 83.955,
      vote_count: 5370,
      video: false,
      poster_path: '/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg',
      id: 330457,
      adult: false,
      backdrop_path: '/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg',
      original_language: 'en',
      original_title: 'Frozen II',
      genre_ids: [1, 2, 3],
      title: 'Frozen II',
      vote_average: 7.3,
      genres: ['Action', 'Fantasy', 'Drama'],
    },
    {
      popularity: 49.479,
      vote_count: 1865,
      video: false,
      poster_path: '/oL2YfVznSkKh6tGWR98j3hxSRZ5.jpg',
      id: 8619,
      adult: false,
      backdrop_path: '/m11Mej9vbQqcXWgYrgPboCJ9NUh.jpg',
      original_language: 'en',
      original_title: 'Master and Commander: The Far Side of the World',
      genre_ids: [1],
      title: 'Master and Commander: The Far Side of the World',
      vote_average: 7,
      genres: ['Action'],
    },
  ];
  let testGenreId = -1;
  let results = filterMoviesWithSelectedGenre(testGenreId, testMoviesArr);
  let expectedResults = [
    {
      popularity: 83.955,
      vote_count: 5370,
      video: false,
      poster_path: '/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg',
      id: 330457,
      adult: false,
      backdrop_path: '/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg',
      original_language: 'en',
      original_title: 'Frozen II',
      genre_ids: [1, 2, 3],
      title: 'Frozen II',
      vote_average: 7.3,
      genres: ['Action', 'Fantasy', 'Drama'],
    },
    {
      popularity: 49.479,
      vote_count: 1865,
      video: false,
      poster_path: '/oL2YfVznSkKh6tGWR98j3hxSRZ5.jpg',
      id: 8619,
      adult: false,
      backdrop_path: '/m11Mej9vbQqcXWgYrgPboCJ9NUh.jpg',
      original_language: 'en',
      original_title: 'Master and Commander: The Far Side of the World',
      genre_ids: [1],
      title: 'Master and Commander: The Far Side of the World',
      vote_average: 7,
      genres: ['Action'],
    },
  ];

  expect(results).toEqual(expectedResults);

  testGenreId = 3;
  expectedResults = [
    {
      popularity: 83.955,
      vote_count: 5370,
      video: false,
      poster_path: '/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg',
      id: 330457,
      adult: false,
      backdrop_path: '/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg',
      original_language: 'en',
      original_title: 'Frozen II',
      genre_ids: [1, 2, 3],
      title: 'Frozen II',
      vote_average: 7.3,
      genres: ['Action', 'Fantasy', 'Drama'],
    },
  ];
  results = filterMoviesWithSelectedGenre(testGenreId, testMoviesArr);

  expect(results).toEqual(expectedResults);
});

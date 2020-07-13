export function convertArrToObj(arr: any[], objKeyName = 'id') {
  const obj: any = {};

  arr.forEach((item: any) => {
    obj[item[objKeyName]] = item;
  });

  return obj;
}

export function mergeMovieGenre(moviesArr: any[] = [], genreObj: any) {
  return moviesArr.map((movieItem: any) => {
    let genres = movieItem.genre_ids;

    genres = genres.map((item: number) => {
      return genreObj[item] ? genreObj[item].name : '';
    });

    return Object.assign({}, movieItem, { genres });
  });
}

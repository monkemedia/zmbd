const fakeMoviesData = {
  results: [
    {
      genre_ids: [12],
      id: 420818,
      original_title: 'The Lion King',
      overview: 'Simba idolises his father',
      poster_path: '/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
      release_date:'2019-07-12',
      title: 'The Lion King',
      vote_average: 7.2
    },
    {
      genre_ids: [12],
      id: 420819,
      original_title: 'Monkey film',
      overview: 'A robot comes from the future',
      poster_path: '/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
      release_date:'2019-07-12',
      title: 'Terminator',
      vote_average: 4
    },
    {
      genre_ids: [2],
      id: 420820,
      original_title: 'Terminator',
      overview: 'A robot comes from the future',
      poster_path: '/dzBtMocZuJbjLOXvrl4zGYigDzh.jpg',
      release_date:'2019-07-12',
      title: 'Terminator',
      vote_average: 5
    }
  ]
}

export default {
  async moviesNowPlaying () {
    return await new Promise(resolve => {
      resolve(fakeMoviesData)
    })
  }
}

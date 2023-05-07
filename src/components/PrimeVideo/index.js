import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="app-banner"
      />
      <div className="movies-section">
        <h1 className="movies-category-heading">Action Movies</h1>
        <MoviesSlider
          moviesList={moviesList.filter(
            eachMovie => eachMovie.categoryId === 'ACTION',
          )}
        />
        <h1 className="movies-category-heading">Comedy Movies</h1>
        <MoviesSlider
          moviesList={moviesList.filter(
            eachMovie => eachMovie.categoryId === 'COMEDY',
          )}
        />
      </div>
    </div>
  )
}

export default PrimeVideo

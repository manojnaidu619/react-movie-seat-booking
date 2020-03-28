import React, { useContext } from "react"
import MovieContext from "../contexts/MovieContext"

const Header = () => {

	const { movies } = useContext(MovieContext)
	const movieData = useContext(MovieContext)

	const GenerateOptions = () => {
		const moviesObject = movies.movieNames
		return Object.keys(moviesObject).map((movie, key) => {
			return <option value={movie} key={key}>{movie}</option>
		})
	}

	const movieSwitchHandler = (e) => {
		const newMoviePrice = movies.movieNames[e.target.value]
		movieData.changeState({...movies, moviePrice: newMoviePrice})
	}

	return (
		<div className="container" style={{textAlign: "center"}}>
			<select onChange={movieSwitchHandler}>
				{GenerateOptions()}
			</select>
		</div>
	)
}

export default Header

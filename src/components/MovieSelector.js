import React, { useState } from "react"
import MovieContext from "../contexts/MovieContext"

const Header = () => {
	const [movies, switchMovies] = useState({
		movieNames: {
			"Bloodshot": 10,
			"The girl on the Train": 8,
			"The invisible Man": 11,
			"Onward": 12,
			"My Spy": 12
		}
	})

	const GenerateOptions = () => {
		const moviesObject = movies.movieNames
		return Object.keys(moviesObject).map((movie, key) => {
			return <option value={movie} key={key}>{movie}</option>
		})
	}

	return (
		<div className="container" style={{textAlign: "center"}}>
			<select onChange={(e) => console.log(e.target.value)}>
				{GenerateOptions()}
			</select>
		</div>
	)
}

export default Header

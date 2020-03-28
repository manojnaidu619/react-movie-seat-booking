import React, { useState, useContext } from "react"
import MovieContext from "../contexts/MovieContext"

const Header = () => {

	const movies = useContext(MovieContext)

	const GenerateOptions = () => {
		const moviesObject = movies.movieNames
		return Object.keys(moviesObject).map((movie, key) => {
			return <option value={movie} key={key}>{movie}</option>
		})
	}

	return (
		<div className="container" style={{textAlign: "center"}}>
			<select onChange={(e) => console.log(movies.movieNames[e.target.value])}>
				{GenerateOptions()}
			</select>
		</div>
	)
}

export default Header

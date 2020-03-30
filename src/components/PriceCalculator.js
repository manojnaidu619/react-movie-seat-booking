import React, {useContext} from "react"
import MovieContext from "../contexts/MovieContext"

const PriceCalculator = () => {
	const {movies} = useContext(MovieContext)
	return (
		<div>
			<p>Selected {movies.totalSeats} seats and the total price is ${movies.totalSeats*movies.moviePrice}</p>
		</div>
	)
}

export default PriceCalculator

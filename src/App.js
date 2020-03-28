import React, {useState} from "react"
import "./App.css"

import MovieSelector from "./components/MovieSelector"
import SeatAvailability from "./components/SeatAvailability"
import SeatMatrix from "./components/SeatMatrix"
import PriceCalculator from "./components/PriceCalculator"

import MovieContext from './contexts/MovieContext'

const App = () => {

	const [movies, EditMovies] = useState({
		movieNames: {
			"Bloodshot": 10,
			"The girl on the Train": 8,
			"The invisible Man": 11,
			"Onward": 12,
			"My Spy": 12
		},
		moviePrice: 10,
		totalSeats: 0,
		seatNumbers: []
	})

	return (
		<div className="main container">
			<MovieContext.Provider value={{movies, changeState: EditMovies }}>
				<MovieSelector />
				<SeatAvailability />
				<SeatMatrix />
				<PriceCalculator />
			</MovieContext.Provider>
		</div>
	)
}

export default App

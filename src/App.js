import React from "react"
import "./App.css"

import MovieSelector from "./components/MovieSelector"
import SeatAvailability from "./components/SeatAvailability"
import SeatMatrix from "./components/SeatMatrix"
import PriceCalculator from "./components/PriceCalculator"

const App = () => {
	return (
		<div className="main container">
			<MovieSelector />
			<SeatAvailability />
			<SeatMatrix />
			<PriceCalculator />
		</div>
	)
}

export default App

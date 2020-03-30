import React from "react"
import Seat from './Seat'

const SeatAvailability = () => {
	return (
		<div className="row">
			Unoccupied : <Seat seatColor="seat-grey" />
			Occupied : <Seat seatColor="seat-black" />
		</div>
	)
}

export default SeatAvailability

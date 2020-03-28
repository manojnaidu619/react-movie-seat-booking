import React from "react"
import Seat from './Seat'
import './styles/Seat.css'

const GenerateSeats = (seatNumbers) => {
	return (
		<div className="row">
			{
				seatNumbers.map((seatNumber) => {
					return <Seat seatno={seatNumber} key={seatNumber}/>
				})
			}
		</div>
	)
}

const SeatMatrix = () => {
	return (
		<div className="row">
			<div className="movie-column-1 col-md-3">
				{GenerateSeats([1,2,3,4])}
				{GenerateSeats([5,6,7,8])}
			</div>

			<div className="movie-column-2 col-md-6">
				{GenerateSeats([13, 14, 15, 16, 17, 41])}
				{GenerateSeats([18, 19, 20, 21, 22, 42])}
				{GenerateSeats([23, 24, 25, 26, 27, 43])}
				{GenerateSeats([28, 29, 30, 31, 32, 44])}
			</div>

			<div className="movie-column-3 col-md-3">
				{GenerateSeats([33,34,35,36])}
				{GenerateSeats([37,38,39,40])}
			</div>
		</div>
	)
}

export default SeatMatrix

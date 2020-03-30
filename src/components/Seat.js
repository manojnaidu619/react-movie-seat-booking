import React, {useContext} from 'react'
import MovieContext from "../contexts/MovieContext"

import './styles/Seat.css'

const Seat = (props) => {
    const { movies } = useContext(MovieContext)
    const context = useContext(MovieContext)

    const seatNumber = props.seatno
    const seatStatus = props.seatColor ? props.seatColor : "seat-grey" 

    const seatClickHandler = (event, seatNumber) => {
        event.stopPropagation()
        const seatColor = document.querySelector(`.seat-${seatNumber}`).classList
        if (movies.seatNumbers.includes(seatNumber)) {
            const newMovieSeats = movies.seatNumbers.filter((seat) => {
                return seat !== seatNumber
            })
            seatColor.remove("seat-black")
            seatColor.add("seat-grey")
            context.changeState({...movies, seatNumbers: newMovieSeats, totalSeats: movies.totalSeats-1 })
        } else {
            seatColor.remove("seat-grey")
            seatColor.add("seat-black")
            context.changeState({...movies, seatNumbers: [...movies.seatNumbers, seatNumber], totalSeats: movies.totalSeats+1 })
        }
    }

    return (
        <div className="col-2 col-md-2">
            <div className={`seat seat-${seatNumber} ${seatStatus}`}
                onClick={(e) => seatClickHandler(e,props.seatno)} />
        </div>
    )
}

export default Seat
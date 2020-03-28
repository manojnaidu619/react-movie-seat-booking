import React from 'react'
import './styles/Seat.css'

const Seat = (props) => {
    return (
        <div className="col-md-2">
            <span onClick={() => console.log(props.seatno)}>S</span>
        </div>
    )
}

export default Seat
import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import "./eventModal.css"
import { Link } from "react-router-dom"
import axios from 'axios';

const EventModal = ({ setOpen, event, isUser }) => {

    const start = new Date(event.startDate)
    const end = new Date(event.endDate)
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5500/api/events/${event._id}`, { withCredentials: false });
            window.location.reload();
        } catch (err) {
            console.log(err)
        }
    };
    return (

        <div className="eventModal">
            <div className="mContainer">
                <CancelIcon
                    className="mClose"
                    onClick={() => setOpen(false)}
                />

                <div className="mEvents">
                    {event.poster && <div className="mLeft">
                        <img src={event.poster} alt="" />
                    </div>}
                    <div className="mRight">
                        <div className="mTitle">{event.name}</div>
                        <div className="mDesc">{event.desc}</div>
                        {start.getDate() === end.getDate() ? (<p><span>Date</span> : {start.getDate()} / {start.getMonth()} / {start.getFullYear()}</p>)
                            :
                            (<><p><span>From</span> : {start.getDate()} / {start.getMonth()} / {start.getFullYear()}</p>
                                <p><span>To</span> : {end.getDate()} / {end.getMonth()} / {end.getFullYear()}</p></>)}
                        <p><span>Time</span> : {start.getHours() >= 12 ? start.getHours() % 12 : start.getHours()} {start.getHours() >= 12 ? "PM" : "AM"} - {end.getHours() >= 12 ? end.getHours() % 12 : end.getHours} {end.getHours() >= 12 ? "PM" : "AM"}</p>
                        <p><span>Venue</span> : {event.venue}</p>

                        {event.meetLink && <button className="mButton"><a style={{ textDecoration: "none", color: "white" }} href={event.meetLink}>
                            Event Link
                        </a>
                        </button>}
                        {event.registerLink && <button className="mButton">
                            <a href={event.registerLink} style={{ textDecoration: "none", color: "white" }}>Register for Event</a>
                        </button>}
                        <p style={{ marginTop: "20px" }}><span>Organized by</span> : {event.teamName}</p>
                        <p><span>Contact Details</span> : {event.contact}</p>
                        {isUser && <div className="crudButton">
                            <Link to={`/events/${event._id}`}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={handleDelete}>Delete</button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventModal
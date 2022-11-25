import './events.scss'
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../components/navbar/Navbar";
import useFetch from '../../hooks/useFetch';
import EventModal from '../../components/eventModal/EventModal';

const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});


const Events = () => {
    const { data } = useFetch("/events")
    const [events, setEvents] = useState([]);
    const [clickedEvent, setClickedEvent] = useState({});
    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        const e = data.map((d) => {
            const startDate = new Date(d.startDate);
            const endDate = new Date(d.endDate);
            return { title: d.name, start: startDate, end: endDate };
        })
        setEvents(e);
    }, [data])

    const handleEventPopup = (e) => {
        if (e.target.className === "rbc-event-content") {
            const event = data.filter((item) => { return item["name"] === e.target.title }
            );
            console.log(event)
            setClickedEvent(event[0]);
            setOpenModal(true)
        }
    }

    return (
        <div className='events'>
            <Navbar />
            <div onClick={handleEventPopup}>
                <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
            </div>
            {openModal && <EventModal setOpen={setOpenModal} event={clickedEvent} />}
        </div>

    )
}

export default Events
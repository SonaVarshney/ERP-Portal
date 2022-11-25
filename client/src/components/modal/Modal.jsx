import React from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import useFetch from "../../hooks/useFetch"
import "./modal.css"

const Modal = ({ setOpen, id, type }) => {

    const { data } = useFetch(`/${type}/${id}`);

    return (
        <div className="modal">
            <div className="mContainer">
                <CancelIcon
                    className="mClose"
                    onClick={() => setOpen(false)}
                />
                {
                    type === "updates" &&
                    <div className="mUpdates">
                        <div className="mTitle">{data.title}</div>
                        <div className="mDesc">{data.desc}</div>
                        <button className="mButton">
                            Mark
                        </button>
                    </div>
                }
                {
                    type === "tasks" &&
                    <div className="mTasks">
                        <div className="mTitle">{data.title}</div>
                        <div className="mDesc">{data.desc}</div>
                        <p><span>Deadline</span> : {data.deadline}</p>
                        <p><span>Assigned To</span> : {data.assignedTo}</p>
                        <button className="mButton">
                            Mark
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Modal
import "./modal.css"

import CancelIcon from '@mui/icons-material/Cancel';
import useFetch from "../../hooks/useFetch"


// setOpen prop, id is the id of the data we need to display and type will tell whether it's task or update

const Modal = ({ setOpen, id, type }) => {

    // fetch the required data
    const { data } = useFetch(`/${type}/${id}`);

    return (
        <div className="modal">
            <div className="mContainer">

                {/* setOpen set to false so that pop up closes */}
                <CancelIcon
                    className="mClose"
                    onClick={() => setOpen(false)}
                />
                
                {/* if type is updates */}
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

                {/* If type is tasks */}
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
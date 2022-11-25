import './query.css'
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';
import axios from "axios"

const Query = ({ setOpen, user }) => {

    const [info, setInfo] = useState({});
    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5500/api/queries", info, {
                withCredentials: false
            })
            setOpen(false)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="modal">
            <div className="mContainer">
                <CancelIcon
                    className="mClose"
                    onClick={() => setOpen(false)}
                />

                <div className="mTitle">Send Query</div>

                <form>
                    <input
                        class="formInput"
                        type="text"
                        onChange={handleChange}
                        id="title"
                        placeholder='Enter your query title'
                    />
                    <textarea
                        name="Query"
                        id="desc"
                        cols="30"
                        rows="10"
                        onChange={handleChange}
                        placeholder='Describe your query'>
                    </textarea>
                </form>

                <button className="mButton" onClick={handleClick}>
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Query
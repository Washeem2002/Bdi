import './lawyer-com.css';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHandshake, faGavel,  faLocationDot ,faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const Lawyers = () => {
    const dispatch=useDispatch();
    const [lawyersData, setLawyersData] = useState(null);
    const [error, setError] = useState(null);
      const count=useSelector(state=>state);
    useEffect(() => {
        fetch("/get_lawyersdata")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then((data) => setLawyersData(data))
            .catch((error) => {
                console.error("Error fetching lawyer data:", error);
                setError("Failed to load lawyer data. Please try again later.");
            });
    }, []);

    return (
        <div className="docontainer">
            <div className="innercontainer">
                <div className="do1">
                    <p>Our Best Lawyers</p>
                   <p>Total Booking:{count}</p>
                </div>
                {error ? (
                    <p className="error-message">{error}</p>
                ) : lawyersData ? (
                    lawyersData.map((lawyer, index) => (
                        <div key={index} className="do2">
                            <div className="dm">
                            <img
                             src={`/image/${lawyer.image}.webp`}
 
                           />


                                <div className='name'>
                                    <p>{lawyer.name || "N/A"}</p>
                                </div>
                            </div>

                            <div className="dc">
                                <div className="dc1">
                                    <div className="dc11" id="b1">
                                        <FontAwesomeIcon icon={faGavel} className="f" />
                                        <div className='k'>
                                            <p className="h">Speciality</p>
                                            <p className="t">{lawyer.Speciality || "N/A"}</p>
                                        </div>
                                    </div>
                                    <div className="dc11" id="b2">
                                        <FontAwesomeIcon icon={faHandshake} className="f" />
                                        <div className='k'>
                                            <p className="h">Experience</p>
                                            <p className="t">
                                                {lawyer.Experience ? `${lawyer.Experience} years` : "N/A"}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="dc11" id="b3">
                                        <FontAwesomeIcon icon={faLocationDot} className="f" />
                                        <div className='k'>
                                            <p className="h">Location</p>
                                            <p className="t">{lawyer.location || "N/A"}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="dc12">
                                    <p>{lawyer.content || "No additional details available."}</p>
                                </div>
                                <div className="dc13">
                                    <Button variant="contained"  href="book_appointment" className='Button' onClick={e=> dispatch({type:'booking'})}>
                                        Book Appointment
                                    </Button>
                                    <Button variant="contained" href="appointment_history" className='Button'>
                                         Appointment History
                                    </Button>
                                   
                                    <div className="x">
                                        <p className="a"> Appointment Cost- <FontAwesomeIcon icon={faIndianRupeeSign}  />  </p>
                                        <p>{lawyer.cost}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Lawyers;

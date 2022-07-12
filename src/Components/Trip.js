import React from "react";
import gps from "../Images/gps.png"

export default function Trip(props) {
    return (
        <div>
            <div className="trip">
                <img className="loc-img" src={props.imageUrl} />
                <div className="details">
                    <div>
                        <img className="gps" src={gps} />
                        <span className="location">{props.location.toUpperCase()}</span>
                        <a className="map" href={props.googleMapsUrl}>View on Google Maps </a>
                    </div>
                    <span className="title">{props.title}</span>
                    <span className="date">{props.startDate + " - " + props.endDate}</span>
                    <p className="desc">{props.description}</p>
                </div>
            </div>
            <div className="line"></div>
        </div>
    )
}
import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <div className="imgSection">
                <img src={props.each.imageUrl} className="image"/>
            </div>
            <div className="infoSection">
                <div className="locSection">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="marker"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                    <span className="country">{props.each.location}</span>
                    <a href={props.each.googleMapsUrl}>View on Google Maps</a>
                </div>
                <span className="title">{props.each.title}</span>
                <p>{props.each.description}</p>
            </div>
        </div>
    )
}
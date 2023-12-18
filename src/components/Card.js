import React from "react";

export default function Card(props) {
    let { name, number } = props;
    return (
        <div className="card">
            <div>Card</div>
            <h1>
                name: {name}, number: {number}
            </h1>
        </div>
    );
}

import React from "react"

export default function EducationInfo() {
    return (
        <div className="info-container">
            <form action="">
                <h2>Education Info</h2>
                <input type="text" placeholder="School" />
                <input type="text" placeholder="Title of Study" />
                <label htmlFor="education-start-date">Start Date</label>
                <input type="date" id="education-start-date" />
                <label htmlFor="education-end-date">End Date</label>
                <input type="date" id="education-end-date" />
                <button>Submit Education Info</button>
            </form>
        </div>
    );
}
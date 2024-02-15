import React from "react"

export default function ExperienceInfo() {
    return (
        <div className="info-container">
            <form action="">
                <h2>Experience Info</h2>
                <input type="text" placeholder="Company Name" />
                <input type="text" placeholder="Position Title" />
                <textarea name="" id="" cols="30" rows="3" placeholder="Responsibilities"></textarea>
                <label htmlFor="experience-start-date">Start Date</label>
                <input type="date" id="experience-start-date" />
                <label htmlFor="experience-end-date">End Date</label>
                <input type="date" id="experience-end-date" />
                <button>Submit Education Info</button>
            </form>
        </div>
    );
}
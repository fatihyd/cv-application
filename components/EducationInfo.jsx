import React from "react"

export default function EducationInfo(props) {
    function handleSubmit(event) {
        event.preventDefault();

        console.log("submitted");
    }

    function handleChange(event) {
        props.setFormData(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        }));
    }

    return (
        <div className="info-container">
            <form onSubmit={handleSubmit}>
                <legend>Education Info</legend>
                <input type="text" placeholder="School" name="school" value={props.formData.school} onChange={handleChange} />
                <input type="text" placeholder="Title of Study" name="titleOfStudy" value={props.formData.titleOfStudy} onChange={handleChange} />
                <label htmlFor="education-start-date">Start Date</label>
                <input type="date" id="education-start-date" name="educationStartDate" value={props.formData.educationStartDate} onChange={handleChange} />
                <label htmlFor="education-end-date">End Date</label>
                <input type="date" id="education-end-date" name="educationEndDate" value={props.formData.educationEndDate} onChange={handleChange} />
                <button>Submit Education Info</button>
            </form>
        </div>
    );
}
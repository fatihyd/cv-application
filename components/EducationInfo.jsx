import React from "react"

export default function EducationInfo(props) {
    const [collapsed, setCollapsed] = React.useState(false);

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

    function handleClick(event) {
        setCollapsed(!collapsed);
        event.target.classList.toggle("active");
    }

    return (
        <div className="info-container">
            <button className="collapsible" onClick={handleClick}>Education Info</button>
            {!collapsed && (
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="School" name="school" value={props.formData.school} onChange={handleChange} />
                    <input type="text" placeholder="Title of Study" name="titleOfStudy" value={props.formData.titleOfStudy} onChange={handleChange} />
                    <label htmlFor="education-start-date">Start Date</label>
                    <input type="date" id="education-start-date" name="educationStartDate" value={props.formData.educationStartDate} onChange={handleChange} />
                    <label htmlFor="education-end-date">End Date</label>
                    <input type="date" id="education-end-date" name="educationEndDate" value={props.formData.educationEndDate} onChange={handleChange} />
                    <button>Submit Education Info</button>
                </form>
            )}
        </div>
    );
}
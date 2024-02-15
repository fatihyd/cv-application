import React from "react"

export default function ExperienceInfo(props) {
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
            <button className="collapsible" onClick={handleClick}>Experience Info</button>
            {!collapsed && (
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Company Name" name="companyName" value={props.formData.companyName} onChange={handleChange} />
                    <input type="text" placeholder="Position Title" name="positionTitle" value={props.formData.positionTitle} onChange={handleChange} />
                    <textarea name="responsibilities" id="" cols="30" rows="3" placeholder="Responsibilities" value={props.formData.responsibilities} onChange={handleChange}></textarea>
                    <label htmlFor="experience-start-date" >Start Date</label>
                    <input type="date" id="experience-start-date" name="experienceStartDate" value={props.formData.experienceStartDate} onChange={handleChange} />
                    <label htmlFor="experience-end-date">End Date</label>
                    <input type="date" id="experience-end-date" name="experienceEndDate" value={props.formData.experienceEndDate} onChange={handleChange} />
                    <button>Submit Education Info</button>
                </form>
            )}
        </div>
    );
}
import React from 'react'

export default function ContactInfo(props) {
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
        <div className='info-container'>
            <button className="collapsible" onClick={handleClick}>Contact Info</button>
            {!collapsed && (
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Name' name="name" value={props.formData.name} onChange={handleChange} />
                    <input type="text" placeholder='Email' name="email" value={props.formData.email} onChange={handleChange} />
                    <input type="tel" placeholder='Phone Number' name="phoneNumber" value={props.formData.phoneNumber} onChange={handleChange} />
                    <button>Submit Contact Info</button>
                </form>
            )}

        </div>
    );
}
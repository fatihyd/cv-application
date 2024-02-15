import React from 'react'

export default function ContactInfo(props) {
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
        <div className='info-container'>
            <form onSubmit={handleSubmit}>
                <legend>Contact Info</legend>
                <input type="text" placeholder='Name' name="name" value={props.formData.name} onChange={handleChange} />
                <input type="text" placeholder='Email' name="email" value={props.formData.email} onChange={handleChange} />
                <input type="tel" placeholder='Phone Number' name="phoneNumber" value={props.formData.phoneNumber} onChange={handleChange} />
                <button>Submit Contact Info</button>
            </form>
        </div>
    );
}
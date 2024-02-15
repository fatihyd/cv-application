import React from 'react'

export default function ContactInfo() {
    return (
        <div className='info-container'>
            <h2>Contact Info</h2>
            <form action="">
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email' />
                <input type="tel" placeholder='Phone Number' />
                <button>Submit Contact Info</button>
            </form>
        </div>
    );
}
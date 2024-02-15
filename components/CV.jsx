import React from "react"

export default function CV(props) {
    return (
        <>
            <div>
                <h2>Contact Information</h2>
                <p>Name: {props.name}</p>
                <p>Email: {props.email}</p>
                <p>Phone Number: {props.phoneNumber}</p>
            </div>
            <div>
                <h2>Education Information</h2>
                <p>School: {props.school}</p>
                <p>Title of Study: {props.titleOfStudy}</p>
                <p>Education Start Date: {props.educationStartDate}</p>
                <p>Education End Date: {props.educationEndDate}</p>
            </div>
            <div>
                <h2>Experience Information</h2>
                <p>Company Name: {props.companyName}</p>
                <p>Position Title: {props.positionTitle}</p>
                <p>Responsibilities: {props.responsibilities}</p>
                <p>Experience Start Date: {props.experienceStartDate}</p>
                <p>Experience End Date: {props.experienceEndDate}</p>
            </div>
        </>
    );
}
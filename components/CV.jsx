import React from "react"

export default function CV(props) {
    return (
        <>
            <h1>My CV</h1>
            <div className="cv-info">
                <h2>Contact Information</h2>
                <p><strong>Name:</strong> {props.name}</p>
                <p><strong>Email:</strong> {props.email}</p>
                <p><strong>Phone Number:</strong> {props.phoneNumber}</p>
            </div>
            <div className="cv-info">
                <h2>Education Information</h2>
                <p><strong>School:</strong> {props.school}</p>
                <p><strong>Title of Study:</strong> {props.titleOfStudy}</p>
                <p><strong>Education Start Date:</strong> {props.educationStartDate}</p>
                <p><strong>Education End Date:</strong> {props.educationEndDate}</p>
            </div>
            <div className="cv-info">
                <h2>Experience Information</h2>
                <p><strong>Company Name:</strong> {props.companyName}</p>
                <p><strong>Position Title:</strong> {props.positionTitle}</p>
                <p><strong>Responsibilities:</strong> {props.responsibilities}</p>
                <p><strong>Experience Start Date:</strong> {props.experienceStartDate}</p>
                <p><strong>Experience End Date:</strong> {props.experienceEndDate}</p>
            </div>
        </>
    );
}
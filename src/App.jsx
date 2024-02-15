import React from 'react'
import ContactInfo from '../components/ContactInfo'
import EducationInfo from '../components/EducationInfo'
import ExperienceInfo from '../components/ExperienceInfo'

function App() {

  return (
    <>
      <div id="info">
        <ContactInfo></ContactInfo>
        <EducationInfo></EducationInfo>
        <ExperienceInfo></ExperienceInfo>
      </div>
      <div id="cv">hello world</div>
    </>
  )
}

export default App

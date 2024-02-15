import React from 'react'
import ContactInfo from '../components/ContactInfo'
import EducationInfo from '../components/EducationInfo'
import ExperienceInfo from '../components/ExperienceInfo'
import CV from '../components/CV'

function App() {
  const [contactData, setContactData] = React.useState({
    name: "",
    email: "",
    phoneNumber: ""
  });

  const [educationData, setEducationData] = React.useState({
    school: "",
    titleOfStudy: "",
    educationStartDate: null,
    educationEndDate: null
  });

  const [experienceData, setExperienceData] = React.useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    experienceStartDate: null,
    experienceEndDate: null
  });


  return (
    <>
      <div id="info">
        <ContactInfo formData={contactData} setFormData={setContactData} />
        <EducationInfo formData={educationData} setFormData={setEducationData} />
        <ExperienceInfo formData={experienceData} setFormData={setExperienceData} />
      </div>
      <div id="cv">
        <CV
          name={contactData.name}
          email={contactData.email}
          phoneNumber={contactData.phoneNumber}
          school={educationData.school}
          titleOfStudy={educationData.titleOfStudy}
          educationStartDate={educationData.educationStartDate}
          educationEndDate={educationData.educationEndDate}
          companyName={experienceData.companyName}
          positionTitle={experienceData.positionTitle}
          responsibilities={experienceData.responsibilities}
          experienceStartDate={experienceData.experienceStartDate}
          experienceEndDate={experienceData.experienceEndDate}
        />
      </div>
    </>
  )
}

export default App

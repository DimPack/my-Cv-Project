import React from 'react';
import resumeData from '../data/resumeData.json';
import Contacts from '../components/Contacts/Contacts';
const Resume = () => {
    return (
        <div>
            <Contacts  personalInfo={resumeData.personalInfo}/>
        </div>
    );
}

export default Resume;

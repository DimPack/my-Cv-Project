import React from 'react';
import resumeData from '../data/resumeData.json';
import Contacts from '../components/Contacts/Contacts';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import Skills from '../components/Skills/Skills';
const Resume = () => {
    return (
        <div className="resume">
            <Contacts  personalInfo={resumeData.personalInfo}/>
            <Experience experiences={resumeData.experiences}/>
            <Education education={resumeData.education}/>
            <Skills />
        </div>
    );
}

export default Resume;

import React from 'react';
import resumeData from '../data/resumeData.json';
import Contacts from '../components/Contacts/Contacts';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import Skills from '../components/Skills/Skills';
import AboutMe from '../components/AboutMe/AboutMe';
const Resume = () => {
    return (
        <div className="resume">
            <Contacts  personalInfo={resumeData.personalInfo}/>
            <Experience experiences={resumeData.experiences}/>
            <Education education={resumeData.education}/>
            <Skills />
            <AboutMe aboutMe={resumeData.aboutMe}/>
        </div>
    );
}

export default Resume;

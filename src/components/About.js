import React from 'react'

const About = () => {
    return (
    <div className="container mt-3">
        <div className="row">
            <div className="col">
                <img src={`${process.env.PUBLIC_URL}/assets/profile.png`} alt="profile picture" className="profile-img img rounded-circle float-md-left mr-4 mt-4" />
                <h3 className="ml-4">Hi! I'm Kelli.</h3>
                <p>I'm an aspiring full stack web developer in Columbus, Ohio, currently enrolled in The Ohio State University Coding Boot Camp.</p>
                <p>I've spent the majority of my career working in IT for businesses in the Financial Services, Smart Grid Energy, 
                and Insurance sectors. I started as a software tester, but have since worked as a Business Analyst, QA/BA Manager, 
                Iteration Manager, and a Release Manager. I prefer to be a team player that does whatever needs to be done when it 
                needs to be done, regardless of my role.
                </p>
                <p>Seeking a new challenge, I enrolled in the Coding Boot Camp to update my skillset.
                It's both fun and humbling to be a beginner again.</p>   
            </div>      
        </div>
    </div>
    )
}

export default About
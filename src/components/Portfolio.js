import React from 'react'
import Project from './Project'

const projects = [
    {
        id: 1,
        name: 'LibMaker 3000',
        url: 'https://makeyourmadlib.herokuapp.com/',
        img: './assets/libmaker.png',
        repo: 'https://github.com/thorgriffs/make-your-madlibs'
    },
    {
        id: 2,
        name: 'Eat-Da-Burger',
        url: 'https://whispering-thicket-86767.herokuapp.com/',
        img: './assets/eat-da-burger.png',
        repo: 'https://github.com/thorgriffs/burger'
    },
    {
        id: 3,
        name: 'Password Generator',
        url: 'https://thorgriffs.github.io/pw-gen/',
        img: './assets/generated-password.png',
        repo: 'https://github.com/thorgriffs/pw-gen'
    },
    {
        id: 4,
        name: 'Weather Dashboard',
        url: 'https://thorgriffs.github.io/weather-dashboard/',
        img: './assets/weather-dashboard.png',
        repo: 'https://github.com/thorgriffs/weather-dashboard'
    },
    {
        id: 5,
        name: 'Work Day Scheduler',
        url: 'https://thorgriffs.github.io/work-day-scheduler/',
        img: './assets/work-day-scheduler.png',
        repo: 'https://github.com/thorgriffs/work-day-scheduler'
    },
    {
        id: 6,
        name: 'Taco Adventure',
        url: 'https://thorgriffs.github.io/taco-adventure/',
        img: './assets/taco-adventure.png',
        repo: 'https://github.com/thorgriffs/taco-adventure'
    }
]

const Portfolio = () => {
    return (
        <div className="container ml-auto mr-auto card-deck mt-3">
            {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            <div className="row mt-5">
                
        </div>
  </div>
    )
}

export default Portfolio
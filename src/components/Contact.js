import React from 'react'

const Contact = () => {
    return (
        <div className="container m-auto">
            <div className="row container-fluid text-center mt-5 ml-auto mr-auto">
                <div className="col-md-2 ml-2 mt-5">          
                    <a href="https://github.com/thorgriffs" target="_blank" className="m-auto">
                        <i className="contact fa fa-github fa-3x" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="col-md-2 ml-2 mt-5">          
                    <a href="https://www.linkedin.com/in/kelli-king-4344254/" target="_blank" className="m-auto">
                        <i className="contact fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
                    </a>
                </div>        
                <div className="col-md-2 ml-2 mt-5">          
                    <a href="mailto:22.kelliking@gmail.com" className="m-auto">
                        <i className="contact fa fa-envelope fa-3x" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="col-md-2 ml-2 mt-5">          
                    <a href="./assets/kelli-king-resume.pdf" className="m-auto" download>
                        <i className="contact fa fa-file-text fa-3x" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="col-md-2 ml-2 mt-5">
                    <a href="tel: 614.352.8950" className="m-auto">
                        <i className="contact fa fa-mobile fa-3x" aria-hidden="true"></i>
                    </a>
                </div>
            </div> 
        </div>
    )
}

export default Contact
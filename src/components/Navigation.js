import React from 'react'
import {NavLink} from 'react-router-dom'

const Navigation=() =>{
    return (
        <div className="sidebar">
            {/* <h1>hello from navigation component</h1> */}
            <div className="id">
                <div className="idContent">
                    <img src="./marwachannoufi-photo.jpg" alt="" width="150px" height="200px"></img>
                    <h3>Marwa Channoufi</h3> 
                </div>
            </div>
            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="navActive">
                            <i className="fas fa-home"></i>
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/competences" activeClassName="navActive">
                            <i className="fas fa-mountain"></i>
                            <span>Competences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/projects" activeClassName="navActive">
                            <i className="fas fa-project-diagram"></i>
                            <span>projects</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/certifications" activeClassName="navActive">
                            <i className="fas fa-image"></i>
                            <span>certifications</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/contact" activeClassName="navActive">
                            <i class="fas fa-address-book"></i>
                            <span>contact</span>
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
            <div className="socialNetwork">
                <ul>
                    <li>
                        <a href=" https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a href=" https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href=" https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href=" https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-codepen"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navigation
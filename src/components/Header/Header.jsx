import React, { Component } from "react"
import { useState } from "react"
import './Header.css'


class  Header extends Component {
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked:!this.state.clicked})
    }
    render() {
        return (

            <header className="header">
    
                <nav className="navBar container">
    
                    <a href="#" className="logo"><i className="ri-copper-coin-line"></i></a>
    
                    <div className="menu" id="menu">
    
                        <ul id="list" className={this.state.clicked ? "#list active" : "#list"}>
    
                            <li className="list-item">
                                <a className="active" href="#about">
                                    What we do
                                </a>
                            </li>
    
                            <li className="list-item">
                                <a href="#Projects">
                                    Projects
                                </a>
                            </li>
    
                            <li className="list-item">
                                <a href="">
                                    Team
                                </a>
                            </li>
    
                            <li className="list-item">
                                <a href="">
                                    Blog
                                </a>
                            </li>
    
                            <li className="list-item">
                                <a href="">
                                    Talk to us
                                </a>
                            </li>
                        </ul>
    
                    </div>
    
                    <div className=" list-right">
                        <a href="" ><i className="ri-twitter-line"></i></a>
                        <a href="" ><i className="ri-instagram-line"></i></a>
    
                        <div className="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? "ri-close-line close-menu-icon" : "ri-menu-3-line open-menu-icon"  }></i>
                        </div>
                    </div>
    
                </nav>
    
            </header>
    
        )
    }
    
    }
export default Header
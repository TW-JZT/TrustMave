import React from "react";
import Header from "../components/Header.js"
import NavbarUnauthenticated from "../components/NavbarUnauthenticated.js";
import teamwork from "../StyleSheets/teamwork.jpg"


export const HomePage = props => {
    return (
        <div>
            <Header />
            <div>
                <NavbarUnauthenticated/>
                < div className="homeContainer" > 
                    <div> 
                        <h1 className="textLARG"> TrustMave </h1>
                        <div className="textSMOL">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            In in pharetra purus. 
                            Nunc lobortis quam aliquam interdum bibendum. 
                            Sed quis elit vel purus sagittis viverra. 
                            Aliquam ornare diam lacus. 
                            Nam sed enim a neque dignissim vestibulum. 
                            Integer sem diam, dictum non quam sit amet, volutpat scelerisque nulla. 
                            Nulla ex arcu, sodales vitae ante in, rutrum ultricies arcu. 
                            Morbi interdum eros nisl, a tempus velit auctor quis. 
                            Maecenas finibus dapibus pulvinar. 
                            Mauris ut arcu sed eros eleifend cursus.</div>
                    </div>
                    <img className= "pic" src={teamwork} style={{"align-self":"center"}}/> 
                </div>
            </div>
        </div>
    )
}
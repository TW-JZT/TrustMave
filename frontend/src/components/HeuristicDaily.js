import React, { useState, Component, setState } from "react";
import "../StyleSheets/ProfilePage.css"
import { MDBContainer } from "mdbreact";
import { Pie } from "react-chartjs-2";
import "../StyleSheets/Dashboard.css"
// requires 'heuristicDate' to be passed in as a prop

class HeuristicDaily extends React.Component {

    state = {
        totalHours: 4,
        overloaded: false,
        loadPercentage: 50,
        pieChartData: {
            labels: ["Placeholder","Placeholder","Placeholder","Placeholder"],
            datasets: [
                {
                    label: "Placeholder",
                    data: [2,1,3,1],
                }
            ]
        }
    }

    render() {

        const size = {
            height: "300px",
            width: "300px"
        }
        const div_centre = {
            "justify-content": "center"
        }
        const text_centre = {
            "text-align": "center",
        }

        return (
            <div style={size}>
                <MDBContainer>
                    <div>
                        <Pie className="pie" data={this.state.pieChartData} />
                        <div style={div_centre}>
                            <p style={text_centre}>
                                <br />
                                Total Hours: {this.state.totalHours}hrs
                                <br />
                                Load Percentage: {this.state.loadPercentage}%
                            </p>
                        </div>
                    </div>
                </MDBContainer>
            </div>
        );
    }
}

export default HeuristicDaily;
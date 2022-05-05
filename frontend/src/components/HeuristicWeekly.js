import React, { useState, Component, setState } from "react";
import "../StyleSheets/ProfilePage.css"
import { MDBContainer } from "mdbreact";
import {Line} from "react-chartjs-2";


class HeuristicWeekly extends React.Component {
    state = {
        lineChartData : {
            labels: ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"],
            datasets : [
                {data:[5,3,4,8,4,1,5]},
                {data:[5,4,7,1,2,4,1]}
            ]
        }
    }

    render(){

        return (
                <MDBContainer>
                    <Line data={this.state.lineChartData}/>
                </MDBContainer>
        )
    }
}

export default HeuristicWeekly;
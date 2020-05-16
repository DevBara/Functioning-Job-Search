import React, { Component } from 'react'

export default class EmploymentCards extends Component {
    render() {
        constructor(props){
            super(props);

            this.state({
                buttonDisplay: 'none'
            });
        }
        return (
            <div className="employment-card-wrap">
                <div className="title-wrap">{this.props.title}</div>
                <div className="company-dates-wrap">
                    <div className="company">{this.props.company}</div>
                    <div className="dates">{this.property.dates}</div>
                </div>
                <div className="duties-wrap">
                    <div className="duties">{this.props.duties}</div>
                </div>
                {/* <button className="delete-button" onHover={this.handleHover} style={{display:this.state.buttonDisplay}}>x</button> */}
            </div>
        )
    }
}

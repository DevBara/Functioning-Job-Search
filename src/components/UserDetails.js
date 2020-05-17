import React, { Component } from 'react'

export default class UserDetails extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            name:'First and Last Name',
            location:'City, State',
            emailOrURL:'www.example.com',
            highlights:'Brag a little; You\'ve earned it',
            editing: false,
            inputDisplay: 'none',
            detailsDisplay: 'block'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    
    handleEdit(e){
        this.setState({
            editing: true,
            inputDisplay: 'block',
            detailsDisplay: 'none'
        })
    }
    
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSave(e) {
        this.setState({
            editing: false,
            inputDisplay: 'none',
            detailsDisplay: 'block'
        });

    }


    render() {
        return (
            <div id="details-wrapper" style={{display:'flex', width:'60%', flexDirection:'column', alignItems:'center'}}>
                <div id="name-wrap">
                
                    <div className="details-display" id="name-display" style={{display:this.state.detailsDisplay}}>
                        {this.state.name}
                    </div>
                    
                    <input type="text" placeholder="Name" name="name" className="details-input" 
                    id="name-input" onChange={this.handleChange} style={{display:this.state.inputDisplay}}></input>
                
                </div>

                <div id="location-and-email-wrap">
                    
                    <div className="details-display" id="location-display" style={{display:this.state.detailsDisplay}}>
                        {this.state.location}
                    </div>

                    <input type="text" className="details-input" placeholder="City, State" name="location" 
                    id="location-input" onChange={this.handleChange} style={{display:this.state.inputDisplay}}></input>

                    <div className="details-display" id="email-url-display" style={{display:this.state.detailsDisplay}}> 
                        {this.state.emailOrURL}
                    </div>

                    <input type="text" className="details-input" placeholder="Email or Website" name="emailOrURL" 
                    id="email-input" onChange={this.handleChange} style={{display:this.state.inputDisplay}}></input>

                </div>

                <div id="highlights-wrap">
                    <div className="details-display" id="highlights-display" style={{display:this.state.detailsDisplay}}>
                        {this.state.highlights}
                    </div>
                    <textarea className="details-input" name="highlights" id="highlights-textarea" placeholder="Brag a little!"
                    onChange={this.handleChange} style={{display:this.state.inputDisplay}}></textarea>

                </div>

                <button id="save-button" onClick={this.handleSave} style={{display:this.state.inputDisplay}}>Save</button> 
                <button id="edit-button" onClick={this.handleEdit} style={{display:this.state.detailsDisplay}}>Edit</button> 

            </div>
        )
    }
}


import React, { Component } from 'react'
import EmploymentCards from './EmploymentCards'

export default class EmploymentHistory extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            title:'',
            company:'',
            dates:'',
            duties:'',
            addButton: 'block',
            saveButton: 'none',
            cardsAdded: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleAdd(e) {
        this.setState({
            addButton: 'none',
            saveButton: 'block'
        });
    }
    handleSave(e) {

        let newCard= <EmploymentCards title={this.state.title} company={this.state.company} 
                        dates={this.state.dates} duties={this.state.duties}/>

        this.setState({
            addButton: 'block',
            saveButton: 'none',
            cardsAdded: [newCard, ...this.state.cardsAdded]
        });
    }
    
    render() {
        return (
            <div id="employment-section-wrap">
                <button id="add-button" style={{display:this.state.addButton}} onClick={this.handleAdd}>Add</button>
                <div className="add-employment-wrap" style={{display:this.state.saveButton}}>
                    <div className="title-input-wrap">
                        <input type="text" placeholder="Title" name="title" className="employment-input" 
                        id="title-input" onChange={this.handleChange} style={{display:this.state.saveButton}}></input>
                    </div>
                    <div className="company-dates-input-wrap">
                        <div className="company-input">
                            <input type="text" placeholder="Company" name="company" className="employment-input" 
                            id="company-input" onChange={this.handleChange} style={{display:this.state.saveButton}}></input>
                        </div>
                        <div className="dates-input">
                            <input type="text" placeholder="Dates Worker" name="dates" className="employment-input" 
                            id="dates-input" onChange={this.handleChange} style={{display:this.state.saveButton}}></input>
                        </div>
                    </div>
                    <div className="duties-input-wrap">
                        <div className="duties">
                            <textarea placeholder="Duties" name="duties" className="employment-input" 
                            id="duties-input" onChange={this.handleChange} style={{display:this.state.saveButton}}></textarea>
                        </div>
                    </div> 
                    <button id="save-button" style={{display:this.state.saveButton}} onClick={this.handleSave}>Save</button> 
                </div>
                <div className="displayed-employment-wrap">
                    {this.state.cardsAdded}
                </div>
            </div>
        )
    }
}
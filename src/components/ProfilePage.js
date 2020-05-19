import React, { Component } from 'react'
import EmploymentHistory from './EmploymentHistory'
import UserDetails from './UserDetails'
import UserPhoto from './UserPhoto'

export default class ProfilePage extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            createButton: 'block',
            deleteButton: 'none',
            profileDisplay: 'none'
        }

        this.handleCreate = this.handleCreate.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

   
    handleDelete(e) {
        this.setState({
            deleteButton: 'none',
            createButton: 'block',
            profileDisplay: 'none'
        });
    }
    handleCreate(e) {

        this.setState({
            deleteButton: 'block',
            createButton: 'none',
            profileDisplay: 'flex'
        });
    }

    render() {
        return (
            <div id="profile-wrap">
                <button className="profile-buttons" id="delete-button" style={{display:this.state.deleteButton}} onClick={this.handleDelete}>Delete Profile</button>
                <button className="profile-buttons" id="create-button" style={{display:this.state.createButton}} onClick={this.handleCreate}>Create Profile</button> 
                <div id="upper-profile-section" style={{display:this.state.profileDisplay}}>
                    <UserPhoto />
                    <UserDetails />
                </div>
                <div id="lower-profile-section" style={{display:this.state.profileDisplay}}>
                    <EmploymentHistory />
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import EmploymentHistory from './EmploymentHistory'
import UserDetails from './UserDetails'
import UserPhoto from './UserPhoto'

export default class ProfilePage extends Component {
    render() {
        return (
            <div id="profile-wrap">
                <div id="upper-profile-section">
                    <UserPhoto />
                    <UserDetails />
                </div>
                <div id="lower-profile-section">
                    <EmploymentHistory />
                </div>
            </div>
        )
    }
}

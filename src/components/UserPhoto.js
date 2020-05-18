import React, { Component } from 'react'

export default class UserPhoto extends Component {
    constructor(props){
        super(props);

        this.state =({
            url:'https://i.pinimg.com/736x/7f/9d/b4/7f9db4567edd11014a04c829ecee4ecf.jpg',
            photo: "url('https://i.pinimg.com/736x/7f/9d/b4/7f9db4567edd11014a04c829ecee4ecf.jpg')",
            editing: false,
            inputDisplay: 'none'
        })


        this.handleChange = this.handleChange.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
    }

    handleChange(e){
        this.setState({
            url: e.target.value,
        })
    }

    handleUpload(e){

        this.setState({ 
           inputDisplay: this.state.inputDisplay === 'block' ? 'none' : 'block',
           photo: "url(" + this.state.url + ")"
        })
    }
    
    render() {
        return (
            <div id="photo-square-wrap">
                <div id="upload-overlay-wrap">
                    <input type="text" id="photo-input" placeholder="Enter Photo URL" onChange={this.handleChange} style={{display:this.state.inputDisplay}}></input>
                    <button id="upload-button" onClick={this.handleUpload}>Upload</button>
                </div>
                <div id="photo-square" style={{backgroundImage: this.state.photo}}>
                </div> 
            </div>
        )
    }
}

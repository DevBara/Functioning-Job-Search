import React from "react";
import SearchJobs from "./SearchJobs";
import "../Styles/SearchPage.sass"

class SearchPage extends React.Component{
constructor(props){
    super(props);
    this.state={
        searchTitle: "",
        searchLocation: "",
        searchDistanceMl: "",
        numberToDisplay:"",
        search: false
    }
    this.getSearchTitle=this.getSearchTitle.bind(this);
    this.getSearchLocation=this.getSearchLocation.bind(this);
    this.getNumberToDisplay=this.getNumberToDisplay.bind(this);
    this.getSearchDistanceKm=this.getSearchDistanceKm.bind(this);
    this.submitButtonHandler=this.submitButtonHandler.bind(this);
}

getSearchTitle(event){
    event.preventDefault();
    this.setState({searchTitle: event.target.value});
}
getNumberToDisplay(event){
    event.preventDefault();
    this.setState({numberToDisplay: event.target.value});
}

getSearchLocation(event){
    event.preventDefault();
    this.setState({searchLocation:event.target.value});
}
getSearchDistanceKm(event){
    event.preventDefault();
    this.setState({searchDistanceMl: event.target.value});
}

submitButtonHandler(event){
    event.preventDefault();
    this.setState({search: true});
}

render(){
    return(
            <div id="main-div-search-page">
                <div id="search-page-form-div">
                    <form id="search-form" onSubmit={this.submitButtonHandler}>
                        <p id="job-title-p">Title:</p>
                        <input id="job-title-input"  type="text" value={this.state.searchTitle} onChange={this.getSearchTitle} placeholder="Enter title"/>
                        <p id="job-location-p">Location:</p>
                        <input id="job-location-input"  type="text" value={this.state.searchLocation} onChange={this.getSearchLocation} placeholder="Enter location"/>
                        <p id="job-distance-p">Search distance:</p>
                        <input id="job-distance-input"  type="text" value={this.state.searchDistanceMl} onChange={this.getSearchDistanceKm} placeholder="Enter searching distance in miles"/>
                        <p id="job-display-p">Number of results to display:</p>
                        <input id="job-display-input"  type="text" value={this.state.numberToDisplay} onChange={this.getNumberToDisplay} placeholder="Enter number of results to display"/>
                        <input className="submit-button-dictionaries" type="submit" />
                        {/* clear button will clear the state, put values to initial state in order to do a new search */}
                        <button className="clear-button-search-page" type="button" onClick={()=>{this.setState({searchTitle: "", searchLocation: "", searchDistanceMl: "", numberToDisplay:"", search: false})}}>Clear</button>
                        <p className="clear-text">If you want to start a new search please press clear</p>
                    </form>
                </div>  
                <div id="job-results-div-search-page">
                {this.state.search ? (<SearchJobs results_per_page={this.state.numberToDisplay} what={this.state.searchTitle} where={this.state.searchLocation} distance={Math.round(this.state.searchDistanceMl/0.62137)}/>) : ""}
                </div>            
            </div>
    )
}

}

export default SearchPage;
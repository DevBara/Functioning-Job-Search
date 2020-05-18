import React from "react";
import SearchJobs from "./SearchJobs";
import "../styles/SearchPage.scss"

class SearchPage extends React.Component{
constructor(props){
    super(props);
    this.state={
        searchTitle: "",
        searchLocation: "",
        searchDistanceMl: "",
        numberToDisplay:1,
        page:1,
        search: false
    }
    this.getSearchTitle=this.getSearchTitle.bind(this);
    this.getSearchLocation=this.getSearchLocation.bind(this);
    this.getNumberToDisplay=this.getNumberToDisplay.bind(this);
    this.getNumberPage=this.getNumberPage.bind(this);
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
getNumberPage(event){
    event.preventDefault();
    this.setState({page: event.target.value});
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
                        <div id="form-inputs-div">
                        <div className="form-mini-divs">
                        <p id="job-title-p">Title:</p>
                        <input className="input-class" id="job-title-input"  type="text" value={this.state.searchTitle} onChange={this.getSearchTitle} placeholder="Enter title"/>
                        </div>
                        <div className="form-mini-divs">
                        <p id="job-location-p">Location:</p>
                        <input className="input-class" id="job-location-input"  type="text" value={this.state.searchLocation} onChange={this.getSearchLocation} placeholder="Enter location"/>
                       </div>
                        <div className="form-mini-divs">
                        <p id="job-distance-p">Search distance:</p>
                        <input className="input-class" id="job-distance-input"  type="text" value={this.state.searchDistanceMl} onChange={this.getSearchDistanceKm} placeholder="Enter searching distance in miles"/>
                       </div>
                        <div className="form-mini-divs">
                        <p id="job-display-p">Number of results to display:</p>
                        <select id="select-to-display" value={this.state.value} onChange={this.getNumberToDisplay}>
                          <option className="options-to-display-class" value="5">5</option>
                          <option className="options-to-display-class" value="10">10</option>
                          <option className="options-to-display-class" value="15">15</option>
                          <option className="options-to-display-class" value="20">20</option>
                          <option className="options-to-display-class" value="25">25</option> 
                          <option className="options-to-display-class" value="30">30</option>
                          <option className="options-to-display-class" value="35">35</option>
                          <option className="options-to-display-class" value="40">40</option>
                          <option className="options-to-display-class" value="45">45</option>
                          <option className="options-to-display-class" value="50">50</option>
                          <option className="options-to-display-class" value="55">55</option>
                          <option className="options-to-display-class" value="60">60</option> 
                          <option className="options-to-display-class" value="65">65</option> 
                          <option className="options-to-display-class" value="70">70</option>
                          <option className="options-to-display-class" value="75">75</option>
                          <option className="options-to-display-class" value="80">80</option>
                          <option className="options-to-display-class" value="85">85</option>  
                          <option className="options-to-display-class" value="90">90</option> 
                          <option className="options-to-display-class" value="95">95</option>
                          <option className="options-to-display-class" value="100">100</option>
                         </select>
                        </div>
                        <div className="form-mini-divs">
                        <p id="job-display-p">Number of results to display:</p>
                        <select id="select-to-display" value={this.state.value} onChange={this.getNumberPage}>
                          <option className="options-to-display-class" value="5">5</option>
                          <option className="options-to-display-class" value="10">10</option>
                          <option className="options-to-display-class" value="15">15</option>
                          <option className="options-to-display-class" value="20">20</option>
                          <option className="options-to-display-class" value="25">25</option> 
                          <option className="options-to-display-class" value="30">30</option>
                          <option className="options-to-display-class" value="35">35</option>
                          <option className="options-to-display-class" value="40">40</option>
                          <option className="options-to-display-class" value="45">45</option>
                          <option className="options-to-display-class" value="50">50</option>
                          <option className="options-to-display-class" value="55">55</option>
                          <option className="options-to-display-class" value="60">60</option> 
                          <option className="options-to-display-class" value="65">65</option> 
                          <option className="options-to-display-class" value="70">70</option>
                          <option className="options-to-display-class" value="75">75</option>
                          <option className="options-to-display-class" value="80">80</option>
                          <option className="options-to-display-class" value="85">85</option>  
                          <option className="options-to-display-class" value="90">90</option> 
                          <option className="options-to-display-class" value="95">95</option>
                          <option className="options-to-display-class" value="100">100</option>
                         </select>
                        </div>
                        </div>
                        <div id="form-buttons-divs">
                        <input className="submit-button-form" type="submit" />
                        {/* clear button will clear the state, put values to initial state in order to do a new search */}
                        <button className="clear-button-search-page" type="button" onClick={()=>{this.setState({searchTitle: "", searchLocation: "", searchDistanceMl: "", search: false})}}>Clear</button>
                        </div>
                        <p id="clear-text">If you want to start a new search please press clear</p>
                    </form>
                </div>  
                <div id="job-results-div-search-page">
                {this.state.search ? (<SearchJobs results_per_page={this.state.numberToDisplay} page={this.state.page} what={this.state.searchTitle} where={this.state.searchLocation} distance={Math.round(this.state.searchDistanceMl/0.62137)}/>) : ""}
                </div>            
            </div>
    )
}

}

export default SearchPage;
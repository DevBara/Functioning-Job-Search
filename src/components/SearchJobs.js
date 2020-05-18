import React from "react";
import axios from "axios";
import removemd from "remove-markdown";
import MapSearch from "./MapSearch"


class SearchJobs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            jobsList:[]
        }
    }
    async getJobs(){
        const key=process.env.REACT_APP_API_KEY_JOB;
        const appId=process.env.REACT_APP_APP_ID_ID;
        try{
           let jobsInfo=await axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appId}&app_key=${key}&results_per_page=${this.props.results_per_page}&what=${this.props.what}&title_only=${this.props.what}&where=${this.props.where}&distance=${this.props.distance}&content-type=application/json`)
           this.setState({jobsList: jobsInfo.data.results});
        }
        catch(error){
           console.log(error);
        }
    }

    componentDidMount(){
        this.getJobs();

    }           


    checkIfExist(){
            if(this.state.jobsList===undefined){
            }
            else{
            let jobs=this.state.jobsList.map((res,index)=> {
                let create=new Date(res.created)
                let dateCreated=create.getUTCMonth() + "/" +create.getUTCDay() + "/" +create.getUTCFullYear() + "at" + create.getUTCHours() + ":" + create.getUTCMinutes();
                return <div className="job-search-output-div-class">
                    <p className="job-search-output-class-p">Title: {removemd(res.title)}</p> 
                    <p className="job-search-output-class-p">Category: {res.category.label}</p>
                    <p className="job-search-output-class-p">Company Name: {res.company.display_name}</p>
                    <p className="job-search-output-class-p">Contract time: {res.contract_time}</p>
                    <p className="job-search-output-class-p">Description: {removemd(res.description)}</p>
                    <a className="job-search-output-class-a" href={res.redirect_url}>Aditional information </a>
                    <p className="job-search-output-class-p">Created on: {dateCreated}</p>
                    <div className="map-info-div"> <MapSearch lat={res.latitude} lng={res.longitude}/></div>
                </div> 
            })
            return jobs;
            }
        }
        

    render(){
           
        return(
            <div id="main-div-job-search-results">
             { this.checkIfExist()}
            </div>
        )
    }
}
export default SearchJobs;
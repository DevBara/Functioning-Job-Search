import React from "react";
import axios from "axios";
import removemd from "remove-markdown";
<<<<<<< HEAD

import MapSearch from "./MapSearch"

import MapSearch from "./MapSearch"

=======
import MapSearch from "./MapSearch"

>>>>>>> 55214e4125ec01e8d8311cba5cd6fca692157fbe


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
<<<<<<< HEAD
       try{

           console.log(this.props.what)
           let jobsInfo=await axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appId}&app_key=${key}&results_per_page=${this.props.results_per_page}&what=${this.props.what}&title_only=${this.props.what}&where=${this.props.where}&distance=${this.props.distance}`)
           this.setState({jobsList: jobsInfo.data.results});

           let jobsInfo=await axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appId}&app_key=${key}&results_per_page=${this.props.results_per_page}&what=${this.props.what}&title_only=${this.props.what}&where=${this.props.where}&distance=${this.props.distance}&content-type=application/json`)
           this.setState({jobsList: jobsInfo.data.results});
           console.log(this.state.jobsList)


       }
       catch(error){
=======
>>>>>>> 55214e4125ec01e8d8311cba5cd6fca692157fbe
        try{
           let jobsInfo=await axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/${this.props.page}?app_id=${appId}&app_key=${key}&results_per_page=${this.props.results_per_page}&what=${this.props.what}&title_only=${this.props.what}&where=${this.props.where}&distance=${this.props.distance}&content-type=application/json`)
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


<<<<<<< HEAD
        const disallowed=['Paragraph'];
            if(this.state.jobsList===undefined){
            }
            else{

            let jobs=this.state.jobsList.map((res)=> {

                let text=res.title;
                return <div>
                    {removemd(text)}
                    {/* <p>{res.title}</p>
                    <p>{res.type}</p>
                    <p>{res.description}</p>
                    <p>{res.chow_to_apply}</p> */}

                let create=new Date(res.created)
                let dateCreated=create.getUTCMonth() + "/" +create.getUTCDay() + "/" +create.getUTCFullYear() + "at" + create.getUTCHours() + ":" + create.getUTCMinutes();
                return <div>
                   <p>Title: {removemd(res.title)}</p> {removemd(res.title)}
                    <p>Category: {res.category.label}</p>
                    <p>Company Name: {res.company.display_name}</p>
                    <p>Contract time: {res.contract_time}</p>
                    <p>Description: {removemd(res.description)}</p>
                    <a href={res.redirect_url}>Aditional information </a>
                    <p>Created on: {dateCreated}</p>
                    <div> <MapSearch lat={res.latitude} lng={res.longitude}/></div>
                    <div>**********************</div>


=======
            if(this.state.jobsList===undefined){
            }
            else{
>>>>>>> 55214e4125ec01e8d8311cba5cd6fca692157fbe
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
<<<<<<< HEAD

=======
>>>>>>> 55214e4125ec01e8d8311cba5cd6fca692157fbe
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
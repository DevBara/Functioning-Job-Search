import React from "react";
import axios from "axios";

class SearchJobs extends React.Component{
    constructor(props){
        super(props);
        this.state={
            searchMap:false,
            jobsList:""
        }
    }
    async getJobs(){
        const key=process.env.REACT_APP_API_KEY_JOB;
        const appId=process.env.REACT_APP_APP_ID_ID;
       try{
           console.log(this.props.what)
           let jobsInfo=await axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appId}&app_key=${key}&results_per_page=${this.props.results_per_page}&what=${this.props.what}&title_only=${this.props.what}&where=${this.props.where}&distance=${this.props.distance}`)
           this.setState({jobsList: jobsInfo.data});
            console.log(jobsInfo.data);
            console.log(this.state.jobsList.results)
       }
       catch(error){
           console.log(error);
       }
    }
    componentDidMount(){
        this.getJobs();
    }
    checkIfExist(){
        //check if wordInfo state empty, or it does not much user search, or it undefined or it is not a string
        //if so it would return the <p> with specific text
        if ( this.state.jobsInfo==undefined ){
            return <p className="p-jobs-not-found">There are currently no jobs matching your search criteria</p>
        }
   
        else{
            
            let jobs=this.state.jobsInfo.map((res,index)=> {

                return <p className="class-definitions-med" id={"difitition-medical-id-"+index}>{index+1}. {res}</p> //return separate <p> for each definition
            })
            return jobs;
            }
            
        }
    render(){
        return(
            <div>
    {/* <MapSearch lat={this.state.jobsList.results[1].latitude} long={this.state.jobsList.results[1].longitude} /> */}
            </div>
        )
    }
}
export default SearchJobs;
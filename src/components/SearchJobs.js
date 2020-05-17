import React from "react";
import axios from "axios";
import removemd from "remove-markdown";


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
           console.log(this.props.what)
           let jobsInfo=await axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appId}&app_key=${key}&results_per_page=${this.props.results_per_page}&what=${this.props.what}&title_only=${this.props.what}&where=${this.props.where}&distance=${this.props.distance}`)
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
                </div> 
            })
            return <div>{jobs}</div>
            }
        }
        

    render(){
           
        return(

            <div>
            { this.checkIfExist()}
               <div>
               
               </div>
         </div>
        )
    }
}
export default SearchJobs;
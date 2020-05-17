// import React from "react";
// import axios from "axios";

// class SearchJobs extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             readMore:"",
//             jobsList:[]
//         }
//     }

// //     availaiable(){
// //         this.setState({availaiable: true});
// //            console.log(this.state.availaiable);
// //     }

//    async getJobs(){
//         const key=process.env.REACT_APP_API_KEY_JOB;
//         const appId=process.env.REACT_APP_APP_ID_ID;
//        try{
//            let jobsInfo=await axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appId}&app_key=${key}&results_per_page=${this.props.results_per_page}&what=${this.props.what}&title_only=${this.props.what}&where=${this.props.where}&distance=${this.props.distance}`)
//            this.setState({jobsList: jobsInfo.data.results});
//             console.log(this.state.jobsList);
//             if(this.state.jobsList!=undefined){
//                 this.availaiable();}
            
//        }
//        catch(error){
//            console.log(error);
//        }
//     }
//     componentDidMount(){
//         // const key=process.env.REACT_APP_API_KEY_JOB;
//         // const appId=process.env.REACT_APP_APP_ID_ID;
// this.getJobs();
// // axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appId}&app_key=${key}&results_per_page=${this.props.results_per_page}&what=${this.props.what}&title_only=${this.props.what}&where=${this.props.where}&distance=${this.props.distance}`)
// // .then(res=>{this.setState({jobsList: res.data.results})},(error) => {
// //     console.log(error)})

// }           
    

//     getDescription(id){
//           // const key=process.env.REACT_APP_API_KEY_JOB;
//         // const appId=process.env.REACT_APP_APP_ID_ID;
//         // axios.get(`https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appId}&app_key=${key}&results_per_page=${this.props.results_per_page}&what=${this.props.what}&title_only=${this.props.what}&where=${this.props.where}&distance=${this.props.distance}`)
//         // .then(res=>{this.setState({jobsList: res.data.results})},(error) => {
//         //     console.log(error)})
//     }

//     checkIfExist(){
//             if(this.state.jobsList===undefined){

//             }
//             else{
//             let jobs=this.state.jobsList.map((res)=> {
//                 return <div>
//                     <p>{res.title}</p>
//                     <button type="button" onClick={this.getDescription(res.id)}>Read Description</button>
//                 </div> 
//             })
//             return <div>{jobs}</div>
//             }
//         }
        

//     render(){
           
//         return(
//             // <ul>
//             //     {this.state.jobsList.map(id=><li>{id.id}</li>)}
//             // </ul>


//             <div>
//             { this.checkIfExist()}
               
            
//  {/* <MapSearch lat={this.state.jobsList.results[1].latitude} long={this.state.jobsList.results[1].longitude} /> */}
//             </div>
//         )
//     }
// }
// export default SearchJobs;
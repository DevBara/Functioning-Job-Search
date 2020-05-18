import React from "react";
import axios from "axios";

class MapSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mapInfo:[]
        }
    }
    async getMap(){
        const keyMap=process.env.REACT_APP_API_KEY_MAP;
       try{
           let mapData=await axios.get(`http://open.mapquestapi.com/geocoding/v1/reverse?key=${keyMap}&location=${this.props.lat},${this.props.lng}&includeRoadMetadata=true&includeNearestIntersection=true`)
            this.setState({mapInfo:mapData.data.results[0].locations[0]})
       }
       catch(error){
           console.log(error);
       }
    }
    componentDidMount(){
        this.getMap();
    }

    checkIfExist(){
        if(this.state.mapInfo===undefined){

        }
        else{
              return <div> 
              <img src={this.state.mapInfo.mapUrl} />
            <ul>Address: 
            <li>Street: {this.state.mapInfo.street} </li> 
             <li>{this.state.mapInfo.adminArea5Type}: {this.state.mapInfo.adminArea5}</li>
             <li>{this.state.mapInfo.adminArea3Type}: {this.state.mapInfo.adminArea3}</li>
             <li>Postal code: {this.state.mapInfo.postalCode}</li>
             <li>{this.state.mapInfo.adminArea1Type}: {this.state.mapInfo.adminArea1}</li>
              </ul>
               </div>
 
        }
    }
    render(){
        return(
            <div>
            {this.checkIfExist()}
            </div>
        )
    }
}
export default MapSearch;
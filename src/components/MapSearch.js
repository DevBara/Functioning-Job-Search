import React from "react";
import axios from "axios";

class MapSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mapInfo:[],
            clear:false
        }
    }

    async getMap(){
        const keyMap=process.env.REACT_APP_API_KEY_MAP;
        try{
            let mapData=await axios.get(`http://open.mapquestapi.com/geocoding/v1/reverse?key=${keyMap}&location=${this.props.lat},${this.props.lng}&includeRoadMetadata=true&includeNearestIntersection=true`)
            this.setState({mapInfo:mapData.data.results[0].locations[0]})
            console.log(this.state.mapInfo)
       }
       catch(error){
           console.log(error);
       }
    }

    componentDidMount(){
        this.getMap();
    }
    
//the following function will check if this.state.mapInfo is not undefined it will return information of location
    checkIfExist(){
        if(this.state.mapInfo===undefined){

        }
        else{
            return (
                    <div> 
                        <img className="map-image" src={this.state.mapInfo.mapUrl} />
                        <ul className="map-info-ul">Address: 
                            <li><span class="span-job-map">Street: </span>{this.state.mapInfo.street} </li> 
                            <li><span class="span-job-map">{this.state.mapInfo.adminArea5Type}: </span>{this.state.mapInfo.adminArea5}</li>
                            <li><span class="span-job-map">{this.state.mapInfo.adminArea3Type}: </span>{this.state.mapInfo.adminArea3}</li>
                            <li><span class="span-job-map">Postal code: </span>{this.state.mapInfo.postalCode}</li>
                            <li><span class="span-job-map">{this.state.mapInfo.adminArea1Type}: </span>{this.state.mapInfo.adminArea1}</li>
                        </ul>
                    </div>)
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
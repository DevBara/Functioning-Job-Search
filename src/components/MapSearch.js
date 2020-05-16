import React from "react";
import axios from "axios";

class MapSearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mapImage:""
        }
    }
    async getMap(){
        const keyMap=process.env.REACT_APP_API_KEY_MAP;
       try{
           let mapInfo=await axios.get(`http://open.mapquestapi.com/geocoding/v1/reverse?key=${keyMap}&location=${this.props.lat},${this.props.long}&includeRoadMetadata=true&includeNearestIntersection=true`)
            // this.setState({jobsList: jobsInfo.data});
            console.log(mapInfo.data);
       }
       catch(error){
           console.log(error);
       }
    }
    componentDidMount(){
        this.getMap();
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}
export default MapSearch;
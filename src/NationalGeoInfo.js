import React, { Component } from 'react'

import './NationalGeoInfo.css'

class NationalGeoInfo extends Component{
    constructor(props){
        super(props)

        this.state={
            info:{},

        }
        this.fetchInfo(props)
    }

    componentWillReceiveProps = (newProps) =>{
        const locationChanged = newProps.location !== this.props.location
        if(locationChanged){
            this.fetchInfo(newProps)
        }
    }

    fetchInfo = (props) =>{
        fetch(`https://newsapi.org/v2/top-headlines?sources=national-geographic&apiKey=01870bcb78db4f37960cdc3f8affbbee`)
        
          .then(response => response.json())
          .then(info => this.setState({info}))
          
    }

    render(){
        if(this.state.info.articles){
            const test=this.state.info.articles
            
            
            return(
                <div className ='NationalGeoInfo'>
                    <img src={test[0].urlToImage} 
                        alt="article image" 
                        height="300px"
                        width="300px"
                    />
                    <h2><a href={test[0].url} target="_blank">{test[0].title} BY: {test[0].author}</a></h2>
                    <br/>
                    <br/>
                    <img src={test[1].urlToImage} 
                        alt="article image" 
                        height="300px"
                        width="300px"
                    />
                    <h2><a href={test[1].url} target="_blank">{test[1].title} BY: {test[1].author}</a></h2>
                </div>
            )
        }
        
        
        return(
          <div className ='NationalGeoInfo'>
              <h2>Select a Link</h2>
          </div>

        )
    }
}


export default NationalGeoInfo
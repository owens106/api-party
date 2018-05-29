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
        const {info}=this.state
        console.log(info.articles)
        const test=info.articles
        debugger
        
        return(
          <div className ='NationalGeo Info'>
              <h2>test</h2>
          </div>

        )
    }
}


export default NationalGeoInfo
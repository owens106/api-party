import React, {Component} from 'react'

import './GithubUser.css'

class GithubUser extends Component{
    constructor(props){
        super(props)

        this.state={
            user:{},

        }
        this.fetchUserData(props)
    }

    componentWillReceiveProps = (newProps) =>{
        const locationChanged = newProps.location !== this.props.location
        if(locationChanged){
            this.fetchUserData(newProps)
        }
    }

    fetchUserData = () =>{
        fetch(`https://api.github.com/users/${this.props.match.params.username}`)
          .then(response => response.json())
          .then(user => this.setState({user}))
    }

    render(){
        const {user}=this.state
        return(
          <div className ='GithubUser'>
              <img src = {user.avatar_url} alt='userIMG'/>
              <h2>{user.login}</h2>
              <a href ={user.html_url} target="_blank">Link to {user.login}'s profile </a>
          </div>

        )
    }
}

export default GithubUser
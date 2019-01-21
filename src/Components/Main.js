import React, { Component } from 'react'
import PhotoWall from './PhotoWall'
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import AddPhoto from './AddPhoto'
import {Route, Link} from 'react-router-dom'
import Single from './Single'

class Main extends Component {
    
    render () {
        return (
        <div>
           <AppBar className="appbar" position="static">
                <Typography variant="h1" color="inherit">
                <Link to="/"> P h o t o W a l l </Link>
                </Typography>
            </AppBar>
            <Route exact path = "/" render={() =>(
                <div>
                <PhotoWall {...this.props} />                
                </div>
            )}/>

            <Route path= "/AddPhoto" render = {({history}) => (
                <AddPhoto {...this.props} onHistory={history}/>
            )}/>

            <Route path="/single/:id" render = {(params) => (
                <Single {...this.props} {...params}/>
            )}/>
            </div>
        )
    }
}

   

export default Main
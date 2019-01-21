import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


const styles = theme => ({
    fab: {
        margin: theme.spacing.unit * 5,
        left: theme.spacing.unit * 152
        
      },
   });

function PhotoWall(props) {
    const { classes } = props
    return <div> 
     <Link to="/AddPhoto">
     <Tooltip className={classes.fab} title="Tambah Photo" aria-label="Add">
        <Fab color="primary"  >
          <AddIcon />
        </Fab>
      </Tooltip>
      </Link>
    <div className="photoGrid">
          {props.posts
            .sort(function(x,y){
                return y.id - x.id
            }) 
            .map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}      
          </div>
    </div>
} 

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default withStyles(styles)(PhotoWall)
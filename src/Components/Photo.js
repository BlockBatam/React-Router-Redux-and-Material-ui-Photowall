import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


const styles = theme => ({
    rightIcon: {
        marginLeft: theme.spacing.unit,
      },
    })

function Photo(props) {
    const { classes } = props;
    const post = props.post
    return <figure className="figure">
            <Link to={`single/${post.id}`}> <img className="photo" src={post.imageLink} alt={post.description}/> </Link>
            <figcaption> <p> {post.description} </p></figcaption>
            <div className="button-countainer">
            <Button onClick = {() => {
               props.removePost(props.index)
               props.history.push('/')
                }}variant="contained" color="secondary" className={classes.button}>
                    Delete
                    <DeleteIcon className={classes.rightIcon} />
            </Button>
            <Link className="button" to={`single/${post.id}`}>
                <div className="comment-count">
                    <div className="speech-bubble" ></div>
                    {props.comments[post.id] ? props.comments[post.id].length: 0 }
                </div>
            </Link>
            </div>
        </figure>
}



Photo.propTypes ={
    post: PropTypes.isRequired,
}


export default withStyles(styles)(Photo)

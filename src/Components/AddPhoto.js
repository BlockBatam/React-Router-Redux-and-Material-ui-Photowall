import React, { Component } from 'react'

class AddPhoto extends Component {

    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.Link.value
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if(description && imageLink) {
            this.props.addPost(post)
            this.props.onHistory.push('/')
        }
    }

  render() {
    return (
        <div>
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Input Link Image" name="Link"/>
                    <input type="text" placeholder="About the Desciption" name="description"/>
                    <button title="Push to Photowall"> Post </button>
                </form>
            </div>
        </div>
    )     
  }
}

export default AddPhoto

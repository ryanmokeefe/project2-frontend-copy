import React, {Component} from 'react'
import Resource from './Resource.js'
import ResourcesIndex from './ResourcesIndex.js'


let resources = [
    {
        "name": "Sandi Metz' Rules For Developers",
        "subject": "Web Development, Guidelines",
        "type": "Article",
        "url": "https://robots.thoughtbot.com/sandi-metz-rules-for-developers",
        "videos": "No",
        "exercises": "No",
        "votes": 0    
    },
    {
        "name": "Free Code Camp",
        "subject": "Web Development, jQuery, Javascript",
        "type": "Lesson",
        "url": "https://www.freecodecamp.org",
        "videos": "No",
        "exercises": "Yes",
        "votes": 0 
    },
    {
        "name": "Node School",
        "subject": "Node, JavaScript, Web Development",
        "type": "Lesson",
        "url": "https://nodeschool.io/#workshoppers",
        "videos": "No",
        "exercises": "Yes",
        "votes": 0    
    },
    {
        "name": "Eric Ries-Evangelizing for the Lean Startup",
        "subject": "Startup, Planning, Development",
        "type": "Lecture",
        "url": "https://www.youtube.com/watch?v=joViUzhTDk0&t=1474s",
        "videos": "Yes",
        "exercises": "No",
        "votes": 0    
    },
    {
        "name": "Managing Mongod Processes",
        "subject": "Web Development, Mongo, Mongod, Databases",
        "type": "Documentation",
        "url": "https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/",
        "videos": "No",
        "exercises": "No",
        "votes": 0    
    },
    {
        "name": "The Changelog",
        "subject": "Web Development",
        "type": "Podcast",
        "url": "https://changelog.com/podcast",
        "videos": "No",
        "exercises": "No",
        "votes": 0    
    }
  ]

class ResourceContainer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            resources: resources,
            showOne: false,
            query: '',
        };
    }

    render() {
        return (
            <div>
                {
                    this.state.showOne ? <Resource resources={this.state.resources}/> : <ResourcesIndex resources={this.state.resources}/> 
                }
            </div>
        )
    }

}


export default ResourceContainer

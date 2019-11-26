import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class OneDog extends Component {

    state = {
        dog: {
            name: '',
            age: '',
            breed: '',
            photo_url: '',
            owner: '',
        }
    }


    componentDidMount() {
        axios.get(`/api/v1/dog/${this.props.match.params.dogId}`)
        .then((res) => {
            this.setState({ dog: res.data })
        })
    }


    render() {
        return (
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/dog'>Dogs</Link>
                    <Link to='/owner'>Owners</Link>
                </nav>

                <h1>{this.state.dog.name}</h1>

            </div>
        )
    }
}

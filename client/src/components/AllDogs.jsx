import React, { Component } from 'react'
import axios from 'axios'


export default class AllDogs extends Component {

    state = {
        allDogs: []
    }


    componentDidMount() {
        axios.get('/api/v1/dog')
        .then((res) => {
            this.setState({ allDogs: res.data })
        })
    }


    render() {

        const listOfDogs = this.state.allDogs.map((dog) => {
            return <div>
                {dog.name}
            </div>
        })

        return (
            <div>
                <h1>Dogs</h1>

                <h2>{listOfDogs}</h2>
            </div>
        )
    }
}

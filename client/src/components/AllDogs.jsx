import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class AllDogs extends Component {

    state = {
        allDogs: [],
        newDog: {
            name: '',
            age: '',
            breed: '',
            photo_url: '',
            owner: '',
            actions: []
        }
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
                <Link to={`/dog/${dog.id}`}>
                    <div>
                        <img src={dog.photo_url} alt="dog photo"/>
                    </div>
                    {dog.name} 
                </Link>
            </div>
        })

        return (
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/dog'>Dogs</Link>
                    <Link to='/owner'>Owners</Link>
                </nav>
                <h1>Dogs</h1>

                <h2>{listOfDogs}</h2>
            </div>
        )
    }
}

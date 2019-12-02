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
        },
        ownerData: []
    }


    componentDidMount() {
        axios.get('/api/v1/dog/')
            .then((res) => {
                this.setState({ allDogs: res.data })
            })
            this.getOwnerData()
    }



    getOwnerData = () => {
        axios.get('/api/v1/owner')
            .then((res) => {
                this.setState({ ownerData: res.data })
            })
    }


    createNewDog = (evt) => {
        evt.preventDefault()
        const newDog = this.state.newDog
        
        axios.post('/api/v1/dog/', newDog)
            .then((res) => {
                this.componentDidMount()
            })
    }

    handleInputChange = (evt) => {
        const copiedNewDog = { ...this.state.newDog }
        copiedNewDog[evt.target.name] = evt.target.value
        this.setState({ newDog: copiedNewDog })
    }



    render() {

        const listOfDogs = this.state.allDogs.map((dog) => {
            return <div>
                <Link to={`/dog/${dog.id}`}>
                    <div className='dogList'>
                        <img src={dog.photo_url} alt="dog photo" />
                        <br/>
                        <h2>{dog.name}</h2>
                    </div>

                    
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

                {listOfDogs}




                <div className='createForm' id='createDogForm'>
                    <form onSubmit={this.createNewDog}>

                        <h2>Create New Dog</h2>

                        <div className='dogInput'>

                            <h1>Name</h1>
                            <input
                                type="string"
                                name="name"
                                placeholder="Dog's Name"
                                onChange={this.handleInputChange}
                                value={this.state.newDog.name}
                            />

                            <h1>Age</h1>
                            <input
                                type="string"
                                name="age"
                                placeholder="Dog's Age"
                                onChange={this.handleInputChange}
                                value={this.state.newDog.age}
                            />

                            <h1>Breed</h1>
                            <input
                                type="string"
                                name="breed"
                                placeholder="Breed"
                                onChange={this.handleInputChange}
                                value={this.state.newDog.breed}
                            />

                            <h1>Dog's Photo</h1>
                            <input
                                type="string"
                                name="photo_url"
                                placeholder="Dog Photo"
                                onChange={this.handleInputChange}
                                value={this.state.newDog.photo_url}
                            />

                            <br/>

                            <h1>Owner</h1>
                            <select
                                name="owner"
                                onChange={this.handleInputChange}
                                value={this.state.newDog.owner}
                            >
                                {this.state.ownerData.map(
                                    (owner) => {
                                        return <option value={owner.id}>{owner.name}</option>
                                    }
                                )}
                            </select>

                            <br />
                            <br />
                        </div>
                        <input type='submit' value='Create New Dog' />
                    </form>

                </div>

            </div>
        )
    }
}

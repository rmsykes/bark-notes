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
            return <div className='dogListSpacing'>
                <Link to={`/dog/${dog.id}`}>
                    <div>
                        <img className='dogList' src={dog.photo_url} alt="dog photo" />
                        <h2 className='dogList'>{dog.name}</h2>
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

                            <h2 className='dogFormTitle'>Name</h2>
                            <input
                                type="string"
                                name="name"
                                placeholder="Dog's Name"
                                onChange={this.handleInputChange}
                                value={this.state.newDog.name}
                            />

                            <h2 className='dogFormTitle'>Age</h2>
                            <input
                                type="string"
                                name="age"
                                placeholder="Dog's Age"
                                onChange={this.handleInputChange}
                                value={this.state.newDog.age}
                            />

                            <h2 className='dogFormTitle'>Breed</h2>
                            <input
                                type="string"
                                name="breed"
                                placeholder="Breed"
                                onChange={this.handleInputChange}
                                value={this.state.newDog.breed}
                            />

                            <h2 className='dogFormTitle'>Dog's Photo</h2>
                            <input
                                type="string"
                                name="photo_url"
                                placeholder="Dog Photo"
                                onChange={this.handleInputChange}
                                value={this.state.newDog.photo_url}
                            />


                            <h2 className='dogFormTitle'>Owner</h2>
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
                        <input className="submitButton" type='submit' value='Create New Dog' />
                    </form>

                </div>

            </div>
        )
    }
}

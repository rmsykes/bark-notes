import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class OneDog extends Component {

    state = {
        dog: {
            id: '',
            name: '',
            age: '',
            breed: '',
            photo_url: '',
            owner: '',
            actions: []
        },
        newAction: {
            walk: '',
            eat: '',
            poop: '',
            pee: '',
            medicine: '',
            dog: '',
        }
    }


    componentDidMount = () => {
        axios.get(`/api/v1/dog/${this.props.match.params.dogId}`)
            .then((res) => {
                this.setState({ dog: res.data })
            })
    }


    createNewAction = (evt) => {
        evt.preventDefault()
        const dogId = this.props.match.params.dogId;
        const newAction = {
            dog: dogId
        }
        Object.entries(this.state.newAction).forEach(([key, val]) => {
            if (val !== '') {
                newAction[key] = val
            }
        })
        if (
            this.state.newAction.walk !== '' &&
            this.state.newAction.eat === '' &&
            this.state.newAction.poop === '' &&
            this.state.newAction.pee === '' &&
            this.state.newAction.medicine === '') {
            axios.post(`/api/v1/action/`, newAction)
                .then((res) => {
                    this.componentDidMount()
                })
        } else if (
            this.state.newAction.walk === '' &&
            this.state.newAction.eat !== '' &&
            this.state.newAction.poop === '' &&
            this.state.newAction.pee === '' &&
            this.state.newAction.medicine === '') {
            axios.post(`/api/v1/action/`, newAction)
                .then((res) => {
                    this.componentDidMount()
                })
        } else if (
            this.state.newAction.walk === '' &&
            this.state.newAction.eat === '' &&
            this.state.newAction.poop !== '' &&
            this.state.newAction.pee === '' &&
            this.state.newAction.medicine === '') {
            axios.post(`/api/v1/action/`, newAction)
                .then((res) => {
                    this.componentDidMount()
                })
        } else if (
            this.state.newAction.walk === '' &&
            this.state.newAction.eat === '' &&
            this.state.newAction.poop === '' &&
            this.state.newAction.pee !== '' &&
            this.state.newAction.medicine === '') {
            axios.post(`/api/v1/action/`, newAction)
                .then((res) => {
                    this.componentDidMount()
                })
        } else if (
            this.state.newAction.walk === '' &&
            this.state.newAction.eat === '' &&
            this.state.newAction.poop === '' &&
            this.state.newAction.pee === '' &&
            this.state.newAction.medicine !== '') {
            axios.post(`/api/v1/action/`, newAction)
                .then((res) => {
                    this.componentDidMount()
                })
        } else {
            alert('Please enter an action, and only one action at a time')
        }
    }


    handleInputChange = (evt) => {
        const copiedNewAction = { ...this.state.newAction }
        copiedNewAction[evt.target.name] = evt.target.value
        this.setState({ newAction: copiedNewAction })
    }


    render() {

        const listOfDogActions = this.state.dog.actions.map((action) => {
            if (action.walk !== 'n/a') {
                const date = new Date().getDate()
                const month = new Date().getMonth() + 1
                return <div className='dogAction'>
                    🚶🐕@ {action.walk} {month}/{date}
                </div>
            }
            if (action.eat !== 'n/a') {
                const date = new Date().getDate()
                const month = new Date().getMonth() + 1
                return <div className='dogAction'>
                    🍽 @ {action.eat} {month}/{date}
                </div>
            }
            if (action.poop !== 'n/a') {
                const date = new Date().getDate()
                const month = new Date().getMonth() + 1
                return <div className='dogAction'>
                    🚽💩@ {action.poop} {month}/{date}
                </div>
            }
            if (action.pee !== 'n/a') {
                const date = new Date().getDate()
                const month = new Date().getMonth() + 1
                return <div className='dogAction'>
                    🚽💦@ {action.pee} {month}/{date}
                </div>
            }
            if (action.medicine !== 'n/a') {
                const date = new Date().getDate()
                const month = new Date().getMonth() + 1
                return <div className='dogAction'>
                    💊@ {action.medicine} {month}/{date}
                </div>
            }
        })



        return (
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/dog'>Dogs</Link>
                    <Link to='/owner'>Owners</Link>
                </nav>

                <h1 className='dogName'>{this.state.dog.name}</h1>

                <img src={this.state.dog.photo_url} alt="dog photo" />
                <h4>Age: {this.state.dog.age}</h4>
                <h4>Breed: {this.state.dog.breed}</h4>

                <div className='recordedDogActions'>
                    <h2>Recent Dog Actions</h2>
                    {listOfDogActions.reverse().slice(1, 10)}
                    <br />
                </div>


                <div className='createForm'>
                    <form onSubmit={this.createNewAction}>

                        <h2 className="recordActionTitle">Record New Dog Action</h2>

                        <div className='actionInput'>


                            <h2 className='emoji'>Walk 🚶🐕</h2>
                            <input
                                type="string"
                                name="walk"
                                placeholder="Time of walk"
                                onChange={this.handleInputChange}
                                value={this.state.newAction.walk}
                            />

                            <h2 className='emoji'>Feed 🍽</h2>
                            <input
                                type="string"
                                name="eat"
                                placeholder="Time of feeding"
                                onChange={this.handleInputChange}
                                value={this.state.newAction.eat}
                            />

                            <h2 className='emoji'>Poop 🚽💩</h2>
                            <input
                                type="string"
                                name="poop"
                                placeholder="Time of poop"
                                onChange={this.handleInputChange}
                                value={this.state.newAction.poop}
                            />

                            <h2 className='emoji'>Pee 🚽💦</h2>
                            <input
                                type="string"
                                name="pee"
                                placeholder="Time of pee"
                                onChange={this.handleInputChange}
                                value={this.state.newAction.pee}
                            />

                            <h2 className='emoji'>Medicine 💊</h2>
                            <input
                                type="string"
                                name="medicine"
                                placeholder="Time of medicine"
                                onChange={this.handleInputChange}
                                value={this.state.newAction.medicine}
                            />
                            <br />
                            <br />
                        </div>
                        <input className='submitButton' type='submit' value='Record New Action' />
                    </form>

                </div>


            </div>
        )
    }
}

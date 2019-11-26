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
            // actions: {
            //     walk: '',
            //     eat: '',
            //     poop:'',
            //     pee: '',
            //     medicine: ''
            // },
        },
        actionData: [],
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
        .then((res) => {
            this.getActionData()
        })
    }

    getActionData = () => {
        axios.get(`/api/v1/action`)
        .then((res) => {
            this.setState({ actionData: res.data })
        })
    }



    createNewAction = (evt) => {
        evt.preventDefault()
        const dogId = this.props.match.params.dogId;
        const newAction = {
            dog: dogId
        }
        Object.entries(this.state.newAction).forEach(([key, val]) => {
            if(val !== '') {
                newAction[key] = val
            }
        })


        axios.post(`/api/v1/action/`, newAction)
            .then((res) => {
                this.componentDidMount()
            })
    }


    handleInputChange = (evt) => {
        const copiedNewAction = {...this.state.newAction}
        copiedNewAction[evt.target.name] = evt.target.value
        this.setState({ newAction: copiedNewAction })
    }


    render() {

        const listOfDogActions = this.state.actionData.map((action)=> {
            if(action.walk !== 'n/a' ) {
                return <div>
                    {action.walk}
                </div>
            }
            if(action.eat !== 'n/a') {
                return <div>
                    {action.eat}
                </div>
            }
            if(action.poop !== 'n/a') {
                return <div>
                    {action.poop}
                </div>
            }
            if(action.pee !== 'n/a') {
                return <div>
                    {action.pee}
                </div>
            }
            if(action.medicine !== 'n/a') {
                return <div>
                    {action.medicine}
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

                <h1>{this.state.dog.name}</h1>

                <img src={this.state.dog.photo_url} alt="dog photo"/>

                <div className='recordedDogActions'>
                    <h2>Recent Dog Actions</h2>
                    {listOfDogActions}
                    <br/>
                </div>


                <div className='createForm'>
                    <form onSubmit={this.createNewAction}>

                        <h2>Record New Dog Action</h2>

                        <input 
                            type="string"
                            name="walk"
                            placeholder="Record Walk"
                            onChange={this.handleInputChange}
                            value={this.state.newAction.walk}
                        />

                        <input 
                            type="string"
                            name="eat"
                            placeholder="Record Eat"
                            onChange={this.handleInputChange}
                            value={this.state.newAction.eat}
                        />

                        <input 
                            type="string"
                            name="poop"
                            placeholder="Record Poop"
                            onChange={this.handleInputChange}
                            value={this.state.newAction.poop}
                        />

                        <input 
                            type="string"
                            name="pee"
                            placeholder="Record Pee"
                            onChange={this.handleInputChange}
                            value={this.state.newAction.pee}
                        />  

                        <input 
                            type="string"
                            name="medicine"
                            placeholder="Record Medicine"
                            onChange={this.handleInputChange}
                            value={this.state.newAction.medicine}
                        />

                        <input type='submit' value='Record New Action'/>
                    </form>

                </div>


            </div>
        )
    }
}

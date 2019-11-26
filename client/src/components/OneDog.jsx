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
  
    }


    createNewAction = (evt) => {
        evt.preventDefault()
        const newAction = this.state.newAction

        axios.post(`/api/v1/action`, newAction)
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
        return (
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/dog'>Dogs</Link>
                    <Link to='/owner'>Owners</Link>
                </nav>

                <h1>{this.state.dog.name}</h1>

                <img src={this.state.dog.photo_url} alt="dog photo"/>


                <div className='createForm'>
                    <form >
                        <h2>Record Dog Action</h2>
                        <input 
                            type="string"
                            name="walk"
                            placeholder="Record Walk"
                            onChange={this.handleInputChange}
                            value={this.state.newAction.walk}
                        />

                        <input type='submit' value='Record New Action'/>
                    </form>

                </div>


            </div>
        )
    }
}

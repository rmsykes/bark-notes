import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class AllOwners extends Component {

    state = {
        allOwners: []
    }


    componentDidMount() {
        axios.get('/api/v1/owner')
            .then((res) => {
                this.setState({ allOwners: res.data })
            })
    }




    render() {

        const listOfOwners = this.state.allOwners.map((owner) => {
            return <div>
                {owner.name}
            </div>
        })


        return (
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/dog'>Dogs</Link>
                    <Link to='/owner'>Owners</Link>
                </nav>
                <h1>Owners</h1>

                <h2>{listOfOwners}</h2>
            </div>
        )
    }
}

import React, { Component } from 'react'
import axios from 'axios'

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

        const listOfOwners = this.state.allOwners.map((owner)=> {
            return <div>
                <h2>{owner.name}</h2>
            </div>
        })


        return (
            <div>
                <h1>Owners</h1>

                {listOfOwners}
            </div>
        )
    }
}

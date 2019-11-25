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
                {owner.name}
            </div>
        })


        return (
            <div>
                <h1>Owners</h1>

                <h2>{listOfOwners}</h2>
            </div>
        )
    }
}

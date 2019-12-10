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
            return <div className='ownerList'>
                <img src={owner.photo_url} alt="owner photo" />
                <h2 className='ownerListName'>{owner.name}</h2>

            </div>
        })


        return (
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/dog'>Dogs</Link>
                    <Link to='/owner'>Owners</Link>
                </nav>
                <div className='header'>
                    <h1>Owners</h1>
                </div>

                <div className='allOwnersBody'>
                    {listOfOwners}

                </div>

            </div>
        )
    }
}

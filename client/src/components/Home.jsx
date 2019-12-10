import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>


                <div className='homeHeader'>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/dog'>Dogs</Link>
                        <Link to='/owner'>Owners</Link>
                    </nav>
                    <h1>Canine Recorder</h1>
                </div>

                <div className='appDescription'>
                    <h2>About:</h2>
                    <p>Remove the uncertainty of not knowing if the dog has been fed, or when the last time the dog went out.  This app helps folks is track their dog's actions in an easy, intuative way! Add your dog and keep track of their actions for others and help yourself and others know when the last time the dog was fed, went to the bathroom, or was given his/her mediine</p>
                </div>

                <div className='homeBody'>
                    <div className='home-link'>
                        <Link to={'/dog'} ><img className='homeList' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-Gk5Dxfu86jg%2FTmPuFsIuRKI%2FAAAAAAAAAec%2FW5whEcW9p4g%2Fs1600%2Fmacexplorer.com-puppy-dog-17.jpg&f=1&nofb=1" alt="dogs photo" /><h2>Dogs</h2></Link>
                    </div>

                    <div className='home-link'>
                        <Link to={'/owner'}> <img className='homeList' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcff2.earth.com%2Fuploads%2F2019%2F04%2F08191722%2FDog-owners-are-happier-than-cat-owners-survey-shows-730x410.jpg&f=1&nofb=1" alt="owner photo" /><h2>Owners</h2></Link>
                    </div>




                </div>


            </div>
        )
    }
}

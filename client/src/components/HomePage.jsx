// Import React, { Component }, Axios, and { Link }
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


// CREATE AND EXPORT HOMEPAGE COMPONENT
export default class HomePage extends Component {

    // HomePage Component State
    state = {
        message: ''
    }

    // componentDidMount() - bring in data on players so you can select players to play
    componentDidMount() {
        axios.get('/')
            .then((res) => {
                this.setState({message: res.data})
            })
    }


    // Rendered in Browser
    render() {
        return (
            <div className='homePage'>

                <div className='pageHeader'>
                    <nav>
                        <Link to='/'><button>Home</button></Link>
                        <Link to='/players'><button>Players</button></Link>
                        <Link to='/scores'><button>Scores</button></Link>
                        <Link to='/about'><button>About</button></Link>
                    </nav>

                    <h1>Spite and Malice</h1>
                </div>


                <div className='homeBody'>
                    <div className='homePagePlayer'>
                        <h2>Player One</h2>

                    </div> 

                    <div className='homePagePlayer'>
                        <h2>Player Two</h2>
                        
                    </div>
                </div>


            </div>
        )
    }
}

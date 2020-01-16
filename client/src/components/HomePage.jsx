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

    // componentDidMount() - usually brings in data and sets state but no need really, this is useless here in homepage
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


            </div>
        )
    }
}

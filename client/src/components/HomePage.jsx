// Import React, { Component }, Axios, and { Link }
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


// CREATE AND EXPORT HOMEPAGE COMPONENT
export default class HomePage extends Component {

    // HomePage Component State
    state = {
        listOfPlayers: [],

    }

    // componentDidMount() - bring in data on players so you can select players to play
    componentDidMount() {
        axios.get('/api/player')
            .then((res) => {
                this.setState({ listOfPlayers: res.data })
            })
    }



    // startGame() - starts game with players selected
    startGame = () => {
        alert('start game')
    }

    // Rendered in Browser
    render() {

        const listOfPlayers = this.state.listOfPlayers.map(
            (player) => {
                return <div>
                    <h2>{player.name}</h2>
                </div>

            })

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
                    <div className='homeBodyAllPlayersArea'>
                        <div className='homePagePlayer'>
                            <h2>Player One</h2>

                            <div className='homePagePlayerSelectForm'>
                                <select
                                    name="playerId"
                                // onChange={}
                                // value={this.handleInputChange}
                                >
                                    {this.state.listOfPlayers.map(
                                        (player) => {
                                            return <option value={player._id}>{player.name}</option>
                                        }
                                    )}
                                </select>

                            </div>
                        </div>

                        <div className='homePagePlayer'>
                            <h2>Player Two</h2>

                            <div className='homePagePlayerSelectForm'>
                                <select
                                    name="playerId"
                                // onChange={}
                                // value={this.handleInputChange}
                                >
                                    {this.state.listOfPlayers.map(
                                        (player) => {
                                            return <option value={player._id}>{player.name}</option>
                                        }
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='startGameButton'>
                        <button onClick={this.startGame}>Start Game</button>
                    </div>
                </div>






            </div>
        )
    }
}

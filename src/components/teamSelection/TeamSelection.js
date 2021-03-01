import PlayersInfo from '../../PlayersInfo'
import {useEffect, useState} from 'react'
import Players from '../players/Players'
import AddToTeam from '../AddToTeam/AddToTeam'
import './TeamSelection.css'

const TeamSelection = () =>{

    const [playersList,setPlayersList] = useState([])
    const [addTeam,setAddTeam] = useState([])

    useEffect(() => {
        // taking data from playersinfo named json file and set in playersList 
        setPlayersList(PlayersInfo)
    },[])


 
    console.log('players list',playersList)

    const handleClick = (addedPlayer) => {
        console.log('i am clicked');
        setAddTeam([...addTeam,addedPlayer]) // adding added player with already added players
    }
    return (
        <div  style = {{display:'flex'}}>
            

            <div className='allPlayers'>
                {
                    playersList.map(player => {
                        return <Players player = {player} handleClick = {handleClick}></Players>
                    })
                }
            </div>

            <div>
                
                <AddToTeam addTeam = {addTeam}></AddToTeam>
            </div>
        </div>
    )
}

export default TeamSelection

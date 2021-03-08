import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

import './Players.css'

const Players = (props) => {
    const {name,team,salary,image} =  props.player; // all info of a player
    
    
    const handleClick = props.handleClick;
    return (
        <div className='player '>
            <div className>
                <img src={image} alt="player image " style={{width:'200px'}}/>
            </div>

            <div style={{marginTop:'10px'}}>
            <h4> {name} </h4>
            <p> Club: {team} </p>
            <p> Salary: {salary} </p>
            <Button onClick = {() => handleClick(props.player)} >   <FontAwesomeIcon icon={faUserPlus} /> Add To Team </Button>
            </div>
            
        </div>
    );
};

export default Players;
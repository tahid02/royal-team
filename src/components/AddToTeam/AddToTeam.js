


const bg = {
    backgroundColor:'lightgray',
    borderRadius:'7px',
    marginTop:'5px',
    marginLeft:'5px'
}

const AddToTeam = (props) => {
    const addTeam = props.addTeam
    
    // adding all salary of added players
    const totalSalary = addTeam.reduce((total,player) => total + parseInt(player.salary) ,0)
   
    return (
        <div>
            <h3>total players: {addTeam.length}</h3>
            <h3>total salary: ${totalSalary}</h3>
            {
                addTeam.map( add =>{

                    return (
                        <div styles={{backgroundColor:'yellow'}}>
                            <h4 style={bg}> {add.name}- ${add.salary} </h4>
                          
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AddToTeam;
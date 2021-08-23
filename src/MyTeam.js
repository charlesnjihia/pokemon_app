import {connect} from 'react-redux';
import { handleSelectedPokeman,handleRemovefromTeam } from './redux/actions/PokemanActions';
import { Text,Button,ListItem, OrderedList} from "@chakra-ui/react";

function MyTeam(props){
return(
  <div className="List-holder">
  <Text as="samp" width="100%" color="teal"><b>My Team</b></Text>
   <OrderedList>
  {props.poks.myteam.map((pokemon,index)=>

 <ListItem key={index}>{pokemon.name} <Button colorScheme="teal" size="xs" onClick={()=>props.handleSelectedPokeman(index)} > VIEW</Button> <Button colorScheme="red" size="xs" onClick={()=>props.handleRemovefromTeam(index)} >REMOVE</Button></ListItem>


  )

  }
  </OrderedList>

</div>

);
}
const mapStateToProps=state=>{
  return{
    poks:state

  };
}
export default connect(mapStateToProps,{handleSelectedPokeman,handleRemovefromTeam })(MyTeam);

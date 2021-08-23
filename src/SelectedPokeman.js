import {connect} from 'react-redux';
import { Text } from "@chakra-ui/react";

function SelectedPokemon(props){

let pokemon=props.poks.selectedPokemon;


return (

  <div>
  <Text as="samp" width="100%" color="teal"><b>Pokemon Details</b></Text><br/>
  <Text ><b> Name:</b> {pokemon.name}</Text>
  <Text ><b> Height:</b> {pokemon.height} </Text>
  <Text ><b> Weight:</b> {pokemon.weight} </Text>
  <Text > <b> Abilities:</b> {pokemon.abilities}  </Text>

  </div>





);
}
const mapStateToProps=state=>{
  return{
    poks:state

  };
}


export default connect(mapStateToProps,{})(SelectedPokemon);

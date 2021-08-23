import {connect} from 'react-redux';
import { handleAddToTeam } from './redux/actions/PokemanActions';
import { Flex,Text,Button } from "@chakra-ui/react";


 function SearchResult(props){

   const addButton=props.poks.myteam.length>=6 || props.findIfInTeam(props.poks.pokemon.id).length>0 ?(
   <Button mt="20px" size="md" colorScheme="twitter"  disabled >Add to my team </Button>
   ):(
       <Button mt="20px" size="md" colorScheme="twitter" onClick={()=>props.handleAddToTeam(props.poks.pokemon)} >Add to my Team </Button>
   );




       let pokemon=props.poks.pokemon;


   return(

     <Flex  direction="column" width="60%" mt="20px" align="center">
     <Text as="samp" color="#1F5CA8" fontSize="2xl"><b>Search Result</b></Text>
     <Text ><b> Name:</b> {pokemon.name}</Text>
     <Text ><b> Height:</b> {pokemon.height} </Text>
     <Text ><b> Weight:</b> {pokemon.weight} </Text>

      { addButton}
     </Flex>

 );
 }
 const mapStateToProps=state=>{
   return{
     poks:state

   };
 }

 export default connect(mapStateToProps,{handleAddToTeam})(SearchResult);

import React,{Component } from 'react';
import SearchResult from './SearchResult';
import SelectedPokemon from './SelectedPokeman';
import logo from './pokemon_logo.png';
import MyTeam from './MyTeam';
import {connect} from 'react-redux';
import { fetchPokemon,handlePokeIdentifier } from './redux/actions/PokemanActions';
import { Flex, Spacer,Center,Text,Image,Input ,Button,Spinner,Alert,AlertTitle,AlertIcon } from "@chakra-ui/react";




class  App extends  Component {

findIfInTeam=(id)=>{
  return this.props.poks.myteam.filter(e => e.id === id) ;


}

  render(){
  
    const button= this.props.poks.pokemonIdentifer.length>0?(
        <Button  colorScheme="teal" size="md" ml="10px" onClick={(e)=>this.props.fetchPokemon(this.props.poks.pokemonIdentifer)}>Search </Button>
            ):(
              <Button colorScheme="teal" size="md" ml="10px" disabled>Search</Button>

            )

    let fetchRes=null;
    if(this.props.poks.fetchSuccess){
          fetchRes=(
            <SearchResult
            findIfInTeam={this.findIfInTeam}
            />
          );
       }
       if(this.props.poks.notfound){
         fetchRes=(

           <Alert status="error" width="20%" mt="20px" align="center">
              <AlertIcon />
              <AlertTitle mr={2}>Not Found!</AlertTitle>
            </Alert>



         );
       }

      if(this.props.poks.fetchError){
        fetchRes=(
          <Alert status="error" width="20%" mt="20px" align="center">
             <AlertIcon />
             <AlertTitle mr={2}>Error!</AlertTitle>
           </Alert>


        );
      }
      if(this.props.poks.fetching){
        fetchRes=( <div><Spinner mt="10px"/></div>);
      }


  return (
    <Flex bg="#FFFFFF" direction="column" borderTopRadius="10px" align="center">

      <Center  h="150px" width="100%"  bgGradient="linear(to-b, #DDE1E6, #F4F4F4)"  borderTopRadius="10px" >
        <Image src={logo} alt="logo" />
      </Center>
      <Flex  flex="1"  bg="white"  direction="column" align="center">

        <Text as="samp" color="#1F5CA8" fontSize="3xl">Search Pokemon</Text>
        <Flex direction="row" >
          <Input  value={this.props.poks.pokemonIdentifer} onChange={this.props.handlePokeIdentifier} />
          {button}
        </Flex>


        {fetchRes}

      </Flex>
      <Flex flex="1" mt="10px" width="80%" direction="row" justify="space" >
          <Flex width="49%" border="1px" borderColor="gray.200" borderTopRadius="md" height="250px" pl="10px">

          <MyTeam />

          </Flex>
           <Spacer />

          <Flex width="49%" border="1px" borderColor="gray.200" borderTopRadius="md" height="250px" pl="10px">
              {this.props.poks.selectedPokemon.name ?(
               <SelectedPokemon />


               ):(null)
               }

          </Flex>
       </Flex>
    </Flex>

  );
}
}
const mapStateToProps=state=>{
  return{
    poks:state

  };
}

export default connect(mapStateToProps,{fetchPokemon,handlePokeIdentifier})(App);

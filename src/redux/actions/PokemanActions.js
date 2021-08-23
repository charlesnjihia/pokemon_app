import axios from 'axios';
const baseUrl="https://pokeapi.co/api/v2/pokemon/";

export const fetchPokemon=(searchKey)=>{

   return async dispatch=>{
  dispatch(fetchingStarted())


  try{
 axios
     .get(baseUrl+searchKey)
     .then((response) => {
      // console.log(response.data);
        dispatch(trimPokemon(response.data))
   }).catch(error => {



    //not found error
        dispatch(setNotFound())


   });
 }catch(error){
   //error
   dispatch(setErrorFound())
 }



}
}
//action to fire fetching
const fetchingStarted=()=>({
type:"FETCHING"
});
//action to add the fetched pokemon result
const trimPokemon=(res)=>{

let pokemon={
 name:res.name,
 height:res.height,
 weight:res.weight,
 id:res.id
}
//console.log(res.abilities);
let abils=res.abilities;
let abilities=[];

let len=abils.length;

let max=len>5 ? 5:len;

for(let i=0;i<max;i++){

  abilities.push(abils[i].ability.name);
}
pokemon.abilities=abilities.join(",");

return {
  type:"FETCHINGSUCCESS",
  payload:pokemon
}
}
//action to fire not notfound
const setNotFound=()=>({
 type:"NOTFOUND"

});
//action to fire error
const setErrorFound=()=>({
type:"FETCHERROR"

});
//add pokeman to my team
export const handleAddToTeam=(pokemon)=>({
type:"ADDTOTEAM",
payload:pokemon
});
//fire remove from Team
export const handleRemovefromTeam=(index)=>({
type:"REMOVEFROMTEAM",
payload:index
});
//set selected pokeman for Details
export const handleSelectedPokeman=(index)=>({
  type:"POKEMONSELECTED",
  payload:index
});

export const handlePokeIdentifier=(e)=>({
  type:"ADDINGSEARCH",
  payload:e.target.value
});

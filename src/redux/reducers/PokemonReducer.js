
const initialState={
  pokemon:{},
  myteam:[],
  pokemonIdentifer:"",
  fetchError:false,
  fetchSuccess:false,
  notfound:false,
  selectedPokemon:{},
  fetching:false,

}

  const pokemonReducer=(state=initialState,action)=>{
    switch(action.type){

      case "FETCHING":
           return {...state,pokemon:{},fetching:true}

      case "FETCHINGSUCCESS":
            return {...state,fetchSuccess:true,fetching:false,pokemon:action.payload}

      case "NOTFOUND":
            return {...state,fetching:false,notfound:true}

      case "FETCHERROR":
            return {...state,fetching:false,fetchError:true}

      case "POKEMONSELECTED":
             let selectedPok=state.myteam[action.payload];
            return {...state,selectedPokemon:selectedPok}

      case"ADDINGSEARCH":
            return {...state,pokemonIdentifer:action.payload}

      case "ADDTOTEAM":
            let team=state.myteam;
            team.push(action.payload);
            return {...state,myteam:team}

      case "REMOVEFROMTEAM":
            let newteam=state.myteam;
            newteam.splice(action.payload,1);
            return {...state,myteam:newteam,selectedPokemon:{}}


      default:
            return state;

    }
  }

  export default pokemonReducer;

import {combineReducers} from 'redux';

const songsReducer= () =>{
    return [
        {title:'No Scrubs', duration: '4.05'},
        {title:'Rare', duration: '2.05'},
        {title:'All Star', duration: '3.05'},
        {title:'I want it that Way', duration: '1.05'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) =>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer, //songs, selectedSong are variables to be mapped to state variables of components, so that if these variables change, corresponding components will re-render
    selectedSong: selectedSongReducer
});

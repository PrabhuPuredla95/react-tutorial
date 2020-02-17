import React, {Component} from "react";
import {connect} from 'react-redux';
import {selectSong} from "../actions";

class SongList extends Component{
    renderList(){
        return this.props.songs.map((song) =>{
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    render(){
        return <div className="ui divided list">{this.renderList()}</div>
    }
};

const mapStateToProps = (state) => {
    return {songs: state.songs};//songs is prop in combined reducers
};
// this songlist component will require data, which fetches from songs prop from combined reducers

// this connect takes this selectSong action creator and pass it into SongList component as prop
export default connect(mapStateToProps,{
    selectSong: selectSong
})(SongList);

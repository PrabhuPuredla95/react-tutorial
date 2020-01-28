import React from "react";
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'
import ImageList from './ImageList'
class App extends React.Component{
    state = { images: [] };
    onSearchSubmit = (term) =>{
        unsplash.get('/search/photos',{
            params:{
                query: term,
                per_page: 20
            },
        }).then((response) => {
            this.setState({images: response.data.results})
        });
    }
    render() {
        return (
            <div className='ui container' style={{marginTop:'15px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    };
};

export default App;



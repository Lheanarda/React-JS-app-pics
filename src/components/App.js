import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Spinner from './Spinner';

class App extends React.Component{

    state = {images:[], loading:null}

    onSearchSubmit = async(term) =>{
        this.setState({loading:true});
        const response =  await unsplash.get('/search/photos',{
            params:{ query: term }
        });
        this.setState({loading:false});
        this.setState({images:response.data.results})
    }
    renderContent = ()=>{
        return this.state.loading ? <Spinner message="Load image..." /> : null
    }
    

    render(){
        
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                {this.renderContent()}
                <ImageList images = {this.state.images} />
            </div>
        )
    }   
}

export default App;
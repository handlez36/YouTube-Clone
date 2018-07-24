import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyArYh8IS_IJgfdPaF6KTeM6TqMMWYAWfJA';

// Create a new component. This component should produce some HTML
// ES5 style...
// const App = function() {
//     return <div>Hi</div>;
// }

// Using ES 6 syntax...
// Functional component
// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>
//     );
// }

// Class Based Component
// Do this so App can keep track of the list of videos via state
class App extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            videos: [], 
            selectedVideo: null
        };

        this.videoSearch("drink champs");
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, videos => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });      // When key and value are the same, ES6 allows a more condense version ({ video })
        });        
    }
    
    render() {
        // Create a new function that can only be called once every 300ms
        // Used to throttle function calls
        const videoSearch = _.debounce( term => { this.videoSearch(term) }, 300 );

        return (
            <div>
                <SearchBar 
                    onSearchTermChange={ videoSearch } />
                <VideoDetail video={ this.state.selectedVideo } />
                <VideoList 
                    videos={ this.state.videos }
                    onVideoSelect={ selectedVideo => this.setState({  selectedVideo }) } />
            </div>
        );        
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));

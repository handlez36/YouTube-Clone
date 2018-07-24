import React, { Component } from 'react';

// Functional component...
// const SearchBar = () => {
//     return <input />
// };

// Class component...
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    
    onInputChange = (event) => {
        this.setState({ term: event.target.value });
        this.props.onSearchTermChange( this.state.term );
    }
    
    render() {
        return (
            <div className="search-bar">
                <input
                    value={ this.state.term } 
                    onChange={ this.onInputChange }     // This could be replaced with onChange={ event => this.onInputChange(event) }
                 />
            </div>
        );
        // Using arrow function instead...
        // return <input onChange={ event => console.log(event.target.value) } />;
    }
}

export default SearchBar;
import React from 'react';
import './search.css';

class Search extends React.Component{
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
    }

    handleSearchChange = () => {
        var lang = this.refs.search.value;
        this.props.onSearch(lang);
    }

    render() {
        return (
            <div ref={this.listRef}>{
                <input className="inputField" onChange={this.handleSearchChange} type="text" ref="search" />
            }
                <button className="searchButton" onClick={this.handleSearchChange}>
                    Search
                </button>
            </div>
        );
    }
}

export default Search;

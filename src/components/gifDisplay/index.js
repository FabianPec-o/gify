import React, { Component } from 'react';
import './search.css';
// get posts from online api
// it's return a json file

class gifDisplay extends Component {

    constructor(props){
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            posts : [],
            render: false
        };
    }

    componentWillReceiveProps(props){
        const { searchVal } = this.props.searchVal;
        const { posts } = this.state;
        console.log("update trigger");

        this.setState({
            isLoaded: false,
            posts: [],
            render: false
        });

        let searchUrl = "http://api.giphy.com/v1/gifs/search?q=" + this.props.searchVal + "&api_key=MjZtJzHMrKKKQquB2YfVZ7suQZ0ERC6V&limit=" + this.props.length;
            fetch(searchUrl)
                .then(response => response.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            posts: result,
                            render: true
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        })
                    },
                )
    }

    render() {
        const {error, isLoaded, posts, render} = this.state;

        console.log(posts);
        if (render === false && posts === []) return null;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading results</div>
        }else{
            console.log("rendered");

            return(
                    <div className="gifDisplaySection">
                        {
                            posts.data.map(post => (
                                    <div className="gifContainer" key={post.images.downsized.url}>
                                        <img className="gif" src={post.images.downsized.url}/>
                                    </div>
                            ))
                        }
                </div>
            );
        }

    }
}

export default gifDisplay;
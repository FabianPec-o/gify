import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./components/Search";
import GifDisplay from "./components/gifDisplay";
import Nav from "./components/Nav";
import {FormattedMessage} from "react-intl";

class App extends React.Component{

  constructor(props) {
    super(props);
    this.listRef = React.createRef();

    this.state = {
      search: "",
      length: 20,
      results: undefined
    };
  }

  handleSearch = (langValue) => {
    this.setState({search: langValue}, () => {
        console.log(this.state.search)
    });
  }

  render() {
      const s = this.state.search;
      const l = this.state.length;

      return (

          <div className="App" ref={this.listRef}>
              <Nav />

            <header className="App-header">
                <h1>Gifs tagged:{s}</h1>
                <img src={logo} className="App-logo" alt="logo"/>
                <Search onSearch={this.handleSearch} searchVal={s}/>

                <h2>
                    <FormattedMessage
                        id="Home.welcomeMessage"
                        defaultMessage="Your favorite place to browse gifs"
                    />
                </h2>
            </header>

              <GifDisplay searchVal={s} length={l}/>
        </div>
    );
  }
}

export default App;
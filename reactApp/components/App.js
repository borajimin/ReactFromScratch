import React from 'react';
import Feed from './Feed';
import Tweeter from './Tweeter';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
  }

  addTweet(content){
    this.setState({
      messages: [content, ...this.state.messages]
    })
  }
  render(){
    return(
      <div style={{'minHeight':'50px',
                  border: '2px solid black',
                  background: 'lightblue',
                  margin: '10px',
                  padding: '5px'
      }}>
        <Tweeter addTweet={(content) => this.addTweet(content)}/>
        <Feed messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;

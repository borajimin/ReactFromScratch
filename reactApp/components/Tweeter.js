import React from 'react';

class Tweeter extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div style={{'minHeight':'50px',
                  border: '2px solid white',
                  background: 'lightgreen',
                  margin: '10px',
                  padding: '5px'
      }}>Tweeter: <input ref="tweet" type="text"/>
      <button onClick={() => {
        this.props.addTweet(this.refs.tweet.value);
        this.refs.tweet.value = '';
      }}>Tweet</button>
    </div>
    );
  }
}

export default Tweeter;

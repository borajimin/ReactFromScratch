import React from 'react';
import Tweet from './Tweet';

class Feed extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div style={{'minHeight':'50px',
                  border: '2px solid white',
                  background: 'lightpink',
                  margin: '10px',
                  padding: '5px',
                  borderRadius: '10px'
      }}>{
        this.props.messages.map((msg) => <Tweet message={msg} />)
      }</div>
    );
  }
}

export default Feed;

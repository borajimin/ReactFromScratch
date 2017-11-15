import React from 'react';

class Tweet extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div style={{'minHeight':'50px',
                  border: '2px solid white',
                  background: 'lightyellow',
                  margin: '10px',
                  padding: '5px',
                  borderRadius: '12px'
      }}>{this.props.message}</div>
    );
  }
}

export default Tweet;

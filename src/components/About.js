import React from 'react';
import {connect} from 'react-redux'

class About extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="Home">
        about
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About);

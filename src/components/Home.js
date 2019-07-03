import React from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';

class Home extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="Home">
        home
        <div>
            <Link to="/about">关于我们</Link>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React from 'react';
import {connect} from 'react-redux';
import {updateUser, apiRequest } from '../actions/user-actions';
//import {bindActionCreators} from 'redux';

class ReduxExample extends React.Component{
  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser(event){
    this.props.onUpdateUser(event.target.value);
  }

  componentDidMount(){
    this.props.onApiRequest();
  }

  render(){
    return (
      <div>
        The user is : {this.props.user}
        <br/>
        <input type="text" onChange={this.onUpdateUser}/>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.aRandomProp}`
  }
};

const  mapStateToActions ={
    onUpdateUser: updateUser,
    onApiRequest : apiRequest
  };
/*
const  mapStateToActions =(dispatch, props)=> {
  return bindActionCreators({
    onUpdateUser: updateUser
  }, dispatch);
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps)=>{
  console.log(propsFromState);
  console.log(propsFromDispatch);
  console.log(ownProps);

  return {};
}
*/
export default connect(mapStateToProps, mapStateToActions)(ReduxExample);

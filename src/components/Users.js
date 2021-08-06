import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
      let userList = this.props.users.map((user, index) => (
          <li key={index}>{user.username}</li>
      ))
    return (
      <div>
        <ul>
          {userList}
        </ul>
        {this.props.users.length}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)

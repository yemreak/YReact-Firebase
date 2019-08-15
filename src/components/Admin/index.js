import React, { Component } from "react";

import { withAuthorization } from "../Session";

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    // TIP: Her kullanıcı işlemi olduğunda çalışır
    // WARN: users(), component unmount olduğunda kaldırlmazsa performans kaybına neden olur.
    this.props.firebase.users().on("value", snapshot => {
      const userObject = snapshot.val();

      // Her user öğesini listeye kaydetme
      const userList = Object.keys(userObject).map(key => ({
        ...userObject[key],
        uid: key
      }));

      this.setState({
        users: userList,
        loading: false
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        <h1> Admin </h1>
        {loading && <div> Loading ... </div>}
        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
      </li>
    ))}
  </ul>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AdminPage);

import React from 'react';
import './App.css';
import FormSample from './Form';
import Listing from './Listing';

export default class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      user: [
        { name: 'Jonathan', phone: '123' },
      ],
    };
  }

    handleSubmit = (name, phone) => {
      const { user } = this.state;
      const data = { name, phone };
      user.push(data);
      this.setState({ user });
    };

    render() {
      const { user } = this.state;
      return (
        <>
          <FormSample handleSubmit={this.handleSubmit} />
          <Listing users={user} />
        </>
      );
    }
}

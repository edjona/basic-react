import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class FormSample extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
    };
  }

  handleChange = (event) => {
    const val = event.target.name;
    this.setState({ [val]: event.target.value });
  };

  submit = (event) => {
    const { handleSubmit } = this.props;
    const { name, phone } = this.state;
    handleSubmit(name, phone);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <fieldset>
          <legend> Form </legend>
          <input name="name" type="text" onChange={this.handleChange} />
          <br />
          <input name="phone" type="text" onChange={this.handleChange} />
          <br />
          <button type="submit"> submit </button>
        </fieldset>
      </form>
    );
  }
}

FormSample.propTypes = { handleSubmit: PropTypes.func.isRequired };

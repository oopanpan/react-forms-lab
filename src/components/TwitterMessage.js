import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars,
      msg: '',
    };
  }

  onInputChange = e =>{
    this.setState({
      maxChars: this.state.maxChars - e.target.value.length,
      msg: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
              onChange = {this.onInputChange}
              value = {this.state.msg}
              type="text" 
              name="message" 
              id="message" 
        />
        <p>remaining characters: {this.state.maxChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;

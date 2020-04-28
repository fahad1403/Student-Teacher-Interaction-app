import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Example extends Component {
  state = {
    messages: [],
  };

  componentWillMount() {
    this.setState({
     
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

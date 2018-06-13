import React, { Component } from 'react';

import { Content, Img, Round } from './styles';

class Cat extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Content style={{ 'background-color': this.props.color }}>
        <Round>
          <Img src="http://78.media.tumblr.com/tumblr_m29a9d62C81r2rj8po1_500.jpg" />
        </Round>
      </Content>
    )
  }
}

export default Cat;

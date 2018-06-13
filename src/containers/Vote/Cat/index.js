import React, { Component } from 'react';

import { Content, Img, Round } from './styles';

class CatComponent extends Component {
  render() {
    return (
      <Content style={{ backgroundColor: this.props.color }}>
        <Round onClick={this.props.onVote}>
          { this.props.cat ? (<Img src={ this.props.cat.url } />) : null }
        </Round>
      </Content>
    )
  }
}

export default CatComponent;

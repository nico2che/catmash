import React, { Component } from 'react';

import { Content, Img } from './styles';

class CatComponent extends Component {
  render() {
    return (
      <Content style={{ backgroundColor: this.props.color }}>
        { this.props.cat ? (<Img onClick={this.props.onVote} src={ this.props.cat.url } />) : null }
      </Content>
    )
  }
}

export default CatComponent;

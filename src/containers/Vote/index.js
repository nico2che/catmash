import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Flex, Logo, Footer } from './styles';
import Cat from './Cat';

const votes = [];

class Vote extends Component {
  render() {
    return (
      <Container>
        <Logo>CAT MASH</Logo>
        <Flex>
          <Cat color="#ecf0f1" />
          <Cat color="#f7f7f7" />
        </Flex>
        <Footer>
          <p><Link to="/score">Voir les plus beaux chats</Link></p>
          <p>{ votes.length } votes</p>
        </Footer>
      </Container>
    )
  }
}

export default Vote;

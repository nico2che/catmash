import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Flex, Logo, Footer } from './styles';
import * as catActions from 'actions/cat.action';
import Cat from './Cat';

const votes = [];

class VoteComponent extends Component {
  constructor(props) {
    super(props);
    this.props.getAllCat();
  }

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

const mapStateToProps = (state) => ({
  state: {
    error: state.cat.error,
  }
});

const mapDispatchToProps = (dispatch) => ({
  getAllCat: () => dispatch(catActions.getCat())
})

const Vote = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VoteComponent);

export default Vote;

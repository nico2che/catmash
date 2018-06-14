import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as catActions from 'actions/cat.action';
import * as scoreActions from 'actions/score.action';
import { Container, Flex, Logo, Footer } from './styles';
import Cat from './Cat';

const INITIAL_SCORE = { score: 1000, count: 0 };

class VoteComponent extends Component {
  constructor(props) {
    super(props);
    props.getAllCat();
    props.getAllScore();
  }

  getScoreLength = () => {
    const votes = this.props.state.score.scores;
    if (!votes) {
      return 0;
    }
    return Object.keys(votes).reduce((length, voteId) => length + votes[voteId].count, 0);
  }

  getCats = () => {
    const { cats } = this.props.state.cat;
    if (!cats) {
      return {};
    }
    return {
      catLeft: cats[Math.floor(Math.random() * cats.length)],
      catRight: cats[Math.floor(Math.random() * cats.length)],
    };
  }

  scoreCalculation = (scoreWinner, scoreLoser) => {
    const difference = Math.abs(scoreWinner - scoreLoser);
    const pD = 1 / (1 + 10 ** (-difference / 400));
    return {
      winner: scoreWinner + 10 * (1 - pD),
      loser: scoreLoser + 10 * (0 - pD),
    };
  }

  vote = (catWinner, catLoser) => {
    const { scores } = this.props.state.score;
    const scoreWinner = scores[catWinner.id] || INITIAL_SCORE;
    const scoreLoser = scores[catLoser.id] || INITIAL_SCORE;
    const { winner, loser } = this.scoreCalculation(scoreWinner.score, scoreLoser.score);
    this.props.vote(
      { ...catWinner, score: winner, count: scoreWinner.count + 1 },
      { ...catLoser, score: loser, count: scoreLoser.count || 0 },
    );
  }

  render() {
    const loading = this.props.state.cat.loading || this.props.state.score.loading;
    const { catLeft, catRight } = this.getCats();
    return (
      <Container>
        <Logo>CAT MASH</Logo>
        {
          loading ? (
            <div>Chargement...</div>
          ) : (
            <Flex>
              <Cat
                onVote={() => this.vote(catLeft, catRight)}
                cat={catLeft}
                color="#ecf0f1" />
              <Cat
                onVote={() => this.vote(catRight, catLeft)}
                cat={catRight}
                color="#f7f7f7" />
            </Flex>
          )
        }
        <Footer>
          <p><Link to="/score">Voir les plus beaux chats</Link></p>
          <p>{ this.getScoreLength() } votes</p>
        </Footer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  state: {
    cat: state.cat,
    score: state.score,
  }
});

const mapDispatchToProps = (dispatch) => ({
  getAllCat: () => dispatch(catActions.getCat()),
  getAllScore: () => dispatch(scoreActions.getScore()),
  vote: (catWinner, catLoser) => dispatch(scoreActions.updateScore({ catWinner, catLoser })),
});

const Vote = connect(
  mapStateToProps,
  mapDispatchToProps,
)(VoteComponent);

export default Vote;

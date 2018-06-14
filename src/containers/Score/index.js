import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as catActions from 'actions/cat.action';
import * as scoreActions from 'actions/score.action';

import { Container, Best, Logo, ImgContainer, Rank, Img, Other, RankOther, ImgOther } from './styles';

const rankColors = ['gold', 'silver', '#cd7f32']

class ScoreComponent extends Component {
  constructor(props) {
    super(props);
    this.props.getAllCats();
    this.props.getAllScores();
  }

  getSortedCats = () => {
    const cats = this.props.state.cats;
    const scores = this.props.state.scores;
    if (!cats || !scores) {
      return {};
    }
    return cats
      .map((cat) => ({
        ...cat,
        ...(scores[cat.id] && { score: scores[cat.id].score }),
      }))
      .sort(this.sortScore);
  }

  sortScore(oneCat, twoCat) {
    const oneScore = oneCat.score || 0;
    const twoScore = twoCat.score || 0;
    return oneScore < twoScore ? 1 : -1;
  }

  render() {
    const cats = this.getSortedCats();
    return (
      <Container>
        <Logo>CAT MASH</Logo>
        <Link to="/">Retour aux votes</Link>
        <Best>
          {
            cats.slice(0, 3).map((cat, i) => (
              <ImgContainer key={cat.id}>
                <Rank style={{ borderColor: rankColors[i] }}>{ i + 1 }</Rank>
                <Img src={cat.url} />
              </ImgContainer>
            ))
          }
        </Best>
        <Other>
          {
            cats.slice(3).map((cat, i) => (
              <ImgContainer key={cat.id}>
                <RankOther>{ i + 4 }</RankOther>
                <ImgOther src={cat.url} />
              </ImgContainer>
            ))
          }
        </Other>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  state: {
    cats: state.cat.cats,
    scores: state.score.scores,
  }
});

const mapDispatchToProps = (dispatch) => ({
  getAllCats: () => dispatch(catActions.getCat()),
  getAllScores: () => dispatch(scoreActions.getScore()),
})

const Score = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScoreComponent);

export default Score;

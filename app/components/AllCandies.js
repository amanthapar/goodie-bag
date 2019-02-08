import { connect } from 'react-redux';
import { fetchCandies } from '../reducers/index';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AllCandies extends Component {
  componentDidMount() {
    this.props.fetchCandies();
  }
  render() {
    console.log(this.props.allCandies);
    return (
      <div>
        {this.props.allCandies.map(candy => {
          return (
            <ul key={candy.id}>
              <li>{candy.name}</li>
              <Link to={`/candies/${candy.id}`}>
                <img src={candy.imageUrl} />
              </Link>
            </ul>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allCandies: state.allCandies,
  };
};

const mapDispatch = dispatch => {
  return {
    fetchCandies: () => dispatch(fetchCandies()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatch
)(AllCandies);

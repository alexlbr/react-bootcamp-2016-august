import React, { Component } from 'react';
import PhotoList from "../components/PhotoList";
import * as actions from '../actions/Photos';
import { connect } from 'react-redux';
import fetchPhotos from '../api/Photos'
import es6promise from 'es6-promise';
import 'isomorphic-fetch';
es6promise.polyfill();

class PhotoListContainer extends Component {

  constructor(props) {
      super(props);
  }
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    return <PhotoList {...this.props} photos={this.props.photos}/>
  }
}

export default connect(
  (state) => ({ photos: state.photos }),
  { fetchPhotos: actions.getPhotos }
)(PhotoListContainer)

import React, { Component } from 'react';
import PhotoList from "../components/PhotoList";
import * as actions from '../actions/Photos';
import { connect } from 'react-redux';
import fetchPhotos from '../api/Photos'
import es6promise from 'es6-promise';
import 'isomorphic-fetch';
import { Container } from 'redix';

es6promise.polyfill();

class PhotoListContainer extends Container {

  constructor(props) {
      super(props);
      /* In order to remove the render method in the container we need to specify:
        1. What presentational component we want to render by using this.setComponent
        2. Which props we want to pass down to the presentational component by calling
           this.setProps({...})
      */
      this.setComponent(PhotoList);
      this.setProps({
        photos: props.photos
      })
  }
  componentDidMount() {
    /*
      Because we extend from redix Container this.props.fetchPhotos is
      set as this.fetchProps as well. By calling this.fetchPhotos we can easly
      mock this function later in the tests;
    */
    this.fetchPhotos();
  }
  /*
  The render method is not needed anymore because the redix Container will
  take care of the render method (heads-up you must setComponent and setProps
  in the constructor
  render() {
    return <PhotoList {...this.props} photos={this.props.photos}/>
  }
  */
}

PhotoListContainer.propTypes = {
  fetchPhotos: React.PropTypes.func.isRequired
}

export default connect(
  (state) => ({ photos: state.photos }),
  { fetchPhotos: actions.getPhotos }
)(PhotoListContainer)

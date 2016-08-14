import React from 'react';
import { createStore } from 'redux';
import { hookProps, DependencyInjector as DI } from 'redix';
import { expect } from 'chai';
import { mount } from 'enzyme';
import PhotoListContainer from '../../../src/containers/PhotoListContainer';
import sinon from 'sinon';
import TestUtils from "react-addons-test-utils";

describe('PhotoList container using DependencyInjector and TestUtils', () => {
    it(`should fetch the photos from the api and
    pass them down to the child component`, () => {

      const test = {};
      const FakePhotoList = hookProps(test);
      const injectedFunctions = {
        fetchPhotos: sinon.spy(() => (Promise.resolve())),
      };
      const photos = [{
          "albumId": 1,
          "id": 1,
          "title": "accusamus beatae ad facilis cum similique qui sunt",
          "url": "http://placehold.it/600/92c952",
          "thumbnailUrl": "http://placehold.it/150/30ac17",
      }];
      const store = createStore(()=>{});
      sinon.stub(store, 'getState').returns({ photos });

      TestUtils.renderIntoDocument(
        <DI store={store}>
          <PhotoListContainer
            functions={injectedFunctions}
            component={FakePhotoList}
          />
        </DI>
      );

      expect(injectedFunctions.fetchPhotos.called).to.be.true;
      expect(test.props.photos).to.be.deep.equal(photos);
    })
})

describe('PhotoList container using ezyme and mount context', () => {
    it(`should fetch the photos from the api and
    pass them down to the child component`, () => {

      const test = {};
      const FakePhotoList = hookProps(test);
      const injectedFunctions = {
        fetchPhotos: sinon.spy(() => (Promise.resolve())),
      };
      const photos = [{
          "albumId": 1,
          "id": 1,
          "title": "accusamus beatae ad facilis cum similique qui sunt",
          "url": "http://placehold.it/600/92c952",
          "thumbnailUrl": "http://placehold.it/150/30ac17",
      }];
      const store = createStore(()=>{});
      sinon.stub(store, 'getState').returns({ photos });

      const container = mount(
        <PhotoListContainer
          functions={injectedFunctions}
          component={FakePhotoList}
        />,
        { context: { store }}
      );

      expect(injectedFunctions.fetchPhotos.called).to.be.true;
      expect(test.props.photos).to.be.deep.equal(photos);
    })
})

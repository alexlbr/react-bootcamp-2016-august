/*
import React from 'react';
import { mount, shallow} from 'enzyme';
import PhotoList from '../../../src/components/PhotoList';
import PhotoListContainer from '../../../src/containers/PhotoListContainer';
import * as api from '../../../src/api/Photos';
import sinon from 'sinon';

describe('PhotoList component', () => {
    it('should display PhotoList', () => {
      const router = { push: sinon.spy() };
      const photos = [
        {
        "id": 1,
        "thumbnailUrl": "http://placehold.it/150"
        }
      ]
      const wrapper = shallow(
        <PhotoList photos={photos}/>
      );
    })
})
describe('PhotoList container', () => {
    it('should fetch the photos from the api', () => {
      const photos = [
        {
        "id": 1,
        "thumbnailUrl": "http://placehold.it/150"
        }
      ]
      sinon.stub(api, 'fetchPhotos').returns(new Promise(function () {}));
      const wrapper = mount(
        <PhotoListContainer photos={photos}/>
      );
      sinon.assert.calledWith(api, null);
    })
})
*/

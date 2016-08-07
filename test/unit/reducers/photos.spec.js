import { expect } from 'chai';
import photos from '../../../src/reducers/Photos';
import { RECEIVE_PHOTOS } from '../../../src/actions/photos';


describe('The photos reducer function', () => {

  it('should return the default value when initialised', () => {
    const action = {
      type: RECEIVE_PHOTOS,
      photos: []
    };
    const stateAfter = photos(undefined, action);
    expect(typeof stateAfter).to.be.equal('object');
  });

});
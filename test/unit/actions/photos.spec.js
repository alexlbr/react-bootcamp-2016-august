import { expect } from 'chai';
import { receivePhotos, RECEIVE_PHOTOS } from '../../../src/actions/Photos';

describe('The receivePhotos action creator function', () => {

  it('should return an action with the correct type property', () => {
    const action = receivePhotos();
    expect(action.type).to.equal(RECEIVE_PHOTOS);
  });

  it('should assign the correct data properties', () => {
    const photos = [1,2,3];
    const action = receivePhotos(photos);
    expect(action.photos).to.equal(photos);
  });

});
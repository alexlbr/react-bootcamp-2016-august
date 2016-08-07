export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
import fetchPhotos from '../api/Photos'

export const getPhotos = () => (
    fetchPhotos().then(response => response.json())
    .then(data => (
      {
        type: RECEIVE_PHOTOS,
        photos: data.slice(0, 50)
      }
    ))
    .catch(console.log)
)

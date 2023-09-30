import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const userResponse = results[1];
      console.log('firstName:', userResponse.body.firstName);
      console.log('lastName:', userResponse.body.lastName);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}

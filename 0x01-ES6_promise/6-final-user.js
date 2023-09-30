import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const resultsArray = [];

  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          resultsArray.push({ status: result.status, value: result.value });
        } else {
          resultsArray.push({ status: result.status, value: `Error: ${result.reason.message}` });
        }
      });
      return resultsArray;
    });
}

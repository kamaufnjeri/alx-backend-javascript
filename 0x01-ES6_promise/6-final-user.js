import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const promises = [];

  const userRes = signUpUser(firstName, lastName)
    .then((result) => ({ status: 'fulfilled', value: result }))
    .catch((error) => ({
      status: 'rejected',
      value: error,
    }));

  const photoRes = uploadPhoto(filename)
    .then((result) => ({ status: 'fulfilled', value: result }))
    .catch((error) => ({
      status: 'rejected',
      value: error,
    }));

  promises.push(userRes, photoRes);

  return Promise.all(promises);
}

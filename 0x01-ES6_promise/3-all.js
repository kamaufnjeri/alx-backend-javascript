import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoRes, userRes] = results;
      console.log(`${photoRes.body} ${userRes.firstName} ${userRes.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}

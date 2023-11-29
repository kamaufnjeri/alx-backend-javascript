export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (lastName && firstName) {
      resolve({ firstName, lastName });
    } else {
      reject();
    }
  });
}

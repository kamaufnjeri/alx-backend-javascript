export default function uploadPhoto(filename) {
  return Promise.resolve(new Error(`${filename} cannot be processed`));
}

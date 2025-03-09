// export function getImageUrl(imageId, size = 's') {
//   return (
//     'https://i.imgur.com/' +
//     imageId +
//     size +
//     '.jpg'
//   );
// }

//One4

export function getImageUrl(person) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}

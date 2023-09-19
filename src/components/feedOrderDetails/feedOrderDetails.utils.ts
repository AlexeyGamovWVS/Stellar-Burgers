export function countIngedientsInOrder(id, array) {
  return array.filter((item) => item._id === id).length;
}

export function getUniqArrayItems(arr) {
  return [...new Set(arr)];
}

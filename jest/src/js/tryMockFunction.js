export default function myForEach(items, callback) {
  for (let i = 0; i < items.length; i += 1) {
    callback(items[i]);
  }
}

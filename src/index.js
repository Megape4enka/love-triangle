/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    counter = 0;
    i = 0 ;
    for (i = 0; i < preferences.length; i++) {
      el = preferences[i];
      el (el > preferences. length) {
        continue;
      }
       elNext = preferences[el-1];
      if (elNext == 1+i) {
        continue;
      }
    return counter;
};

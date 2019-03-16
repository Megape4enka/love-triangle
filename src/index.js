/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let triangle = 0;
  preferences.unshift(0);
    
  for(let i = 1; i < preferences.length; i++) {
      
    let first = preferences[i]; //2
    let second = preferences[first]; //3
    let third = preferences[second]; //1

    if (i === third && first != third) {
      triangle ++
    }
  }
  return Math.round(triangle / 3);
};

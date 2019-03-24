module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    let result = 0;
    for (let i = 0; i < preferences.length; i++) {
      let triangleOne = preferences[i] - 1;
      if (triangleOne === i) continue;
      let triangleTwo = preferences[triangleOne] - 1;
      if (triangleTwo === triangleOne) continue;
      let triangleThree = preferences[triangleTwo] - 1;
      if (triangleThree === triangleTwo) continue;
      if (triangleThree === i) {
          result++;
      }
    }
    return result/3;
};

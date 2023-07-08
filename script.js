const blocks = [3, 1, 4, 5, 9, 2, 6, 8];
const distance = longestDistance(blocks);

function longestDistance(blocks) {
  let maxDistance = 0;

  for (let i = 0; i < blocks.length; i++) {
    let currentDistance = 1;

    for (let j = i + 1; j < blocks.length; j++) {
      if (blocks[j] >= blocks[i] && currentDistance < j - i + 1) {
        currentDistance = j - i + 1;
      }
    }

    if (maxDistance < currentDistance) {
      maxDistance = currentDistance;
    }
  }

  return maxDistance;
}

console.log("Longest distance between frogs:", distance);

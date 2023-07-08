function findLongestDistance(blocks) {
  let left = 0;
  let right = 0;
  let maxDistance = 0;

  while (right < blocks.length) {
    if (blocks[right] >= blocks[left]) {
      const distance = right - left + 1;
      maxDistance = Math.max(maxDistance, distance);
    } else {
      left = right;
    }

    right++;
  }

  return maxDistance - 1; // Subtract 1 to exclude the starting block
}

function longestFrogDistance(blocks) {
  const firstFrogDistance = findLongestDistance(blocks);
  const reversedBlocks = blocks.slice().reverse(); // Reverse the array
  const secondFrogDistance = findLongestDistance(reversedBlocks);

  return Math.max(firstFrogDistance, secondFrogDistance);
}

const blocks = [2, 6, 8, 5];
const longestDistance = longestFrogDistance(blocks);
console.log("Longest distance between the two frogs:", longestDistance);

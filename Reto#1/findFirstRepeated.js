const giftIds = [2, 1, 3, 5, 3, 2]

function findFirstRepeated(gifts) {
    const seen = new Set();
    for (let x of gifts) {
      if (seen.has(x)) {
        return x;
      }
      seen.add(x);
    }
    return -1;
  }
  console.log(findFirstRepeated(giftIds));
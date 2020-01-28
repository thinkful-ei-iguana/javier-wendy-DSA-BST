/* eslint-disable quotes */
const BST = require("./BST");

const numBST = new BST();

function main() {
  numBST.insert(4, 4);
  numBST.insert(3, 3);
  numBST.insert(2, 2);
  numBST.insert(1, 1);
  numBST.insert(6, 6);
  numBST.insert(9, 9);
  numBST.insert(5, 5);
  numBST.insert(7, 7);
  console.log(numBST.levelCount());
  return numBST;
}

main();

function alphaTree() {
  const alphaBST = new BST();
  alphaBST.insert("E", "E");
  alphaBST.insert("A", "A");
  alphaBST.insert("S", "S");
  alphaBST.insert("Y", "Y");
  alphaBST.insert("Q", "Q");
  alphaBST.insert("U", "U");
  alphaBST.insert("E", "E");
  alphaBST.insert("S", "S");
  alphaBST.insert("T", "T");
  alphaBST.insert("I", "I");
  alphaBST.insert("O", "O");
  alphaBST.insert("N", "N");
  console.log(alphaBST);
}

// alphaTree();

// What's my job?
//sums up all values to the left of t and to the right and at t - sums all values in tree
//runtime is O(log(n))
function tree(t) {
  if (!t) {
    // console.log("null");
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

// tree(numBST);

function isBST(tree) {
  let root = tree.value;

  if (!root) {
    return 0;
  }
  if (tree.left) {
    isBST(tree.left);
  } else {
    return false;
  }

  if (tree.right) {
    isBST(tree.right);
  } else {
    return false;
  }
}

console.log(numBST.levelCount());

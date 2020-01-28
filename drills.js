/* eslint-disable quotes */
const BST = require("./BST");

/* Draw a BST
  Input: 3,1,4,6,9,2,5,7

          3
        /  \
      1     4
       \      \
        2      6
             /   \
           5      9
                /
               7 


   Draw the BST with the keys - E A S Y Q U E S T I O N
   
            E
           / \
          A   S
             /  \
            Q     Y
          /  \
         I    T
          \
            O
          /
        N
*/

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
  // console.log(numBST.levelCount());
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

alphaTree();

// What's my job?
//sums up all values to the left of t and to the right and at t - sums all values in tree
//runtime is O(log(n))
function tree(t) {
  if (!t) {
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
  if (tree.left && tree.right) {
    if (
      tree.left.key < tree.left.parent &&
      tree.right.key > tree.right.parent
    ) {
      isBST(tree.left);
      isBST(tree.right);

      console.log("i'm a tree");
      return true;
    } else {
      console.log("i'm not a tree");
      return false;
    }
  } else {
    console.log("i'm not a tree");
    return false;
  }
}

// isBST(numBST);

//3rd largest

//given a BST, find the largest node (furthest right), then check the parent's left. if this.left is a value, then the 3rd largest node would be the parent. Otherwise (if there is no left node, recursively move to that parent and check its left. )

function thirdInLine(tree) {
  let root = tree.value;
  if (!root) {
    return 0;
  }
  let max = tree._findMax();
  console.log(max.parent);
  if (max.parent) {
    if (!this.left) {
      let newMax = thirdInLine(tree);
      console.log(newMax);
    }
  }
}

// thirdInLine(numBST);

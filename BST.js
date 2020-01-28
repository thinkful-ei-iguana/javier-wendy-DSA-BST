/* eslint-disable quotes */
class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    //if no root value - insert key, value at root
    if (!this.key) {
      this.key = key;
      this.value = value;
    }
    //if key of item to insesrt is less than the root, then traverse left
    else if (key < this.key) {
      //if the left node is available, then insert the item with key, value, and parent as this
      if (!this.left) {
        this.left = new BinarySearchTree(key, value, this);
      }
      // recursively insert left when the left node is not available
      else {
        this.left.insert(key, value);
      }
    } else {
      //same logic for the right side of the tree
      if (!this.right) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    //if item is found at root, return the value at the key
    if (this.key === key) {
      return this.value;
    }
    // if left traversal needed and left child is not null, then recursively check its left and right children until you find the item
    else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error("key error");
    }
  }

  remove(key) {
    // if removing this.key, then also check left and right children. if they are not null, then find the smallest value on the right side. Can also find the largest value on the left side. Set key and value to those of the replacement AND recursively remove the replacement's key.
    if (this.key === key) {
      if (this.left && this.right) {
        const replacement = this.right._findMin();
        this.key = replacement.key;
        this.value = replacement.value;
        replacement.remove(replacement.key);
      }
      //scenario for node with only left child, replace node with left child
      else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      }
      // no children to promote
      else {
        this._replaceWith(null);
      }
    }
    //assess if left traversal needed - if left child is not null, then recursively call the remove method on the left child.
    else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error("Key error");
    }
  }

  _replaceWith(node) {
    // as long as the parent node has a value, and if this is equal to the parent's left node, then set the parent's left key to node we are sending it to replace existing item
    if (this.parent) {
      if (this === this.parent.left) {
        this.parent.left = node;
      } else if (this === this.parent.right) {
        this.parent.right = node;
      }
      // for nodes that are not null
      if (node) {
        node.parent = this.parent;
      }
    } else {
      // assuming no parent, node will be replaced as parent
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        //if nothing to replace, then key, value, left, right will be null
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    // if left node is available/null, return parent
    if (!this.left) {
      return this;
    }
    // recursively return the left's min as long as the left node is not null
    return this.left._findMin();
  }
}

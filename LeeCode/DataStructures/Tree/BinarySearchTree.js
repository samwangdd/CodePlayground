function defaultCompare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  // a必须等于b
  return 0;
}

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

// 树节点
class Node {
  constructor(key) {
    this.key = key; // 节点值
    this.left = null; // 左侧子节点，默认为null
    this.right = null; // 右侧子节点
  }
}

class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null; // 根节点
  }

  // 插入节点
  insert(key) {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }
  // 插入节点辅助函数
  insertNode(node, key) {
    // 插入的节点是否比当前节点小，如果是，则在左侧插入
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }
  // 中序遍历, LDR
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }
  inOrderTraverseNode(node, callback) {
    if (node) {
      // 对左子树递归调用
      this.inOrderTraverseNode(node.left, callback);
      // 左子树遍历完成，打印当前节点
      callback(node.key);
      // 然后对右子树递归
      this.inOrderTraverseNode(node.right, callback);
    }
  }
  // 前序遍历, DLR
  preOrderTraverse(cb) {
    this.preOrderTraverseNode(this.root, cb);
  }
  preOrderTraverseNode(node, cb) {
    if (node) {
      cb(node.key);
      this.preOrderTraverseNode(node.left, cb);
      this.preOrderTraverseNode(node.right, cb);
    }
  }
  // 后序遍历, LRD
  postOrderTraverse(cb) {
    this.postOrderTraverseNode(this.root, cb);
  }
  postOrderTraverseNode(node, cb) {
    if (node) {
      this.postOrderTraverseNode(node.left, cb);
      this.postOrderTraverseNode(node.right, cb);
      cb(node.key);
    }
  }
  // 搜索最小树节点
  min() {
    this.minNode(this.root);
  }
  minNode(node) {
    let current = node;
    while (current && current.left) {
      current = current.left;
    }
    return current;
  }
  // 搜索最大树节点
  max() {
    this.maxNode(this.root);
  }
  maxNode(node) {
    let current = node;
    while (current && current.right) {
      current = current.left;
    }
    return current;
  }
  // 搜索特定值
  search(key) {
    return this.searchNode(this.root, key);
  }
  searchNode(node, key) {
    if (!node) {
      return false;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }
}

const printNode = (value) => console.log('value :>> ', value);

const tree = new BinarySearchTree();
tree.insert(11);
// console.log('tree :>> ', tree);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);

// tree.inOrderTraverse(printNode);
// tree.preOrderTraverse(printNode);
tree.postOrderTraverse(printNode);
console.log('tree.search :>> ', tree.search(3));
console.log('tree2 :>> ', tree);

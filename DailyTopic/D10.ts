/**
 * https://github.com/jinxin0112/daily-topic/issues/10
 * 树结构点击子节点，向上寻找他的父节点，以及父节点的兄弟节点
 * 如：点击5-1,返回1， 2， 3， 4， 5
 */

interface ITreeNode {
  id: string;
  children: ITreeNode[];
}

const findParentAndSiblings = (
  root: ITreeNode[] = [],
  parentSiblings: ITreeNode[],
  target: string
) => {
  for (const node of root) {
    if (node.id === target) {
      return parentSiblings;
    }

    const nextParentSiblingNodes = [...root];

    for (const node of root) {
      if (node.children?.length) {
        const nextParentSiblings = findParentAndSiblings(
          node.children,
          nextParentSiblingNodes,
          target
        );
        if (nextParentSiblings !== null) {
          return nextParentSiblings;
        }
      }
    }
  }
  return null;
};

class TreeNode {
  public children: TreeNode[] = [];
  constructor(public name: string, public parent: string) {}
  pushChildren(nodes: TreeNode) {
    this.children = [...this.children, nodes];
  }
}

function genTree(root: TreeNode, deep: number, seq: number = 3) {
  if (deep === 0) {
    return;
  }
  // const [d] = root.name.split('-');
  const rootName = root.name;
  for (let i = 0; i < seq; i++) {
    let current = new TreeNode(`${rootName}-${i}`, root.name);
    genTree(current, deep - 1);
    root.pushChildren(current);
  }
  return root;
}

function logTreeNode(tree: TreeNode, parentSiblings: TreeNode[] | null, target: string) {
  tree?.children.forEach((item) => {
    if (item.name === target) {
      parentSiblings?.forEach((item) => console.log('item.name :>> ', item.name));
    } else {
      const [_, ...nextParentSiblings] = tree.children;
      logTreeNode(item, nextParentSiblings, target);
    }
  });
}

const myTree = genTree(new TreeNode('0-0', null), 3);
console.log('myTree :>> ', myTree);
console.log('myTree[0] :>> ', myTree[0]);
console.log('myTree[0]?.children :>> ', myTree[0]?.children);

/**
 * https://github.com/jinxin0112/daily-topic/issues/10
 * 树结构点击子节点，向上寻找他的父节点，以及父节点的兄弟节点
 * 如：点击5-1,返回1， 2， 3， 4， 5
 */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var _a;
var findParentAndSiblings = function (root, parentSiblings, target) {
    var _a;
    if (root === void 0) { root = []; }
    for (var _i = 0, root_1 = root; _i < root_1.length; _i++) {
        var node = root_1[_i];
        if (node.id === target) {
            return parentSiblings;
        }
        var nextParentSiblingNodes = __spreadArrays(root);
        for (var _b = 0, root_2 = root; _b < root_2.length; _b++) {
            var node_1 = root_2[_b];
            if ((_a = node_1.children) === null || _a === void 0 ? void 0 : _a.length) {
                var nextParentSiblings = findParentAndSiblings(node_1.children, nextParentSiblingNodes, target);
                if (nextParentSiblings !== null) {
                    return nextParentSiblings;
                }
            }
        }
    }
    return null;
};
var TreeNode = /** @class */ (function () {
    function TreeNode(name, parent) {
        this.name = name;
        this.parent = parent;
        this.children = [];
    }
    TreeNode.prototype.pushChildren = function (nodes) {
        this.children = __spreadArrays(this.children, [nodes]);
    };
    return TreeNode;
}());
function genTree(root, deep, seq) {
    if (seq === void 0) { seq = 3; }
    if (deep === 0) {
        return;
    }
    // const [d] = root.name.split('-');
    var rootName = root.name;
    for (var i = 0; i < seq; i++) {
        var current = new TreeNode(rootName + "-" + i, root.name);
        genTree(current, deep - 1);
        root.pushChildren(current);
    }
    return root;
}
var myTree = genTree(new TreeNode('0-0', null), 3);
console.log('myTree :>> ', myTree);
console.log('myTree[0] :>> ', myTree[0]);
console.log('myTree[0]?.children :>> ', (_a = myTree[0]) === null || _a === void 0 ? void 0 : _a.children);

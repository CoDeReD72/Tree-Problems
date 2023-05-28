type TreeNode = {
  id: number;
  name: string;
  children: TreeNode[];
};

// Create a tree
// Create a tree
const rootNode: TreeNode = {
  id: 0,
  name: "root",
  children: [
    {
      id: 1,
      name: "child1",
      children: [
        { id: 3, name: "child3", children: [] },
        { id: 4, name: "child4", children: [{ id: 7, name: "child7", children: [] }] },
      ],
    },
    {
      id: 2,
      name: "child2",
      children: [
        { id: 5, name: "child5", children: [] },
        { id: 6, name: "child6", children: [{ id: 8, name: "child8", children: [] }] },
      ],
    },
    {
      id: 9,
      name: "child9",
      children: [
        { id: 10, name: "child10", children: [] },
        { id: 11, name: "child11", children: [] },
        { id: 12, name: "child12", children: [] },
      ],
    },
  ],
};

// Hashmap approach
function hashmap(node: TreeNode): TreeNode[] {
  const map = new Map<number, TreeNode>();
  const stack = [node];
  let sum = 0;

  while (stack.length > 0) {
    const currNode = stack.pop()!;
    map.set(currNode.id, currNode);

    if (currNode.children.length > 0) {
      currNode.children.forEach((child: TreeNode) => {
        stack.push(child);
      });
    }
  }

  const nodes: TreeNode[] = Array.from(map.values());
  nodes.sort((a: TreeNode, b: TreeNode) => b.children.length - a.children.length);

  return nodes;
}

// Pretty print the tree nodes
function prettyPrint(nodes: TreeNode[]) {
  nodes.forEach((node) => {
    console.log(`${node.name} (ID: ${node.id}) - Children: ${node.children.length}`);
  });
}

// Test
prettyPrint(hashmap(rootNode));

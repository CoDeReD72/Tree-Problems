export type TreeNode = {
  id: number;
  name: string;
  children: TreeNode[];
};

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
        { id: 4, name: "child4", children: [] },
      ],
    },
    {
      id: 2,
      name: "child2",
      children: [
        { id: 5, name: "child5", children: [] },
        { id: 6, name: "child6", children: [] },
      ],
    },
  ],
};

// Recursive approach
function recursive(node: TreeNode): number {
  if (node.children.length === 0) {
    return node.id;
  } else {
    return (
      node.id +
      node.children.map((child) => recursive(child)).reduce((a, b) => a + b, 0)
    );
  }
}


// Hashmap approach

function hashmap(node: TreeNode): number {
  const map = new Map<number, TreeNode>();
  const stack = [node];
  let sum = 0;

  while (stack.length > 0) {
    const node = stack.pop()!;
    sum += node.id;

    if (node.children.length > 0) {
      node.children.forEach((child) => {
        stack.push(child);
      });
    }
  }

  return sum;
}

// Test
console.log(recursive(rootNode));
console.log(hashmap(rootNode));

// Output
// 21
type treeNode = {
    id: number,
    name: string,
    children: treeNode[],
  }

  // Create a tree

  
  const rootNode: treeNode = {
    id: 0,
    name: "root",
    children: [{id: 1, name: "child1", children: [{id: 3, name: "child3", children:[]}, {id: 4, name: "child4", children:[]} ]}, {id: 2, name: "child2", children: [{id: 5, name: "child5", children:[]}, {id: 6, name: "child6", children:[]}]}]

  }

// Recursive approach

// Hashmap Approach
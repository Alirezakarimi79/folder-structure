import { DataType } from '../../dto';

export const onAddItem = (
  tree: DataType[],
  targetPath: string,
  newNode: DataType,
): { updatedTree: DataType[]; error?: string } => {
  let itemAdded = false;
  let duplicateFound = false;

  const updatedTree = tree.map((node) => {
    const fullPath = targetPath === '' ? node.name : targetPath;

    const isTarget =
      fullPath === node.name ||
      fullPath.endsWith('/' + node.name) ||
      ('/' + fullPath).endsWith('/' + node.name);

    if (isTarget && node.type === 'folder') {
      const alreadyExists = node.children?.some(
        (child) => child.name === newNode.name && child.type === newNode.type,
      );

      if (alreadyExists) {
        duplicateFound = true;
        return node;
      }

      itemAdded = true;

      return {
        ...node,
        children: node.children ? [...node.children, newNode] : [newNode],
      };
    }

    if (node.children && node.type === 'folder') {
      const result = onAddItem(node.children, targetPath, newNode);

      if (result.error) {
        duplicateFound = true;
      }

      if (result.updatedTree !== node.children) {
        return {
          ...node,
          children: result.updatedTree,
        };
      }
    }

    return node;
  });

  if (duplicateFound) {
    return { updatedTree: tree, error: 'This folder/file already existed' };
  }

  return { updatedTree, error: undefined };
};

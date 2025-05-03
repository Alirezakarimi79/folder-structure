import { DataType } from '../../dto';

export const onAddItem = (
  tree: DataType[],
  targetPath: string,
  newNode: DataType,
): DataType[] => {
  return tree.map((node) => {
    const isTarget =
      targetPath === '' ||
      targetPath === node.name ||
      targetPath.endsWith('/' + node.name);

    if (isTarget && node.type === 'folder') {
      return {
        ...node,
        children: node.children ? [...node.children, newNode] : [newNode],
      };
    }

    if (node.children && node.type === 'folder') {
      return {
        ...node,
        children: onAddItem(node.children, targetPath, newNode),
      };
    }

    return node;
  });
};

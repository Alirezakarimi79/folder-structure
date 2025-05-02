export type DataType = {
  name: string;
  type: 'folder' | 'file';
  children?: DataType[];
};

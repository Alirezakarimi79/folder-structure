import { DataType } from '../../dto';

export const mockData: DataType[] = [
  {
    name: 'root',
    type: 'folder',
    children: [
      {
        name: 'src',
        type: 'folder',
        children: [
          {
            name: 'components',
            type: 'folder',
            children: [
              {
                name: 'SideBar.tsx',
                type: 'file',
              },
              {
                name: 'Header.tsx',
                type: 'file',
              },
            ],
          },
          {
            name: 'App.ts',
            type: 'file',
          },
          {
            name: 'test.ts',
            type: 'file',
          },
          { name: 'data.json', type: 'file' },
          { name: 'index.js', type: 'file' },
          { name: 'style.css', type: 'file' },
        ],
      },
      {
        name: 'public',
        type: 'folder',
        children: [
          {
            name: 'index.html',
            type: 'file',
          },
          {
            name: 'style.css',
            type: 'file',
          },
        ],
      },
      { name: 'package.json', type: 'file' },
    ],
  },
];

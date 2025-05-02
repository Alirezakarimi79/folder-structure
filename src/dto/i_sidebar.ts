import { IApp } from './i_app.ts';
import { DataType } from './data.ts';

export interface ISidebar {
  handleSelectedFolder: (path: string) => void;
  selectedFolder: IApp;
  setSelectedFolder: (selectedFolder: IApp) => void;
}

export interface IAddFolderFile {
  setFolderStructure: (selectedFolder: DataType[]) => void;
  handleSelectedFolder: (path: string) => void;
  selectedFolder: IApp;
}

export interface IFileExplorer {
  folderStructure: DataType[];
  selectedFolder: IApp;
  setSelectedFolder: (selectedFolder: IApp) => void;
}

export interface IFileExplorerItem {
  item: DataType;
  parentPath: string;
  selectedFolder: IApp;
  setSelectedFolder: (selectedFolder: IApp) => void;
}

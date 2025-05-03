import { FC, useState } from 'react';

import { DataType, ISidebar } from '../../dto';
import { mockData } from '../../shared/mock-data';
import FileExplorer from '../file-explorer';
import AddFolderFile from '../add-folder-file';

const Sidebar: FC<ISidebar> = ({ selectedFolder, setSelectedFolder }) => {
  const [folderStructure, setFolderStructure] = useState<DataType[]>(mockData);

  return (
    <div
      className={
        'w-[500px] p-[1rem] bg-black opacity-90 text-white flex flex-col gap-4'
      }
    >
      <AddFolderFile
        setFolderStructure={setFolderStructure}
        selectedFolder={selectedFolder}
      />
      <FileExplorer
        folderStructure={folderStructure}
        selectedFolder={selectedFolder}
        setSelectedFolder={setSelectedFolder}
      />
    </div>
  );
};

export default Sidebar;

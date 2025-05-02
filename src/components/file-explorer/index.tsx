import { FC } from 'react';

import { IFileExplorer } from '../../dto';
import FileExplorerItem from './item.tsx';

const FileExplorer: FC<IFileExplorer> = ({
  folderStructure,
  selectedFolder,
  setSelectedFolder,
}) => {
  return (
    <div className={'flex flex-col'}>
      {folderStructure.map((item, index) => (
        <FileExplorerItem
          key={index}
          selectedFolder={selectedFolder}
          item={item}
          parentPath={''}
          setSelectedFolder={setSelectedFolder}
        />
      ))}
    </div>
  );
};

export default FileExplorer;

import { FC } from 'react';

import addFolder from '../../assets/add-folder.svg';
import addFile from '../../assets/add-file.svg';
import { DataType, IAddFolderFile } from '../../dto';
import { onAddItem } from './logic.ts';

const AddFolderFile: FC<IAddFolderFile> = ({
  setFolderStructure,
  selectedFolder,
  folderStructure,
}) => {
  const handleAddItem = (type: 'file' | 'folder') => {
    const name = prompt(`Enter ${type} name`);

    if (!name) return;

    const newNode: DataType = {
      name,
      type,
    };

    const { updatedTree, error } = onAddItem(
      folderStructure,
      selectedFolder.path,
      newNode,
    );

    if (error) {
      alert(error);
    } else {
      setFolderStructure(updatedTree);
    }
  };

  return (
    <div className={'flex flex-row gap-4 items-center justify-end'}>
      <img
        onClick={() => handleAddItem('file')}
        src={addFile}
        width={24}
        height={24}
        className={'cursor-pointer'}
        alt={'add file'}
      />
      <img
        onClick={() => handleAddItem('folder')}
        src={addFolder}
        width={24}
        height={24}
        className={'cursor-pointer'}
        alt={'add folder'}
      />
    </div>
  );
};

export default AddFolderFile;

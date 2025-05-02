import { FC } from 'react';

import addFolder from '../../assets/add-folder.svg';
import addFile from '../../assets/add-file.svg';
import { IAddFolderFile } from '../../dto';

const AddFolderFile: FC<IAddFolderFile> = ({
  setFolderStructure,
  handleSelectedFolder,
  selectedFolder,
}) => {
  return (
    <div className={'flex flex-row gap-4 items-center justify-end'}>
      <img
        src={addFile}
        width={24}
        height={24}
        className={'cursor-pointer'}
        alt={'add file'}
      />
      <img
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

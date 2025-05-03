import { FC, memo, useMemo, useState } from 'react';

import arrowRight from '../../assets/arrow-right.svg';
import arrowDown from '../../assets/arrow-down.svg';
import { IFileExplorerItem } from '../../dto';
import trash from '../../assets/delete.svg';
import edit from '../../assets/edit.svg';

const FileExplorerItem: FC<IFileExplorerItem> = ({
  item,
  parentPath,
  selectedFolder,
  setSelectedFolder,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);

  const fullPath = `${parentPath}/${item.name}`;

  const handleClick = () => {
    if (item.type === 'folder') {
      setExpanded(!expanded);
    }
    setSelectedFolder({
      path: fullPath,
      type: item.type,
      name: item.name,
    });
  };

  const sortedChildren = useMemo(
    () =>
      item.children?.sort((a, b) => {
        if (a.type !== b.type) return a.type === 'folder' ? -1 : 1;
        return a.name.localeCompare(b.name);
      }),
    [item.children],
  );

  return (
    <div className="flex flex-col gap-1 ms-4">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`flex flex-row items-center justify-between cursor-pointer ${
          item.type === 'file' ? 'ms-6' : ''
        }`}
        onClick={handleClick}
      >
        <div className={'flex flex-row gap-1 items-center'}>
          {item.type === 'folder' && (
            <img
              src={expanded ? arrowDown : arrowRight}
              width={16}
              height={16}
              alt="arrow"
            />
          )}
          <span>{item.name}</span>
        </div>
        {hover && (
          <div className={'flex flex-row gap-1 items-center justify-end'}>
            <img src={trash} width={16} height={16} alt="delete" />
            <img src={edit} width={16} height={16} alt="edit" />
          </div>
        )}
      </div>

      {expanded &&
        sortedChildren?.map((child) => (
          <FileExplorerItem
            key={`${fullPath}/${child.name}`}
            item={child}
            parentPath={fullPath}
            selectedFolder={selectedFolder}
            setSelectedFolder={setSelectedFolder}
          />
        ))}
    </div>
  );
};

export default memo(FileExplorerItem);

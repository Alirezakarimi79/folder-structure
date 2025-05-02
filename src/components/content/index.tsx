import { FC } from 'react';

import { IContent } from '../../dto';
import arrowRight from '../../assets/arrow-right.svg';

export const Content: FC<IContent> = ({ selectedFolder }) => {
  const pathParts = selectedFolder.path.split('/').filter(Boolean);

  return (
    <div className="w-full bg-black opacity-85 text-white p-[1rem]">
      <div className="flex flex-row gap-1 items-center">
        {pathParts.map((item, index) => (
          <div key={index} className="flex flex-row gap-1 items-center">
            <span>{item}</span>
            {index < pathParts.length - 1 && (
              <img src={arrowRight} alt="arrow right" width={24} height={24} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;

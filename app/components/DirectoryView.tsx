import { useState } from 'react';

import type { File } from '~/data/files';
import { ExpandedIcon, CollapsedIcon } from './Icons';
import RenderFile from './RenderFile';

type DirectoryViewProps = {
  file: File;
  depth: number;
  setContent?: (v: string) => {};
};

const DirectoryView = ({ file, depth, setContent }: DirectoryViewProps) => {
  const [isExpanded, toggleExpand] = useState(false);
  return (
    <div>
      <button
        className='flex items-center p-1 pl-0'
        key={file.name}
        onClick={() => toggleExpand((v) => !v)}
        style={{ marginLeft: depth * 12 }}
      >
        {isExpanded ? <ExpandedIcon /> : <CollapsedIcon />}

        <p className='pl-4 text-left'>{file.name}</p>
      </button>
      <div style={{ display: isExpanded ? 'block' : 'none' }}>
        {Array.isArray(file.contents) &&
          file.contents.map((file: File) => (
            <RenderFile
              key={file.name}
              file={file}
              depth={depth + 1}
              setContent={setContent}
            />
          ))}
      </div>
    </div>
  );
};

export default DirectoryView;

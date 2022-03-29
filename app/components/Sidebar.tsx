import React, { useState } from 'react';

import { ExpandedIcon, CollapsedIcon } from './Icons';
import FileView from './FileView';
import type { File } from '~/data/files';

const renderFile = (file: File, depth = 0, setContent) => {
  if (file.type === 'file') {
    return (
      <FileView
        onClick={() => setContent(file.contents)}
        key={file.name}
        name={file.name}
        depth={depth}
      />
    );
  } else
    return (
      <DirectoryView
        setContent={setContent}
        key={file.name}
        file={file}
        depth={depth}
      />
    );
};

type DirectoryViewProps = {
  setContent: () => {};
  file: File;
  depth: number;
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
          file.contents.map((file: File) =>
            renderFile(file, depth + 1, setContent)
          )}
      </div>
    </div>
  );
};

type SidebarProps = {
  files: File[];
  setContent: () => {};
};

function Sidebar({ files, setContent }: SidebarProps) {
  return (
    <div className='w-1/5 bg-indigo-600 p-4 text-white'>
      {files.map((file: File) => renderFile(file, 0, setContent))}
    </div>
  );
}

export default Sidebar;

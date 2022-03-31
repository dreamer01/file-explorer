import type { File } from '~/data/files';
import RenderFile from './RenderFile';

type SidebarProps = {
  files: File[];
  setContent: () => {};
};

function Sidebar({ files, setContent }: SidebarProps) {
  return (
    <div className='w-1/5 bg-indigo-600 p-4 text-white'>
      {files.map((file: File) => (
        <RenderFile
          key={file.name}
          file={file}
          depth={0}
          setContent={setContent}
        />
      ))}
    </div>
  );
}

export default Sidebar;

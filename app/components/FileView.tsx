import { FileIcon } from './Icons';

type FileViewProps = {
  onClick: () => void;
  name: string;
  depth: number;
};

const FileView = ({ name, depth, onClick }: FileViewProps) => {
  return (
    <button
      onClick={onClick}
      key={name}
      className='flex items-center p-1 pl-0'
      style={{ marginLeft: depth * 12 }}
    >
      <FileIcon />
      <p className='pl-4 text-left'>{name}</p>
    </button>
  );
};

export default FileView;

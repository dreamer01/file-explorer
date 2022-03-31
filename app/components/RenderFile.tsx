import FileView from './FileView';
import DirectoryView from './DirectoryView';
import type { File } from '~/data/files';

type RenderFileProps = {
  file: File;
  depth: number;
  setContent?: (v: string) => {};
};

function RenderFile({ file, depth, setContent }: RenderFileProps) {
  if (file.type === 'file') {
    return (
      <FileView
        key={file.name}
        name={file.name}
        depth={depth}
        onClick={() => {
          if (setContent && typeof file.contents === 'string')
            setContent(file.contents);
        }}
      />
    );
  } else
    return (
      <DirectoryView
        key={file.name}
        file={file}
        depth={depth}
        setContent={setContent}
      />
    );
}

export default RenderFile;

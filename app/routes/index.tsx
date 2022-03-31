import { useState } from 'react';
import { json, useLoaderData, Link } from 'remix';

import type { File } from '~/data/files';
import RenderFile from '~/components/RenderFile';
import { getFiles } from '~/data/files';

type LoaderData = {
  files: Awaited<ReturnType<typeof getFiles>>;
};

export const loader = async () => {
  return json<LoaderData>({
    files: await getFiles(),
  });
};

export default function Explorer() {
  const { files } = useLoaderData();
  const [content, setContent] = useState('');

  return (
    <main className='flex flex-col flex-1 h-screen '>
      <header className='flex p-2 items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
        <h1 className='text-left text-2xl text-white p-4 font-bold'>
          File Explorer
        </h1>
        <Link to='about' title='About'>
          <p className='text-xl text-white p-4 font-bold'>About</p>
        </Link>
      </header>
      <div className='flex flex-1'>
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
        <pre className='flex flex-1 p-4 bg-indigo-200 m-0'>{content}</pre>
      </div>
      <footer className='p-2 text-sm text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'>
        &copy;{' '}
        <a className='underline' href='https://stud2design.in'>
          Stud2Design
        </a>{' '}
        | Made with love and Remix.
      </footer>
    </main>
  );
}

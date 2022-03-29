import { Link } from 'remix';

function About() {
  return (
    <main className='flex flex-col flex-1 h-screen '>
      <header className='flex p-2 items-center justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>
        <h1 className='text-left text-2xl text-white p-4 font-bold'>About</h1>
        <Link to='/' title='About'>
          <p className='text-xl text-white p-4 font-bold'>Home</p>
        </Link>
      </header>
      <div className='flex flex-col flex-1'>
        <section className='p-5'>
          <p>
            Created this just to practice recursive rendering of the React
            components.
          </p>
          <br />
          <p>
            <strong>Idea:</strong>
            <a href='https://www.joshwcomeau.com/react/file-structure/'>
              https://www.joshwcomeau.com/react/file-structure/
            </a>
          </p>
        </section>
        <section className='p-5 mt-1'>
          Also this is my first project in Remix. The About page was also
          created just to have multiple routes page and I can test navigation 😉
        </section>
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

export default About;

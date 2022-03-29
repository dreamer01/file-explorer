const CODE_APP = `
// This is the root component in
// the React application.
import Header from '../Header';
import Widget from '../Widget';

function App() {
  return (
    <>
      <Header title="My Application" />
      <main>
        <Widget />
      </main>
    </>
  );
}

export default App;
`.trim();

const CODE_APP_INDEX = `
/*
  Forward all exports.
  This pattern is explained further below.
*/
export * from './App';
export { default } from './App';
`.trim();

const CODE_WIDGET_CONSTANTS = `
/*
  Constants used exclusively by
  the files in this directory.
*/
`.trim();

const CODE_WIDGET_HELPERS = `
/*
  Helper functions used exclusively
  by the files in this directory.
*/
`.trim();

const CODE_WIDGET = `
import * as CONSTANTS from './Widget.constants';
import { someHelperFn} from './Widget.helpers';
import useStuff from './use-stuff.hook';
import WidgetChild from './WidgetChild';

function Widget() {
  /*
    Pretend there's a complex React
    component here!
  */
}

export default Widget;
`.trim();

const CODE_USE_WIDGET = `
function useStuff() {
  /*
    Some custom hook used exclusively
    by this component.
  */
}

export default useStuff;
`.trim();

const CODE_WIDGET_CHILD = `
function WidgetChild() {
  /*
    A sub-component used exclusively by
    Widget.js (or other components in
    this directory).
  */
}

export default WidgetChild;
`.trim();

const CODE_WIDGET_INDEX = CODE_APP_INDEX.replace(/App/g, 'Widget');

const CODE_HEADER = `
/*
  An example of a simpler
  React component
*/

function Header({ title }) {
  /* Header stuff here */
}

export default Header;
`.trim();

const CODE_HEADER_INDEX = CODE_APP_INDEX.replace(/App/g, 'Header');

const CODE_HELPERS_ANIMATION = `
/*
  Generalized helper functions
  related to animations.
*/
`.trim();

const CODE_HELPERS_AUTH = `
/*
  Generalized helper functions related
  to authentication and authorization.
*/
`.trim();

const CODE_HOOKS_BOOP = `
/*
  A hook that adds a playful “boop” effect.

  Learn more here:
  https://www.joshwcomeau.com/react/boop/
*/
`.trim();

const CODE_HOOKS_BOUNDING = `
/*
  A hook that calculates the bounding box for
  a specified HTML element. Full source shown
  later in this blog post!
*/
`.trim();

const CODE_CONSTANTS = `
/*
  Color themes, breakpoints, public
  keys, and other app-wide constants.
*/
`.trim();

const CODE_UTILS = `
/*
  Utility functions, like the ones you'd
  get from a library like lodash.
*/
`.trim();

const PACKAGE_JSON = `
{
  "name": "Example project",
  "version": "1.0.0",
  "author": "Josh Comeau",
  "scripts": {
    "do:stuff": "echo 'hi there!'"
  },
  "dependencies": {
    "some-pkg": "^1.2.3",
    "some-other-pkg": "^4.5.6",
  }
}
`.trim();

const README = `
# Hello World!

This is an example project, meant to
show how files are structured.
`.trim();

const FILES = [
  {
    name: 'src',
    type: 'directory',
    contents: [
      {
        name: 'components',
        type: 'directory',
        contents: [
          {
            name: 'App',
            type: 'directory',
            contents: [
              {
                name: 'App.js',
                type: 'file',
                contents: CODE_APP,
              },
              {
                name: 'index.js',
                type: 'file',
                contents: CODE_APP_INDEX,
              },
            ],
          },
          {
            name: 'Header',
            type: 'directory',
            contents: [
              {
                name: 'Header.js',
                type: 'file',
                contents: CODE_HEADER,
              },
              {
                name: 'index.js',
                type: 'file',
                contents: CODE_HEADER_INDEX,
              },
            ],
          },
          {
            name: 'Widget',
            type: 'directory',
            contents: [
              {
                name: 'Widget.constants.js',
                type: 'file',
                contents: CODE_WIDGET_CONSTANTS,
              },
              {
                name: 'Widget.helpers.js',
                type: 'file',
                contents: CODE_WIDGET_HELPERS,
              },
              {
                name: 'Widget.js',
                type: 'file',
                contents: CODE_WIDGET,
              },
              {
                name: 'WidgetChild.js',
                type: 'file',
                contents: CODE_WIDGET_CHILD,
              },
              {
                name: 'index.js',
                type: 'file',
                contents: CODE_WIDGET_INDEX,
              },
              {
                name: 'use-stuff.hook.js',
                type: 'file',
                contents: CODE_USE_WIDGET,
              },
            ],
          },
        ],
      },
      {
        name: 'helpers',
        type: 'directory',
        contents: [
          {
            name: 'animation.helpers.js',
            type: 'file',
            contents: CODE_HELPERS_ANIMATION,
          },
          {
            name: 'auth.helpers.js',
            type: 'file',
            contents: CODE_HELPERS_AUTH,
          },
        ],
      },
      {
        name: 'hooks',
        type: 'directory',
        contents: [
          {
            name: 'use-boop.hook.js',
            type: 'file',
            contents: CODE_HOOKS_BOOP,
          },
          {
            name: 'use-bounding-box.hook.js',
            type: 'file',
            contents: CODE_HOOKS_BOUNDING,
          },
        ],
      },
      {
        name: 'constants.js',
        type: 'file',
        contents: CODE_CONSTANTS,
      },
      {
        name: 'utils.js',
        type: 'file',
        contents: CODE_UTILS,
      },
    ],
  },
  {
    name: 'package.json',
    type: 'file',
    contents: PACKAGE_JSON,
  },
  {
    name: 'README.md',
    type: 'file',
    contents: README,
  },
];

export default FILES;

export type File = {
  name: string;
  type: string;
  contents: string | File[];
};

export async function getFiles(): Promise<Array<File>> {
  return FILES;
}

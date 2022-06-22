import * as React from 'react';
import './style.css';

export default function Nav() {
  React.useEffect(() => {
    if (window.localStorage.getItem('theme') === null) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches === true) {
        window.localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark');
      } else {
        window.localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark');
      }
    } else if (window.localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark');
    }
  }, []);

  const changeTheme = () => {
    if (window.localStorage.getItem('theme') === 'light') {
      document.body.classList.add('dark');
      window.localStorage.removeItem('theme');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('remove');
      window.localStorage.removeItem('theme');
      window.localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav>
      <a href="/"><h1>Where in the world?</h1></a>
      <button
        tabIndex={0}
        onClick={() => changeTheme()}
        type="button"
      >
        <div>
          {window.localStorage.getItem('theme') === 'light' ? <i className="fas fa-moon" />
            : <i className="far fa-moon" />}
        </div>
        <p>Dark Mode</p>
      </button>
    </nav>
  );
}

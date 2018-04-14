import React from 'react';

class NavB extends React.Component {
  render() {
    const pages = ['home', 'mood', 'all', 'edits', 'rtw', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}

export default NavB;

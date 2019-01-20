import React from 'react';

import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__inner">
          Source code on{' '}
          <a href="https://github.com/alik0211/youtube-meta">GitHub</a>
        </div>
      </div>
    );
  }
}

export default Footer;

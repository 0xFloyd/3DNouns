import React from 'react';

const Footer = (props) => {
  return (
    <div>
      {!props.isDesktop && props.optionsVisibility === 'block' ? null : (
        <div className="credit-container">
          <span style={{ marginRight: '20px' }}>
            <a href="https://nouns.wtf">nouns.wtf</a> ❤️ by{' '}
            <a href="https://twitter.com/0xFloyd">0xFloyd</a> and{' '}
            <a href="https://twitter.com/coralorca">CoralOrca</a>
          </span>
        </div>
      )}
    </div>
  );
};

export default Footer;

import React from 'react';
import config from '../../config';
export default function SideFooter() {
  return (
    <footer>
      <ul className="items">
        <li>
          <h3>You Can Find Me Here</h3>
          <ul className="icons">
            {config.socialLinks.map(social => {
              const { icon, name, url } = social;
              return (
                <li key={url}>
                  <a href={url} className={`icon ${icon}`}>
                    <span className="label">{name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </footer>
  );
}

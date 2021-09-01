import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0">Smell</Link>
        </li>
        <li>
          <Link to="#0">Ya</Link>
        </li>
        <li>
          <Link to="#0">Later!</Link>
        </li>
        <li>
          <Link to="#0">-Gary Oak</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{fontWeight: match? 'bold' : 'normal', fontSize: match? 'large' : 'medium', color: match? 'white' : 'goldenrod', textDecoration: match ? "none" : "none" }}
          // style={{fontWeight: match? 'bold' : 'normal', fontSize: match? 'large' : 'medium', color: match? 'white' : 'goldenrod', textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }
  
export default CustomLink;
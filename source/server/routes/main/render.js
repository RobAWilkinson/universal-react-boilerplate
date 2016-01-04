import React from 'react';
import reactDom from 'react-dom/server';
import App from 'shared/components/app';

const render = reactDom.renderToStaticMarkup;


const createDOM = (props) => {
  return render(
    <App { ...props }></App>
  );
};

export default createDOM;

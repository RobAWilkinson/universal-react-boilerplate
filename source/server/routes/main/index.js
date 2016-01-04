import settings from 'server/settings';

import render from './render.js';
import renderLayout from './render-layout.js';

const title = settings.TITLE;

const initialProps = {
  title: title,
  names: ['rob','travis','rouzbeh']
};

const rootMarkup = render(initialProps);

// This will be rendered into the HTML to pass data to the client.
const payload = `
  var payload = {
    title: '${ initialProps.title }'
  };
`;

export default (req, res) => {
  res.send(renderLayout({ title, rootMarkup, payload}));
};

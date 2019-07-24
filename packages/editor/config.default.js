import Quill from 'quill';

import BlotFormatter from 'quill-blot-formatter';
import MagicUrl from 'quill-magic-url';
import { ImageDrop } from 'quill-image-drop-module';

import 'quill/dist/quill.snow.css';

Quill.register({
  'modules/blotFormatter': BlotFormatter,
  'modules/imageDrop': ImageDrop,
  'modules/magicUrl': MagicUrl,
}, true);

export const myToolbar = {
  container: [
    [{ header: '1' }],
    ['bold'],
    ['blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    ['link', 'image', 'video'],
  ],
  handlers: {},
};

const blotFormatter = {
  overlay: {
    style: {
      outline: '1px solid red',
    },
  },
};

export default {
  theme: 'snow',
  boundary: document.body,
  modules: {
    toolbar: myToolbar,
    blotFormatter,
    imageDrop: true,
    magicUrl: true,
  },
  readOnly: false,
};

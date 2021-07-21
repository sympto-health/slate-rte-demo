/* @flow */
import type { SlateNode } from 'slate-rte';
import { slateHeader, slateFooter } from './slateFixtures';

export const initialSlate = [
  {
    type: 'paragraph',
    children: [
      {
        text: 'This is a title with a ',
        'font-size': {
          value: 22,
        },
        bold: true,
        code: true,
        underline: true,
        italic: true,
      },
      {
        type: 'variable',
        variableName: 'foo',
        children: [
          {
            text: '',
            'font-size': {
              value: 22,
            },
            bold: true,
            code: true,
            underline: true,
            italic: true,
            variable: {
              variableName: 'foo',
            },
          },
        ],
        text: null,
      },
      {
        'font-size': {
          value: 22,
        },
        bold: true,
        code: true,
        underline: true,
        italic: true,
        text: ' variable',
      },
    ],
  },
];

export const slateHTML = `${slateHeader()}<div style="padding-bottom:1rem" ><span ><span ><span style="font-size:1.375em"><u><em><code><span data-type="bold" style="font-weight:700"><span >This is a title with a </span></span></code></em></u></span></span></span><span  data-variable="foo" class="d-inline-block" contenteditable="false"><span ><span data-variable-leaf="foo" ><span style="font-size:1.375em"><u><em><code><span data-type="bold" style="font-weight:700">3</span></code></em></u></span></span></span></span><span ><span ><span style="font-size:1.375em"><u><em><code><span data-type="bold" style="font-weight:700"><span > variable</span></span></code></em></u></span></span></span></div>${slateFooter}`;

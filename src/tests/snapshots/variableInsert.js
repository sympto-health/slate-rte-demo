/* @flow */
import type { SlateNode } from 'slate-rte';
import { slateHeader, slateFooter } from './slateFixtures';

export const initialSlate = [
  ({
    type: 'background-color',
    color: '#f78da7',
    children: [
      {
        text: '',
      },
    ],
  }: SlateNode),
  ({
    type: 'center-align',
    children: [
      {
        text: 'hi ',
        'font-size': {
          value: 22,
        },
        'text-color': {
          color: '#2980b9',
        },
        'font-weight': {
          value: 600,
        },
        bold: true,
      },
      {
        type: 'variable',
        variableName: 'foo',
        children: [
          {
            bold: true,
            text: '',
            'font-size': {
              value: 22,
            },
            'text-color': {
              color: '#2980b9',
            },
            'font-weight': {
              value: 600,
            },
            variable: {
              variableName: 'foo',
            },
          },
        ],
        text: null,
      },
      {
        text: ' thats cool',
        bold: true,
      },
    ],
  }: SlateNode),
];

export const slateHTML = `${slateHeader('#f78da7')}<div data-color="#f78da7" style="background-color:#f78da7"></div><div  style="text-align:center"><span ><span ><span data-color="#2980b9" style="color:#2980b9"><span style="font-weight:600"><span style="font-size:1.375em"><span data-type="bold" style="font-weight:700"><span >hi </span></span></span></span></span></span></span><span  data-variable="foo" class="d-inline-block" contenteditable="false"><span ><span data-variable-leaf="foo" ><span data-color="#2980b9" style="color:#2980b9"><span style="font-weight:600"><span style="font-size:1.375em"><span data-type="bold" style="font-weight:700">bar</span></span></span></span></span></span></span><span ><span ><span data-type="bold" style="font-weight:700"><span > thats cool</span></span></span></span></div>${slateFooter}`;

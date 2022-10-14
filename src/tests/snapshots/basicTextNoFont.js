/* @flow */
import { slateHeader, slateFooter } from './slateFixtures';
import type { SlateNode } from 'slate-rte';

export const initialSlate: Array<SlateNode> = [
  ({
    type: 'background-color',
    color: '#ecf0f1',
    children: [
      {
        text: '',
      },
    ],
    borderColor: null,
  }: SlateNode),
  ({
    type: 'center-align',
    children: [
      {
        bold: true,
        text: 'd',
        'text-color': {
          color: '#2980b9',
        },
        'font-weight': {
          value: 600,
        },
      },
    ],
  }: SlateNode),
];

// min font size will still be 34 even though empty text has no font size
// b/c empty text is ignored
export const initialSlateWithEmptyText: Array<SlateNode> = [
  ({
    type: 'background-color',
    color: '#ecf0f1',
    children: [
      {
        text: '       ',
      },
    ],
    borderColor: null,
  }: SlateNode),
  ({
    type: 'center-align',
    children: [
      {
        bold: true,
        text: 'd',
        'text-color': {
          color: '#2980b9',
        },
        'font-size': {
       	  value: 34,
        },
        'font-weight': {
          value: 600,
        },
      },
    ],
  }: SlateNode),
];

// min font size will still be 16 even since  text foo has no font size
export const initialSlateWithNoEmptyText: Array<SlateNode> = [
  ({
    type: 'background-color',
    color: '#ecf0f1',
    children: [
      {
        text: '  foo  ',
      },
    ],
    borderColor: null,
  }: SlateNode),
  ({
    type: 'center-align',
    children: [
      {
        bold: true,
        text: 'd',
        'text-color': {
          color: '#2980b9',
        },
        'font-size': {
       	  value: 34,
        },
        'font-weight': {
          value: 600,
        },
      },
    ],
  }: SlateNode),
];

export const expectedHTML = `${slateHeader('#ecf0f1')}<div data-color="#ecf0f1" style="background-color:#ecf0f1"></div><div  style="text-align:center"><span ><span ><span data-color="#2980b9" style="color:#2980b9"><span style="font-weight:600"><span data-type="bold" style="font-weight:700"><span >d</span></span></span></span></span></span></div>${slateFooter}`;

/* @flow */
import { slateHeader, slateFooter } from './slateFixtures';
import type { SlateNode } from 'slate-rte';
import type { SlateContentItem } from '../../SlateTypes';

export const initialSlate: Array<SlateNode> = [
  ({
    type: 'background-color',
    color: '#ecf0f1',
    children: [
      {
        text: '',
      },
    ],
  }: SlateContentItem),
  ({
    type: 'center-align',
    children: [
      {
        bold: true,
        text: 'd',
        'font-size': {
          value: 22,
        },
        'text-color': {
          color: '#2980b9',
        },
        'font-weight': {
          value: 600,
        },
      },
    ],
  }: SlateContentItem),
];

export const expectedHTML = `${slateHeader('#ecf0f1')}<div data-color="#ecf0f1" style="background-color:#ecf0f1"></div><div  style="text-align:center"><span ><span ><span data-color="#2980b9" style="color:#2980b9"><span style="font-weight:600"><span style="font-size:1.375em"><span data-type="bold" style="font-weight:700"><span >d</span></span></span></span></span></span></span></div>${slateFooter}`;

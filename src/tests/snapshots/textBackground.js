/* @flow */
import type { SlateNode } from 'slate-rte';
import type { SlateContentItem } from '../../SlateTypes';
import { slateHeader, slateFooter } from './slateFixtures';

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
        text: 'DASH DISABILITY ',
        'font-size': {
          value: 16,
        },
        'font-weight': {
          value: 300,
        },
      },
    ],
  }: SlateContentItem),
  ({
    type: 'center-align',
    children: [
      {
        text: '& SYMPTOM SCORE',
        'font-size': {
          value: 16,
        },
        'font-weight': {
          value: 300,
        },
      },
    ],
  }: SlateContentItem),
  ({
    type: 'center-align',
    children: [
      {
        bold: true,
        text: '0.83',
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

// with data-color attribute
export const parsedBackground = `${slateHeader('#ecf0f1')}<div data-color="#ecf0f1" style="background-color:#ecf0f1"></div><div  style="text-align:center"><span ><span ><span style="font-weight:300"><span style="font-size:1em"><span >DASH DISABILITY </span></span></span></span></span></div><div  style="text-align:center"><span ><span ><span style="font-weight:300"><span style="font-size:1em"><span >&amp; SYMPTOM SCORE</span></span></span></span></span></div><div  style="text-align:center"><span ><span ><span data-color="#2980b9" style="color:#2980b9"><span style="font-weight:600"><span style="font-size:1.375em"><span data-type="bold" style="font-weight:700"><span >0.83</span></span></span></span></span></span></span></div>${slateFooter}`;

// ensure that colors still work even without data-color attribute
export const deprecatedParsedBackground = `${slateHeader('#ecf0f1')}<div style="background-color:#ecf0f1"></div><div  style="text-align:center"><span ><span ><span style="font-weight:300"><span style="font-size:1em"><span >DASH DISABILITY </span></span></span></span></span></div><div  style="text-align:center"><span ><span ><span style="font-weight:300"><span style="font-size:1em"><span >&amp; SYMPTOM SCORE</span></span></span></span></span></div><div  style="text-align:center"><span ><span ><span style="color:#2980b9"><span style="font-weight:600"><span style="font-size:1.375em"><span data-type="bold" style="font-weight:700"><span >0.83</span></span></span></span></span></span></span></div>${slateFooter}`;

export const deprecatedSlateResp: Array<SlateNode> = [
  ({
    type: 'background-color',
    children: [
      {
        text: '',
      },
    ],
    color: 'rgb(236, 240, 241)',
  }: SlateNode),
  initialSlate[1],
  initialSlate[2],
  ({
    type: 'center-align',
    children: [
      {
        bold: true,
        text: '0.83',
        'font-size': {
          value: 22,
        },
        'text-color': {
          color: 'rgb(41, 128, 185)',
        },
        'font-weight': {
          value: 600,
        },
      },
    ],
  }: SlateContentItem),
];

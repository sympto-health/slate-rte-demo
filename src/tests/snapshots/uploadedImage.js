/* @flow */
import type { SlateNode } from 'slate-rte';
import { slateHeader, slateFooter } from './slateFixtures';

export const initialSlate = [
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
      },
      {
        type: 'image',
        text: null,
        children: [
          {
            text: ' ',
          },
        ],
        fileData: {
          type: 'Image ID',
          id: 'd2ae024b-5105-4967-82d5-b0c6d2911105',
        },
      },
      {
        text: '',
      },
    ],
  }: SlateNode),
];


export const slateHTML = `${slateHeader('#ecf0f1')}<div data-color="#ecf0f1" style="background-color:#ecf0f1"></div><div  style="text-align:center"><span ><span ><span data-color="#2980b9" style="color:#2980b9"><span style="font-weight:600"><span style="font-size:1.375em"><span data-type="bold" style="font-weight:700"><span  >﻿</span></span></span></span></span></span></span><div    data-type="image" class="image-item d-inline-block"><img data-image-id="d2ae024b-5105-4967-82d5-b0c6d2911105" alt="Uploaded Image" src="a" style="height:auto" class="d-inline-block w-100"/></div><span ><span ><span  >﻿<br/></span></span></span></div>${slateFooter}`;

/* @flow */
import { slateHeader, slateFooter } from './slateFixtures';
import type { SlateNode } from 'slate-rte';
import type { SlateContentItem } from '../../SlateTypes';

export const initialSlate: Array<SlateNode> = [
  ({
    type: 'paragraph',
    children: [
      {
        text: '',
        'font-size': {
          value: 22,
        },
      },
    ],
  }: SlateNode),
];

export const expectedHTML = `${slateHeader()}<div style="padding-bottom:1rem" ><span ><span ><span style="font-size:1.375em"><span  >﻿<br/></span></span></span></span></div>${slateFooter}`;

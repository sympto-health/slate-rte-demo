/* @flow */
import { parseAsHTML, extractVariables, extractMinMaxFontSize, deserializeHTMLString } from 'slate-rte';
import { extractVariables as extractVariables2 } from 'slate-rte/build/utils';
import * as textBackgroundSnapshots from './snapshots/textBackground';
import * as uploadedImageSnapshots from './snapshots/uploadedImage';
import * as variableInsert from './snapshots/variableInsert';
import * as basicText from './snapshots/basicText';
import * as emptyText from './snapshots/emptyText';
import * as variableWithFormatting from './snapshots/variableWithFormatting';
import * as basicTextNoFont from './snapshots/basicTextNoFont';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useLayoutEffect: jest.requireActual('react').useEffect,
}));

describe('slate editor', () => {
  it('correctly renders empty text', async () => {
    let counter = 0;
    expect(await parseAsHTML(
      emptyText.initialSlate,
      {},
      async () => {
        counter += 1;
        return { url: 'a' };
      },
    )).toEqual(emptyText.expectedHTML);
    expect(deserializeHTMLString(emptyText.expectedHTML))
      .toEqual(emptyText.initialSlate);
    expect(counter).toEqual(0);
    expect(extractVariables(emptyText.initialSlate))
      .toEqual([]);
    expect(extractMinMaxFontSize(emptyText.initialSlate))
      .toEqual({ maxFontSize: 22, minFontSize: 22 });
  });

  it('basic text with a background color', async () => {
    let counter = 0;
    expect(await parseAsHTML(
      basicText.initialSlate,
      {},
      async () => {
        counter += 1;
        return { url: 'a' };
      },
    )).toEqual(basicText.expectedHTML);
    expect(deserializeHTMLString(basicText.expectedHTML))
      .toEqual(basicText.initialSlate);
    expect(counter).toEqual(0);
        expect(extractVariables(basicText.initialSlate))
      .toEqual([]);
    expect(extractMinMaxFontSize(emptyText.initialSlate))
      .toEqual({ maxFontSize: 22, minFontSize: 22 });
  });

  it('text background with data attributes', async () => {
    let counter = 0;
    expect(await parseAsHTML(
      textBackgroundSnapshots.initialSlate,
      {},
      async () => {
        counter += 1;
        return { url: 'a' };
      },
    )).toEqual(textBackgroundSnapshots.parsedBackground);
    expect(deserializeHTMLString(textBackgroundSnapshots.parsedBackground))
      .toEqual(textBackgroundSnapshots.initialSlate);
    expect(counter).toEqual(0);
    expect(extractVariables(textBackgroundSnapshots.initialSlate))
      .toEqual([]);
    expect(extractMinMaxFontSize(textBackgroundSnapshots.initialSlate))
      .toEqual({ minFontSize: 16, maxFontSize: 22 }); 
  });

  it('text background w/o data attributes', () => {
    expect(deserializeHTMLString(textBackgroundSnapshots.deprecatedParsedBackground))
      .toEqual(textBackgroundSnapshots.deprecatedSlateResp);
  });

  it('uploaded image by id', async () => {
    let counter = 0;
    expect(await parseAsHTML(
      uploadedImageSnapshots.initialSlate,
      {},
      async () => {
        counter += 1;
        return { url: 'a' };
      },
    )).toEqual(uploadedImageSnapshots.slateHTML);
    expect(counter).toEqual(1);
    expect(deserializeHTMLString(uploadedImageSnapshots.slateHTML))
      .toEqual(uploadedImageSnapshots.initialSlate);
    expect(extractVariables(uploadedImageSnapshots.initialSlate))
      .toEqual([]);
    expect(extractMinMaxFontSize(uploadedImageSnapshots.initialSlate))
      .toEqual({ maxFontSize: 22, minFontSize: 22 }); 
  });

  it('extracts font size even with no font size', async () => {
    let counter = 0;
    expect(await parseAsHTML(
      basicTextNoFont.initialSlate,
      {},
      async () => {
        counter += 1;
        return { url: 'a' };
      },
    )).toEqual(basicTextNoFont.expectedHTML);
    expect(deserializeHTMLString(basicTextNoFont.expectedHTML))
      .toEqual(basicTextNoFont.initialSlate);
    expect(counter).toEqual(0);
    expect(extractVariables(basicTextNoFont.initialSlate))
      .toEqual([]);
    expect(extractMinMaxFontSize(basicTextNoFont.initialSlate))
      .toEqual({ maxFontSize: 16, minFontSize: 16 });
    expect(extractMinMaxFontSize(basicTextNoFont.initialSlateWithEmptyText))
      .toEqual({ maxFontSize: 34, minFontSize: 34 });
    expect(extractMinMaxFontSize(basicTextNoFont.initialSlateWithNoEmptyText))
      .toEqual({ maxFontSize: 34, minFontSize: 16 });
  });

  it('renders variables', async () => {
    let counter = 0;
    expect(await parseAsHTML(
      variableInsert.initialSlate,
      { foo: 'bar' },
      async () => {
        counter += 1;
        return { url: 'a' };
      },
    )).toEqual(variableInsert.slateHTML);
    expect(deserializeHTMLString(variableInsert.slateHTML))
      .toEqual(variableInsert.initialSlate);
    expect(counter).toEqual(0);
    expect(extractVariables(variableInsert.initialSlate))
      .toEqual(['foo']);
    expect(extractMinMaxFontSize(variableInsert.initialSlate))
      .toEqual({ maxFontSize: 22, minFontSize: 16 });
  });

  it('returns the same values when double parsed', async () => {
    const deserializedHTML = deserializeHTMLString(variableInsert.slateHTML);
    expect(deserializeHTMLString(await parseAsHTML(
      deserializedHTML,
      { foo: 'bar' },
      async () => {
        return { url: 'a' };
      },
    ))).toEqual(deserializedHTML);
  });

  it('variables with formatting', async () => {
    let counter = 0;
    expect(await parseAsHTML(
      variableWithFormatting.initialSlate,
      { foo: '3' },
      async () => {
        counter += 1;
        return { url: 'a' };
      },
    )).toEqual(variableWithFormatting.slateHTML);
    expect(deserializeHTMLString(variableWithFormatting.slateHTML))
      .toEqual(variableWithFormatting.initialSlate);
    expect(counter).toEqual(0);
    expect(extractVariables(variableInsert.initialSlate))
      .toEqual(['foo']);
    expect(extractVariables2(variableInsert.initialSlate))
      .toEqual(['foo']);
  });
});

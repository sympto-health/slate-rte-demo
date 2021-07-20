/* @flow */

export const slateHeader = (backgroundColor: ?string) => (
  `<div class="SlateRTE d-flex flex-column justify-content-start text-left position-relative read-only p-3" style="${backgroundColor ? `background-color:${backgroundColor};` : ''}font-size:1em"><div data-gramm="false" spellcheck="false" autoCorrect="false" autoCapitalize="false"   style="position:relative;outline:none;white-space:pre-wrap;word-wrap:break-word">`
);
export const slateFooter = '</div></div>';

"use-strict";

export const allowedTags = [
  "html",
  "body",
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "section",
  "div",
  "span",
  "img",
];

export const nonTextTags = [
  "style",
  "script",
  "textarea",
  "noscript",
  "html",
  "body",
  "div",
  "span",
  "h1"
];

export const cleanHtmlCss = `
	h1, h2 {
		font-weight: bold;
		margin-bottom: 5px;
		letter-spacing: .05em
	}
	h1 {
		font-size: 1.5em;
	}
	h2 {
		font-size: 1em;
	}
	h3 {
		font-size: 0.7em;
	}
	h4 {
		font-size: 0.5em;
	}
	p {
		letter-spacing: .03em;
	}
`;

export const defaultHtmlCss = `
	body {
		color: #2a2a2a;
		font-family: sans-serif, normal, San Francisco;
	}
	h1 {
		border-bottom-width: 1px;
		border-color: #ccc;
		padding-bottom: 3px;
		border-bottom-style:solid;
		font-size: 1.6em;
		font-weight: bold;
		margin-bottom: 5px;
		letter-spacing: .05em;
	}
	p {
		letter-spacing: .03em;
	}
`;

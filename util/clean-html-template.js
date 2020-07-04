"use-strict";

export default function(css, title, body) {
  return `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          ${css}
        </style>
      </head>
      <body>
        ${title ? `<h1>${title}</h1>` : ''}
        ${body}
      </body>
    </html>
  `;
}

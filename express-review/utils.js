function format(name, mood, coffeePreference) {
  return `${name} | ${mood} | ${coffeePreference}`;
}

function layout(body) {
  return `
    <html>
      <head>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>${body}</body>
    </html>
  `;
}

module.exports = { format, layout };

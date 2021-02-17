# js-fun

```
Group members:
<email1>
<email2>
...
```

Write a function that:
- retrieves the colors from the COLORS endpoint
- filters the returned colors by:
  - name contains string
  - hex code
  - it contains a complementary color whose name contains a string
  - it contains a complementary color whose hex code equals a given hex code
  
  Examples:
  - give me all the colors that contain 'Blue' in their name
  - give me all the colors with hex code '9FAC58'
  - give me all the colors that have a complementary color whose name contains 'Blue'
  - give me all the colors that have a complementary color whose hex = '9FAC58'
 
```JS
// Example
const result = fetchColors({
  name: 'Almond',
});

// should return 
{
  "hex": "EFDECD",
  "name": "Almond",
  ...
};
```

- Only ES6 syntax allowed (convert any non ES6 syntax to ES6)
- Provide documentation in the code to make it easy to follow
- Feel free to add more unit tests

Commands for running:
- `npm start` runs `index.js`
- `npm test` runs tests in `main.test.js`

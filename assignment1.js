const http = require('http');

const style = `
.user-list {
    list-style: none;
}
.user-item {
    padding: 5px 15px;
    margin: 3px 0;
    background-color: #eee;
}

.user-item:nth-child(even) {
    background-color: #ddd;
}

`;


const server = http.createServer((req, res) => {
  const url = req.url;
  const greet = '<h1>Welcome! Check <a href="./users">/users</a> for a list of users</h1>';
  let usersGreet = null;
  if (url === '/users') {
    let userList = `
        <ul class="user-list">
            <li class="user-item">Jim</li>
            <li class="user-item">Bob</li>
            <li class="user-item">Jim-Bob</li>
        </ul>
    `;
    usersGreet = `<h1>Users:</h1>${userList}`;
  }
    res.write(`
    <html>
        <head>
          <title>Welcome</title>
          <style>${style}</style> 
        </head>
        <body>
            ${usersGreet ? 
                usersGreet
             :
             greet }
            
        </body>
    </html>
    `);
    return res.end();
});

server.listen(3000);

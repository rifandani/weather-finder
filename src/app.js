const express = require('express');
const app = express();
const router = require('./router');

// method dari express() sebagai middleware / fungsi yg dijalankan ketika ada request sebelum request tersebut dijalankan fungsi yg lain
// config umum
app.use(
  express.urlencoded({
    extended: false,
  }),
);
app.use(express.json());
app.use(express.static('public'));
// using router file
app.use('/', router);
// using view engine instead of .html
app.set('view engine', 'hbs');
app.set('views', 'views');

let port = process.env.PORT;
if (port == null || port == '') {
  port = 8000;
}
app.listen(port, () => {
  console.log('Server berjalan di port 3000');
});

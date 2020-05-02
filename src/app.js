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
// using view engine instead of .html
app.set('view engine', 'hbs');
app.set('views', 'views');
// using router file
app.use('/', router);

app.listen(3000, () => {
  console.log('Server berjalan di port 3000');
});


import express from 'express';

const app = express();
const router = express.Router();

app.set('view engine', 'pug');

app.use('/', express.static('public'));
app.use('/externals', express.static('bower_components'));

app.use(router);

router.get('/', (req, res) => {
  res.render('index');
});

export default app;

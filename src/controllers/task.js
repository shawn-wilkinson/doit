import express from 'express';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  //task index
});

router.get('/new', (req, res) => {
  //render 'create' form
  res.render('tasks/new');
});

router.post('/', (req, res) => {
  //create a new task
});

var express = require('express');
var router = express.Router();
let Hobby = require('../model/hobby');

const TITLE = "Hobbies Page";

/* GET home page. */
router.get('/', (req, res) => {
  Hobby.find({}, (err, hobbies) => {
    res.render('index', {
      title: TITLE,
      hobbies
    });
  });
});

router.post('/', (req, res) => {
  let hobby = new Hobby(req.body);
  hobby.save((err) => {
    if (err) { console.log(err); return; }
    res.redirect('/');
  });
});

router.get('/:id', (req, res) => {
  Hobby.findById(req.params.id, (err, hobby) => {
    if (err) { console.log(err); return; }
    res.render('details', {
      title: "Details",
      hobby
    });
  })
});

router.put('/:id', (req, res) => {
  Hobby.findByIdAndUpdate(req.params.id, req.body, (err) => {
    if (err) { console.log(err); return; }
    res.redirect(`/${req.params.id}`);
  });
});

router.delete('/:id', (req, res) => {
  Hobby.findByIdAndDelete(req.params.id, (err) => {
    if (err) { console.log(err); return; }
    res.redirect('/');
  });
});

module.exports = router;

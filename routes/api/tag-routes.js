const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll()
    .then(data => res.json(data))
    .catch(err => res.status(500).json)
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(data => res.json(data))
  .catch(err => res.status(400).json(err))
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then(newData => res.json(newData))
  .catch(err => {
    res.status(400).json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(data => {
    res.status(200).json({
      data: data,
      message: 'Tag Updated'
    })
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      res.json({
        data: data,
        message: 'Tag Deleted'
      })
    })
    .catch(err => res.status(400).json(err))
});

module.exports = router;

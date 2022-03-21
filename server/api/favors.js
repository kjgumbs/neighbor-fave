const router = require('express').Router();
const {
  models: { Favor, User, Bid },
} = require('../db');
module.exports = router;

// GET /api/favors
//  get all favors
router.get('/', async (req, res, next) => {
  try {
    const favors = await Favor.findAll({
      where: {
        status: true,
      },
      include: {
        model: User,
        include: { model: Bid },
      },
    });
    res.json(favors);
  } catch (err) {
    next(err);
  }
});

// GET /api/favors/:favorId
router.get('/:favorId', async (req, res, next) => {
  const favor = await Favor.findByPk(req.params.favorId, {
    include: [
      { model: User, as: 'Author' },
      { model: Bid, include: { model: Comment } },
    ],
  });
});
// OR, if not all of these nested "includes" work, then:
// get one favor, eager load its author.
// And query DB for all bids with this favorId and attach the array to this favor as "bids" property

// GET /api/favors/:favorId/bids    --- get all the bids for a favor
router.get('/:favorId/bids');

router.get('/:favorId/bids/:bidId/comments');

// POST /api/favors    --- add a favor
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Favor.create(req.body));
  } catch (error) {
    next(error);
  }
});

// PUT /api/favors/:favorId    --- edit a favor
router.put('/:favorId');

// DELETE /api/favors/:favorId    --- delete a favor
router.delete('/:favorId');

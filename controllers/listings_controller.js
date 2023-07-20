const express = require('express');
const listings = express.Router();
const Listing = require('../models/listing.js');
const listingSeedData = require('../models/seed.js');

// INDEX 
listings.get('/', (req, res) => {
  Listing.find()
    .then((foundListings) => {
      res.json(foundListings);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// CREATE 
listings.post('/', (req, res) => {
  console.log(req.body);
  if (!req.body.image_url) {
    req.body.image_url = undefined;
  }
  Listing.create(req.body)
    .then((createdListing) => {
      res.json(createdListing);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// EDIT
listings.put('/:id', (req, res) => {
  Listing.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedListing) => {
      if (!updatedListing) {
        return res.status(404).json({ error: 'Listing not found' });
      }
      res.json(updatedListing);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// DELETE
listings.delete('/:id', (req, res) => {
  Listing.findByIdAndDelete(req.params.id)
    .then((deletedListing) => {
      if (!deletedListing) {
        return res.status(404).json({ error: 'Listing not found' });
      }
      res.json(deletedListing);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// SHOW
listings.get('/:id', (req, res) => {
  Listing.findById(req.params.id)
    .then((foundListing) => {
      res.json(foundListing);
    })
    .catch((err) => {
      res.status(404).json({ error: err.message });
    });
});

// SEED ROUTE
listings.get('/data/seed', (req, res) => {
  Listing.insertMany(listingSeedData)
    .then((createdListings) => {
      res.json(createdListings);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = listings;

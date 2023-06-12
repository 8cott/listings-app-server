const express = require('express')
const listings = express.Router()
const Listing = require('../models/listing.js')
const listingSeedData = require('../models/seed.js')

// INDEX
listings.get('/', (req, res) => {
  Listing.find()
      .then(foundListings => {
          res.render('Index', {
              listings: Array.from(foundListings),
              title: 'Index Page'
          })
      })
})

// INDEX (JSON)
listings.get('/api', (req, res) => {
  Listing.find()
    .then(foundListings => {
      res.json(foundListings);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});


// CREATE
listings.post('/', (req, res) => {
    if(!req.body.image_url) {
        req.body.image_url = undefined
    }
    Listing.create(req.body)
    res.redirect('/listings')
})

// NEW
listings.get('/new', (req, res) => {
    res.render('new')
})

// UPDATE
listings.put('/:id', (req, res) => {
    Listing.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
      .then(updatedListing => {
        console.log(updatedListing) 
        res.redirect(`/listings/${req.params.id}`) 
      })
  })

// EDIT
listings.get('/:id/edit', (req, res) => {
  Listing.findById(req.params.id) 
    .then(foundListing => { 
      res.render('edit', {
        listing: foundListing
      })
    })
})

// DELETE
listings.delete('/:id', (req, res) => {
    Listing.findByIdAndDelete(req.params.id) 
      .then(deletedListing => { 
        res.status(303).redirect('/listings')
      })
  })

// SHOW
listings.get('/:id', (req, res) => {
  Listing.findById(req.params.id)
      .then(foundListing => {
          res.render('show', {
              listing: foundListing
          })
      })
      .catch(err => {
          res.send('404')
      })
})

// SEED ROUTE 
listings.get('/data/seed', (req, res) => {
    Listing.insertMany(listingSeedData)
      .then(createdListings => {
        res.redirect('/listings')
      })
  })  

module.exports = listings
import Book from '../models/book.js';
import Author from '../models/author.js';
import Genre from '../models/genre.js';
import BookInstance from '../models/bookinstance.js';
import async from 'async';

export function index(req, res) {
  async.parallel({
    book_count: function(callback) {
      Book.countDocuments({}, callback);
    },
    book_instance_count: function(callback) {
      BookInstance.countDocuments({}, callback);
    },
    book_instance_available_count: function(callback) {
      BookInstance.countDocuments({status: 'Available'}, callback);
    },
    author_count: function(callback) {
      Author.countDocuments({}, callback);
    },
    genre_count: function(callback) {
      Genre.countDocuments({}, callback);
    }
  }, function(err, results) {
    console.log(results);
    res.render('index', {
      title: 'Local Library Home',
      error: err,
      data: results
    });
  });
};

// Display list of all books.
export function book_list(req, res, next) {
  Book.find({}, 'title author')
    .sort({title: 1})
    .populate('author')
    .exec(function(err, list_books) {
      if (err) return next(err);
      res.render('book_list', {
        title: 'Book List',
        book_list: list_books
      })
    });
};

// Display detail page for a specific book.
export function book_detail(req, res, next) {
  async.parallel({
    book: function(callback) {
      Book.findById(req.params.id)
        .exec(callback);
    },
    book_instance: function(callback) {
      BookInstance.find({'book': req.params.id,})
        .exec(callback);
    },
  }, function(err, results) {
    if (err) return next(err);
    if (results.book === null) {
      const err = new Error('Book not found');
      err.status = 404;
      return next(err);
    }
    res.render('book_detail', {
      title: results.book.title,
      book: results.book,
      book_instances: results.book_instance
    });
  });
};

// Display book create form on GET.
export function book_create_get(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET');
};

// Handle book create on POST.
export function book_create_post(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};

// Display book delete form on GET.
export function book_delete_get(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET');
};

// Handle book delete on POST.
export function book_delete_post(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST');
};

// Display book update form on GET.
export function book_update_get(req, res) {
    res.send('NOT IMPLEMENTED: Book update GET');
};

// Handle book update on POST.
export function book_update_post(req, res) {
    res.send('NOT IMPLEMENTED: Book update POST');
};
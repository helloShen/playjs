import Book from '../models/book.js';

export function index(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all books.
export function book_list(req, res) {
    res.send('NOT IMPLEMENTED: Book list');
};

// Display detail page for a specific book.
export function book_detail(req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
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
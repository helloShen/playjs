import Author from '../models/author.js';

export function author_list(req, res, next) {
  Author.find()
    .exec(function(err, list_authors) {
      if (err) return next(err);
      res.render('author_list', {
        title: 'Author List',
        author_list: list_authors
      });
    });
}

export function author_detail(req, res) {
  res.send('Author detail');
}

export function author_create_get(req, res) {
  res.send('NOT IMPLEMENTED: Author create GET');
};

export function author_create_post(req, res) {
  res.send('NOT IMPLEMENTED: Author create POST');
};

export function author_delete_get(req, res) {
  res.send('NOT IMPLEMENTED: Author delete GET');
};

export function author_delete_post(req, res) {
  res.send('NOT IMPLEMENTED: Author delete POST');
};

export function author_update_get(req, res) {
  res.send('NOT IMPLEMENTED: Author update GET');
};

export function author_update_post(req, res) {
  res.send('NOT IMPLEMENTED: Author update POST');
};


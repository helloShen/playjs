import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  name: String,
});

GenreSchema.virtual('url').get(function() {
  return '/catalog/genre/' + this.name;
});

const Genre = mongoose.model('Genre', GenreSchema);

export default Genre;
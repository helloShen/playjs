import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  family_name: {
    type: String,
    required: true,
    maxlength: 100,
  },
  date_of_birth: Date,
  date_of_death: Date,
});

AuthorSchema.virtual('name').get(function() {
  let fullname = '';
  if (this.first_name && this.family_name) {
    fullname = this.first_name + ', ' + this.family_name;
  }
  return fullname;
});

AuthorSchema.virtual('lifespan').get(function() {
  let lifespan = '';
  if (this.date_of_birth) {
    lifespan = this.date_of_birth.getYear().toString() + ' - ';
  }
  if (this.date_of_death) {
    lifespan += this.date_of_death.getYear().toString();
  }
  return lifespan;
});

AuthorSchema.virtual('url').get(function() {
  return '/catalog/author/' + this._id;
});

const Author = mongoose.model('Author', AuthorSchema);

export default Author;
module.exports = mongoose => {
  const Schema = mongoose.Schema;

  const TestSchema = new Schema({
      name: { type: String},
      age: {  type: String},
    }, {versionKey: false});

  Schema.method("toJSON", function() {
    const { _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", TestSchema);
  return Tutorial;
};

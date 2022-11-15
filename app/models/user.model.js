module.exports = (mongoose) => {
  const Schema = mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

  const User = mongoose.model("users", Schema);
  return User;
};

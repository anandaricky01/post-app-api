module.exports = (mongoose) => {
    const Schema = mongoose.Schema({
        title : {
            type : String,
            required : true
        },
        slug : {
            type : String,
            required : true
        },
        category : {
            type : Array,
            required : true
        },
        body : {
            type : String,
            required : true
        },
        date : {
            type : Date,
            default : Date.now
        }
    });

    const Post = mongoose.model("posts", Schema);
    return Post;
}
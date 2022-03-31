import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    
    creator: String, //PostAddress.creator == user.id

    address: String,
    city: String,

    service:{
        type: String,
        default: new Date(),
    },
    
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostAddress = mongoose.model('PostAddress', postSchema);

export default PostAddress;
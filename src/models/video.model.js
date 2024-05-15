const mongoose = require('mongoose');
const mongooseAggregatePaginateV2 = require('mongoose-aggregate-paginate-v2')

const videoSchema = new mongoose.model({
        videoFile: {
            type: String, //cloudnary url
            required: true
        },
        thumbnail: {
            type: String, //coloudnary url
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        time: {
            type: Number, //coloudnary url
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        }
    }, 
    {
        timestamps: true
    }
);

videoSchema.plugin(mongooseAggregatePaginateV2)

const video = mongoose.model('video', videoSchema);
module.exports = video;
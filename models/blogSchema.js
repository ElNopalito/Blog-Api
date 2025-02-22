const { kStringMaxLength } = require('buffer')
const mongoose = require('mongoose')
const { stringify } = require('querystring')

const blogSchema = mongoose.Schema = ({
    created_by: {
        type: String,
        required: true
    },

    created_at:{
        type: Date,
        default: Date.now(),
        required: true
    },

    blog_title:{
        type: String,
        required: true
    },

    blog_content:{
        type: String,
        required: true
    },

    private:{
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model('Blog', blogSchema)
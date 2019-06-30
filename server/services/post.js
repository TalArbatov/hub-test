const mongoose = require('mongoose');
const Hub = mongoose.model('Hub');
const User = mongoose.model('User');
const Post = mongoose.model('Post')
const hubService = require('./hub')
// public - Anyone can view, post, and comment to this community
// restricted - Anyone can view this community, but only subscribed users can post
// private - Only admin can post, anyone can view
//secret - only admin can view and post.

canUserPost = async (hubName, user) => {
    const hub = await Hub.findOne({hubName});
    if(hub.privacy === 'public')
        return 'true';
    else if (hub.privacy === 'restricted') {
        if(hubService.isSubscriber(hubName, user))
            return 'true'
        return 'false';
    }
    else if(hub.privacy === 'private' || hub.privacy === 'secret') {
        if(hubService.isAdmin(hubName, user))
            return 'true';
        return 'false';
    }
    else    
        return false
}

module.exports = {
    canUserPost
}
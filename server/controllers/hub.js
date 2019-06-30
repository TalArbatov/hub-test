const Hub = require("mongoose").model("Hub");
const hubService = require('../services/hub')
const User = require('mongoose').model("User")
const getHubs = async (req, res, next) => {
  const hubs = await Hub.find({});
  if (hubs) res.send(hubs);
  res.sendStatus(500);
};

const createHub = async (req, res, next) => {
    // 1. validate hub creating request
    const hub = req.body;
    const hubStatus = await hubService.validateHub(hub)
    if(!hubStatus.success)
        return res.status(409).send(hubStatus.messages)
    // 2. intialize a hub object from schema
    const newHub = hubService.initializeHub(hub, req.user)
    // 3. save hub to db
    const savedHub = await hubService.saveHub(newHub)

    console.log(savedHub)
    if(savedHub)
        return res.send(savedHub)
    else return res.status(409).send(['Error while saving Hub'])
    
    
  }


const getHub = async (req, res, next) => {
  return res.send(req.hub);
};

const middleware = async (req, res, next) => {
  const hubName = req.params.hub;
  console.log(hubName);
  const currentHub = await Hub.findOne({ name: hubName })
    .populate("subscribers")
    .populate("admin");
  if (!currentHub) return res.status(409).send("Cannot find specified Hub");
  req.hub = currentHub;
  next();
};
const subscribe = (req,res,next) => {
    const hub = req.hub;
    const user = req.user;
    User.findByIdAndUpdate(user._id, {$push: {subscription: hub._id}}, err => err && res.sendStatus(500))
    Hub.findByIdAndUpdate(hub._id, {$push: {subscribers: user._id}}, err => err && res.sendStatus(500))
    res.sendStatus(200)
  }


const unsubscribe =  (req,res,next) => {
    if(hubService.isAdmin(req.hub.name, req.user))
        return res.status(409).send('An admin cannot unsubscribe from his Hub')
    if(hubService.isModerator(req.hub.name, req.user))
        return res.status(409).send('A moderator cannot unsubscribe from his Hub')

    const hub = req.hub;
    const user = req.user;
    User.findByIdAndUpdate(user._id, {$pull: {subscription: hub._id}}, (err) => err && res.sendStatus(500))
    Hub.findByIdAndUpdate(hub._id, {$pull: {subscribers: user._id}}, (err) => err && res.sendStatus(500))
    res.sendStatus(200)
  }  

module.exports = {
  getHubs,
  getHub,
  createHub,
  middleware,
  subscribe,
  unsubscribe
};

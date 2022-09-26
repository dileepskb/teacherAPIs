const express = require('express');
// const authRoute = require('./auth.route');
const teacherRoutes = require("./teachers");

// const userRoute = require('./user.route');
// const propertyRoute = require('./property.route');
// const locationRoute = require('./location.route');
// const roomRoute = require('./room.route');
// const fileRoute = require('./file.route');
// const docsRoute = require('./docs.route');
// const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/teachers',
    route: teacherRoutes,
  },
//   {
//     path: '/users',
//     route: userRoute,
//   },
//   {
//     path: '/file',
//     route: fileRoute,
//   },
//   {
//     path: '/property',
//     route: propertyRoute,
//   },
//   {
//     path: '/property-location',
//     route: locationRoute,
//   },
//   {
//     path: '/property-room',
//     route: roomRoute,
//   },
];



defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */

    
    module.exports = router;
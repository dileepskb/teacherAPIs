const express = require('express');
// const authRoute = require('./auth.route');
const teacherRoutes = require("./teachers");
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
const express = require('express');
// const authRoute = require('./auth.route');
const teacherRoutes = require("./teachers");
const cityRoutes = require("./city");
const router = express.Router();

const defaultRoutes = [
  {
    path: '/teachers',
    route: teacherRoutes,
  },
  {
    path: '/city',
    route: cityRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */

    
module.exports = router;
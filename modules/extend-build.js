export default function () {
  this.extendRoutes(async function (routes) {
    console.log("First extend. Routes:", routes);
    routes.push({
      name: 'a',
      path: '/c'
    })
  });

  this.extendRoutes(async function (routes) {
    console.log("Second extend. Routes:", routes);
    routes.push({
      name: 'b',
      path: '/b'
    })
  });

  this.extendRoutes(async function (routes) {
    console.log("All routes:", routes);
  });
}

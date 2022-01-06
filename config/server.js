// run the below command when editing the url
// npm run build -- --clean
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env("NODE_ENV") === "development" ? 'http://localhost:1337' : env('BACKEND_URL'),
  admin: {
    autoOpen: false,
    // url: env('BACKEND_ADMIN_URL', 'localhost:1337/admin'),
  },
});

export const configuration = () => ({
  port: parseInt(process.env.PORT, 10) || 3333,
  mongoUri: process.env.MONGO_URI,
});

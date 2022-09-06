const { sequelize } = require("./db");

(async () => {
  await sequelize.sync({ force: true });
})();

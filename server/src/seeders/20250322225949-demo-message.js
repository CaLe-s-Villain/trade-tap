module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Messages', [
      {
        text: 'Hello from backend',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Messages', null, {});
  },
};

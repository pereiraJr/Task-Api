module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback([
        {title: "Buy some shoes"},
        {title: "fix shoes"}
      ]);
    }
  };
};

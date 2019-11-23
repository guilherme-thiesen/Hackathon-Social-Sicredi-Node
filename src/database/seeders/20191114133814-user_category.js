module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      "user_category",
      [
        {
          title: "Administradores",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "Escolas",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "Provedores",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: "Público",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },

  down: () => {}
};

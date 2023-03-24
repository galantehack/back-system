module.exports = {
  // GET /cuestionarios
  index: (req, res) => {
    res.json([
      {
        id: 1,
        user: {
          id: 1,
          first_name: 'John',
          last_name: 'Doe',
          user: 'johndoe',
          password: '123456',
          is_admin: true
        },
        cuestionario: 'Cuestionario 1',
      },
      {
        id: 2,
        user: {
          id: 2,
          first_name: 'John',
          last_name: 'Doe',
          user: 'johndoe',
          password: '123456',
          is_admin: true
        },
        cuestionario: 'Cuestionario 1',
      }
    ]
    );
  },
  // POST /cuestionarios
  create: (req, res) => {
    const cuestionario = req.body;
    res.json({ ...cuestionario, id: 3 });
  }
}
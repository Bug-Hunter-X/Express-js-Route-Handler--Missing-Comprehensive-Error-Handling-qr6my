const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Input validation (should be implemented)
  // if (!isValidUserId(userId)) {
  //   return res.status(400).json({ error: 'Invalid user ID' });
  // }
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to retrieve user' });
    } else if (user) {
      res.json(user);
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.getUser(userId, (err, user) => {
    if (err) {
      // This will only log the error. A better approach is to send an error response to the client.
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else if (user) {
      res.json(user);
    } else {
      // Should ideally return a 404 instead of an empty response
      res.status(204).send(); 
    }
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
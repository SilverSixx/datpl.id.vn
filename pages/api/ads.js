export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send(`
    google.com, pub-3850408939639202, DIRECT, f08c47fec0942fa0
  `);
}

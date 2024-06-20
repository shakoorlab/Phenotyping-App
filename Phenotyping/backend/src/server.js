const express = require("express");
const app = express();
const port = 3000;

const plots = require("../plots.json");

app.get("/api/plots", (req, res) => {
  const { farmId, limit = 20, offset = 0 } = req.query;
  const filteredPlots = plots.filter((plot) => plot.farmId === farmId);
  const paginatedPlots = filteredPlots.slice(offset, offset + limit);
  res.json(paginatedPlots);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

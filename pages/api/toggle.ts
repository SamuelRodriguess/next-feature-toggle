export default function (req, res) {
  res
    .status(200)
    .json([
      process.env.FEATURE_TREASURY_CHART === "true" ? "treasury_chart" : "",
    ]);
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

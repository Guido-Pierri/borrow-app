export default function handler(req: any, res: any) {
  const { test } = req.query
  res.end(`Post: ${test}`)
}

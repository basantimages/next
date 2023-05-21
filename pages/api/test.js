export default async function handler(req, res) {
  // console.log(req.body);
  const r = await fetch(`https://www.instagram.com/${req.body.input}/?__a=1&__d=dis`);
  const data = await r.json();
  // console.log(data);

  res.status(200).json(data);
}

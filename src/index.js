const stop = /,$/;
export default function list(args) {
  const res = [];
  let temp = [];

  args.forEach(arg => {
    if (stop.test(arg)) {
      temp.push(arg.slice(0, -1));
      res.push(temp);
      temp = [];
    } else {
      temp.push(arg);
    }
  });
  res.push(temp);

  return res;
}

export default class {
  compute(a, b) {
    if (a.length != b.length) throw Error('DNA strands must be of equal length.');
    let ham = 0;
    let i = 0;
    for (i = 0; i<a.length; i++) {
      if (a[i] != b[i]) {
        ham++;
      }
    }
    return ham;
  }
}

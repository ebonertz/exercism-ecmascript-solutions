 export default class Transcriptor {
  constructor() {
    this.complement = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U'
    };
  }

  toRna(dna) {
    let rna = '';
    for (let letter of dna) {
      rna += this.complement[letter];
    }
    return rna;
  }
}

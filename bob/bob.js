class Bob {
  hey(message) {
    if (message.indexOf('!')>0) return 'Whoa, chill out!';
    if (message.indexOf('?')>0) return 'Sure.';

    return 'Whatever.';
  }
}

export default Bob;

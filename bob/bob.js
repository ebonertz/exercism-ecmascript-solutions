class Bob {
  hey(message) {
    this.message = message;
    if (message.endsWith('?') && message === message.toUpperCase() && message.match(/[a-z]/i)) return 'Whoa, chill out!';
    if (message.endsWith('!') && message === message.toUpperCase() && message.match(/[a-z]/i)) return 'Whoa, chill out!';
    if (message === message.toUpperCase() && message.match(/[a-z]/i)) return 'Whoa, chill out!';
    if (message.endsWith('?')) return 'Sure.';
    if (message.trim().length === 0) return 'Fine. Be that way!';
    return 'Whatever.';
  }
}

export default Bob;

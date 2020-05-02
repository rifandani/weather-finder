class Weather {
  constructor(data) {
    this.data = data;
    this.errors = [];
  }

  validateUserInput() {
    if (this.data == '') {
      this.errors.push('Input field jangan dikosongkan');
    }
  }
}

module.exports = Weather;

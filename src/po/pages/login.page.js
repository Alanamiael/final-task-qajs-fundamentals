const logger = require("../../helpers/logger");
class LoginPage {
  get usernameInput() {
    return $('//input[@type="text"]');
  }
  get passwordInput() {
    return $('//input[@type="password"]');
  }
  get loginButton() {
    return $('//input[@id="login-button"]');
  }
  async open() {
    await browser.url("https://www.saucedemo.com");
  }
  async login(username = "standard_user", password = "secret_sauce") {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
    await this.loginButton.click();
    logger.info("Login button clicked");
  }
}

module.exports = LoginPage;

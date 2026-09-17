function checkPasswordStrength(password: string): string {
  if (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password)
  ) {
    return "Strong";
  }

  return "Weak";
}
console.log(checkPasswordStrength("Password123"))
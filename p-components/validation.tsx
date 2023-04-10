export default function validation(user: any) {
  const ourErrors: any = {}

  const patterEmail =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i //problem with validation
  const patterPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})$/

  if (user.email === "") {
    ourErrors.email = "Epost får ej vara tomt!"
  } else if (!patterEmail.test(user.email)) {
    ourErrors.email = "Epost är ej giltigt!"
  }

  if (user.password === "") {
    ourErrors.password = "Lösenordet får ej vara tomt!"
  } else if (user.password < 8) {
    ourErrors.password = "Lösenordet måste innehålla minst 8 tecken!"
  } else if (!patterPassword.test(user.password)) {
    ourErrors.password = "Lösenordet är ej giltigt!"
  }

  return ourErrors
}

function toggleMode() {
  const html = document.documentElement

  //podemos fazer assim:
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  //ou assim que é um elemento ja criado no js:
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/img-light.jpg")
  } else {
    img.setAttribute("src", "./assets/img-dark.jpg")
  }
}

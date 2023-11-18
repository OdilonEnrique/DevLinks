function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
  
  // Pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se estiver light mode, adicionar a imagam light
    img.setAttribute("src", "./img/avatar-light.png")
  }else{
    // Se estiver sem light mode, adicionar a normal
    img.setAttribute("src", "./img/avatar.jpg")
  }
}
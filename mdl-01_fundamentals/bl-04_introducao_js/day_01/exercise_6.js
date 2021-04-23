let piece = "King"

switch (piece.toLowerCase()) {
  case "king":
    console.log(piece + " movimenta-se na horizontal, verticais e diagonais.")
    break
  case "queen":
    console.log(piece + " movimenta-se na horizontal, vertical e diagonal")
    break
  case "bishop":
    console.log(piece + " movimenta-se na diagonal")
    break
  case "horse":
    console.log(piece + ' movimenta-se em forma de "L"')
    break
  case "tower":
    console.log(piece + " movimenta-se na vertical e horizontal")
    break
  case "pawn":
    console.log(piece + " movimenta-se apenas para frente.")
    break
  default:
    console.log("ERROR!! insert name valid")
    break
}

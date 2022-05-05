let sueldo12: number = Number(prompt("ingrese su sueldo mensual"));
let total3: number;
switch (true) {
  case sueldo12 > 0 && sueldo12 <= 15000:
    total3 = sueldo12 * 0.2 + sueldo12;
    console.log("su sueldo actualizado es de ", total3);
    break;
  case sueldo12 >= 15001 && sueldo12 <= 20000:
    total3 = sueldo12 * 0.1 + sueldo12;
    console.log("su sueldo actualizado es de ", total3);
    break;
  case sueldo12 <= 25000:
    total3 = sueldo12 * 0.05 + sueldo12;
    console.log("su sueldo actualizado es de ", total3);
    break;
  default:
    console.log("su sueldo sin aumento es de:", sueldo12);
    break;
}

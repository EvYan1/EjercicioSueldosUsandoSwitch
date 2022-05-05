let sueldo: number = Number(prompt("ingrese su sueldo mensual"));
let total: number;
switch (true) {
  case sueldo > 0 && sueldo <= 15000:
    total = sueldo * 0.2 + sueldo;
    console.log("su sueldo actualizado es de ", total);
    break;
  case sueldo >= 15001 && sueldo <= 20000:
    total = sueldo * 0.1 + sueldo;
    console.log("su sueldo actualizado es de ", total);
    break;
  case sueldo <= 25000:
    total = sueldo * 0.05 + sueldo;
    console.log("su sueldo actualizado es de ", total);
    break;
  default:
    console.log("su sueldo sin aumento es de:", sueldo);
    break;
}

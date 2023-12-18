function Calcular() {
  let Nota1 = document.getElementById("Nota1").value;
  let Nota2 = document.getElementById("Nota2").value;
  let Result = document.getElementById("Resultado");

  n1 = Number(Nota1);
  n2 = Number(Nota2);

  Result.innerHTML = "Nota da Média: ";

  if (Nota1 == "" || Nota2 == "" || Nota1 < 0 || Nota2 < 0) {
    alert("Campo Vazio ou Nota Invalida!");
  } else {
    let NotaFinal = 0;
    // (N1 + (2 * N2)) / 3
    NotaFinal = (n1 + (2 * n2)) / 3;
    
    if (Number.isInteger(NotaFinal)) {
      Result.innerHTML += ` ${NotaFinal.toFixed(0)}`;
    } else {
      Result.innerHTML += ` ${NotaFinal.toFixed(1)}`;
    }
  }
}

function CalcularSPA() {
  let Nota1 = document.getElementById("Nota1").value;
  let Nota2 = document.getElementById("Nota2").value;
  let NotaSPA = document.getElementById("NotaSPA").value;
  let Result = document.getElementById("Resultado");

  n1 = Number(Nota1);
  n2 = Number(Nota2);
  nSPA = Number(NotaSPA);

  Result.innerHTML = "Nota da Média: ";

  if (Nota1 == "" || Nota2 == "" || Nota1 < 0 || Nota2 < 0) {
    alert("Campo Vazio ou Nota Invalida!");
  } else {
    let NotaFinalSPA = 0;
    // (N1 + (2 * N2) + SPA) / 4
    NotaFinalSPA = (n1 + (2 * n2) + nSPA) / 4;
    
    if (Number.isInteger(NotaFinalSPA)) {
      Result.innerHTML += ` <strong> ${NotaFinalSPA.toFixed(0)}</strong>`;
    } else {
      Result.innerHTML += ` <strong> ${NotaFinalSPA.toFixed(1)}</strong>`;
    }
  }
}
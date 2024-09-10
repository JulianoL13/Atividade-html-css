function calculateMean() {
  const numberOfGrades = Number.parseInt(prompt("Informe o número de notas:"));
  const grades = new Array(numberOfGrades);

  for (let i = 0; i < numberOfGrades; i++) {
    let grade = parseFloat(prompt(`Informe a nota ${i + 1}:`));
    while (isNaN(grade) && grade <= 0) {
      grade = parseFloat(
        prompt("Entrada inválida. Informe um número para a nota ${i + 1}:")
      );
    }
    grades[i] = grade;
  }

  const mean = grades.reduce((a, b) => a + b, 0) / numberOfGrades;
  document.getElementById("resultado").textContent = `A média é: ${mean}`;
}

function verifyNumber() {
  const number = parseInt(prompt("Informe um número:"));
  document.getElementById("resultado").textContent =
    number % 2 === 0
      ? `O número ${number} é par.`
      : `O número ${number} é impar.`;
}

function simpleCalculation() {
  alert(
    "Calculadora simples\n---------------\n1. Adição\n2. Subtração\n3. Multiplicação\n4. Divisão\n---------------"
  );
  const option = parseInt(prompt("Entre com a opção desejada: "));

  switch (option) {
    case 1:
      const a = parseFloat(prompt("Entre com o primeiro número: "));
      const b = parseFloat(prompt("Entre com o segundo número: "));
      document.getElementById("resultado").textContent = `Resultado: ${a + b}`;
      break;
    case 2:
      const c = parseFloat(prompt("Entre com o primeiro número: "));
      const d = parseFloat(prompt("Entre com o segundo número: "));
      document.getElementById("resultado").textContent = `Resultado: ${c - d}`;
      break;
    case 3:
      const e = parseFloat(prompt("Entre com o primeiro número: "));
      const f = parseFloat(prompt("Entre com o segundo número: "));
      document.getElementById("resultado").textContent = `Resultado: ${e * f}`;
      break;
    case 4:
      const g = parseFloat(prompt("Entre com o primeiro número: "));
      const h = parseFloat(prompt("Entre com o segundo número: "));
      if (h === 0) {
        document.getElementById("resultado").textContent =
          "Erro: não é possível dividir por zero!";
      } else {
        document.getElementById("resultado").textContent = `Resultado: ${
          g / h
        }`;
      }
      break;
    default:
      document.getElementById("resultado").textContent = "Opção inválida";
  }
}

function countdown() {
  const initialValue = parseInt(
    prompt("Informe o valor inicial da contagem regressiva:")
  );
  if (isNaN(initialValue) || initialValue < 0) {
    alert("Valor inválido. Por favor, insira um número positivo.");
    return;
  }

  for (let i = initialValue; i >= 0; i--) {
    (function (index) {
      setTimeout(function () {
        document.getElementById(
          "contador"
        ).textContent = `contagem regressiva: ${index}`;
        if (index <= 0) {
          document.getElementById("contador").textContent = "BOOOM!";
        }
      }, (initialValue - index + 1) * 1000);
    })(i);
  }
}

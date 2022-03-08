//masīvs jeb array//
const skoleni = ["Harijs", "Hermione", "Rons", "Nevils"];

function paraditkSkolenusLapa() {
  let pilnsTeksts = "";
  for (let i = 0; i < skoleni.length; i = i + 1) {
    pilnsTeksts =
      pilnsTeksts + (skoleni[i] + " ir " + (i + 1) + ". skolēns <br>");
  }
  document.getElementById("container").innerHTML = pilnsTeksts;
}

paraditkSkolenusLapa();

document.getElementById("poga").addEventListener("click", () => {
  skoleni.push(document.getElementById("psk").value);
  paraditkSkolenusLapa();
  document.getElementById("container").innerHTML =
    pilnsTeksts + document.getElementById("psk").value;

  pilnsTeksts = pilnsTeksts + document.getElementById("psk").value;
  document.getElementById("container").innerHTML = pilnsTeksts;
});

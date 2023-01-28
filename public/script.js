const inpFile = document.getElementById("inpFile");
const btnUpload = document.getElementById("btnUpload");
const resultText = document.getElementById("resultText");
const actualBtn = document.getElementById("inpFile");
const fileChosen = document.getElementById("file-chosen");

actualBtn.addEventListener("change", function () {
  fileChosen.textContent = this.files[0].name;
});

btnUpload.addEventListener("click", () => {
  const formData = new FormData();

  formData.append("pdfFile", inpFile.files[0]);

  fetch("/extract-text", {
    method: "post",
    body: formData,
  })
    .then((response) => {
      return response.text();
    })
    .then((extractedText) => {
      resultText.value = extractedText.trim();
    });
});

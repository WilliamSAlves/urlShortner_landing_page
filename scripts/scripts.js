document.getElementById("urlForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const urlInput = document.getElementById("urlInput").value;

    try {
      const response = await fetch("http://localhost:8080/api/v1/processBitly", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: urlInput }),
      });

      const data = await response.json();

      if (response.ok) {
        document.getElementById("resultado").innerText = `${data.shortUrl}`;
      } else {
        document.getElementById(
          "resultado"
        ).innerText = `Erro: ${data.message}`;
      }
    } catch (error) {
      console.error("Erro ao enviar solicitação:", error);
    }
  });

document.getElementById("astroForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const tob = document.getElementById("tob").value;
  const place = document.getElementById("place").value;
  const gender = document.getElementById("gender").value;
  const focus = document.getElementById("focus").value;
  const email = document.getElementById("email").value;

  

  const data = {
    name,
    dob,
    tob,
    place,
    gender,
    focus,
    email,
  
  };

  const resultEl = document.getElementById("result");
  try {
    const response = await fetch("https://mayankshringi.app.n8n.cloud/webhook-test/5b0a9ceb-f690-4ebb-87e9-d7a035ccc782", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    resultEl.classList.remove("error", "warning", "success");
    if (response.ok) {
      resultEl.classList.add("success");
      resultEl.innerHTML =
        "📩 Your personalized astrology prediction has been sent to your email!";
    } else {
      resultEl.classList.add("error");
      resultEl.innerHTML =
        "❌ Failed to send prediction. Try again.";
    }
  } catch (error) {
    console.error(error);
    resultEl.classList.remove("success");
    resultEl.classList.add("warning");
    resultEl.innerHTML =
      "⚠️ Network error. Please try later.";
  }
});

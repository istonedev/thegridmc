// Copy server IP
const copyBtn = document.getElementById("copy-btn");
const serverIp = document.getElementById("server-ip");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(serverIp.textContent.trim());
    const original = copyBtn.textContent;
    copyBtn.textContent = "Copied!";
    copyBtn.style.borderColor = "#ff6a00";
    copyBtn.style.color = "#ff6a00";
    setTimeout(() => {
      copyBtn.textContent = original;
      copyBtn.style.borderColor = "";
      copyBtn.style.color = "";
    }, 1500);
  } catch (err) {
    console.error("Copy failed:", err);
  }
});

// Subtle parallax on hero title
const hero = document.querySelector(".hero");
const title = document.querySelector(".hero h1");

hero.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  title.style.transform = `translate(${x}px, ${y}px)`;
});

hero.addEventListener("mouseleave", () => {
  title.style.transform = "translate(0, 0)";
});
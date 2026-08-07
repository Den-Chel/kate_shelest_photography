async function loadComponent(selector, file) {
  try {
    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(`Unable to load ${file}`);
    }

    const html = await response.text();

    const element = document.querySelector(selector);

    if (element) {
      element.innerHTML = html;
    }
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("#site-header", "components/header.html");
  loadComponent("#site-footer", "components/footer.html");
});

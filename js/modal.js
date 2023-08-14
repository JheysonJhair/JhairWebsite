document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImages = document.querySelector(".modal-images");
  const closeButton = document.querySelector(".close");

  const galleryItems = document.querySelectorAll(".galeria-work .cont-work");
  const galleryArray = Array.from(galleryItems);

  // Lista de enlaces correspondientes a cada elemento de la galería
  const galleryLinks = [
    "https://github.com/JheysonJhair/FT_MusicVideoPlayer-Angular",
    "https://github.com/JheysonJhair/SaleOfTicket-Angular",
    "https://github.com/JheysonJhair/",
    "https://github.com/JheysonJhair/SistemaEncomienda-Java",
    "https://github.com/JheysonJhair/IPCalculator-Java",
    // Agrega más enlaces para cada elemento de la galería
  ];

  // Lista de textos correspondientes a cada elemento de la galería
  const galleryTexts = [
    "Reproductor multimedia diseñado para satisfacer las necesidades de los amantes de la música y el video en una sola plataforma incluyendo un descargador.",
    "Plataforma en línea que revoluciona la forma en que se venden y gestionan los boletos para el comedor universitario.",
    "Plataforma en línea que combina tecnología avanzada y una experiencia interactiva para permitir a los clientes crear y cotizar su automóvil ideal de manera personalizada.",
    "...",
    "...",
    "...",
    "Plataforma de software de escritorio que tiene como objetivo mejorar la eficiencia y la precisión en la gestión de encomiendas para empresas de transporte y logística.",
    "Herramienta de software de escritorio diseñada para realizar cálculos y conversiones de direcciones IP o tambien la configuración de redes.",

  ];

  // Lista de rutas de las imágenes correspondientes a cada elemento de la galería
  const galleryImages = [
    ["../img/font/SOUNDTHEZER.png"],
    ["../img/font/SALEOFTICKET.png"],
    ["../img/font/CO.png"],
    ["../img/font/"],
    ["../img/font/"],
    ["../img/font/"],
    ["../img/font/M.jpeg"],
    ["../img/font/IP.png"],
    ["../img/font/"],
    ["../img/font/TMD.jpeg"],
    ["../img/font/PM.png"],
    ["../img/font/"],
    // Agrega más rutas de imágenes para cada elemento de la galería
  ];

  galleryArray.forEach((item, index) => {
    item.addEventListener("click", function () {
      openModal(index);
    });
  });

  closeButton.addEventListener("click", closeModal);
  window.addEventListener("click", outsideClick);

  let currentIndex = 0;

  function openModal(index) {
    currentIndex = index;
    modal.style.display = "block";
    updateModalContent();
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function outsideClick(event) {
    if (event.target === modal) {
      closeModal();
    }
  }

  function updateModalContent() {
    const currentItem = galleryArray[currentIndex];
    const title = currentItem.querySelector(".img-caption").textContent;
    modalTitle.textContent = "Proyecto:  "+title;
    modalImages.innerHTML = "";

    const imagePaths = galleryImages[currentIndex];
    const imgElement = document.createElement("img");
    imgElement.src = "seets/" + imagePaths[0]; // Utilizamos solo la primera imagen
    imgElement.classList.add("modal-image", "modal-image-large"); // Nuevas clases agregadas
    modalImages.appendChild(imgElement);

    const linkButton = document.createElement("a");
    linkButton.href = galleryLinks[currentIndex];
    linkButton.target = "_blank";
    linkButton.classList.add("link-button");

    const linkText = document.createElement("p");
    linkText.textContent = galleryTexts[currentIndex];
    modalImages.appendChild(linkText);

    const linkImage = document.createElement("button");
    linkImage.textContent = "Visitar proyecto";

    linkButton.appendChild(linkImage);
    modalImages.appendChild(linkButton);
  }
});

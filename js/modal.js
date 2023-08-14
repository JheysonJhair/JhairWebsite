document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImages = document.querySelector(".modal-images");
  const closeButton = document.querySelector(".close");

  const galleryItems = document.querySelectorAll(".galeria-work .cont-work");
  const galleryArray = Array.from(galleryItems);

  const galleryLinks = [
    "https://github.com/JheysonJhair/FT_MusicVideoPlayer-Angular",
    "https://github.com/JheysonJhair/SaleOfTicket-Angular",
    "https://github.com/JheysonJhair/",
    "https://github.com/JheysonJhair/",
    "https://github.com/JheysonJhair/Presupuesto-Angular",
    "https://github.com/JheysonJhair/VideoPlayer-Angular",
    "https://github.com/JheysonJhair/SistemaEncomienda-Java",
    "https://github.com/JheysonJhair/IPCalculator-Java",
    "https://github.com/JheysonJhair/SistemaVenta-Java",
    "https://github.com/JheysonJhair/",
    "https://github.com/JheysonJhair/",
    "",
  ];

  const galleryTexts = [
    "Reproductor multimedia diseñado para satisfacer las necesidades de los amantes de la música y el video en una sola plataforma incluyendo un descargador.",
    "Plataforma en línea que revoluciona la forma en que se venden y gestionan los boletos para el comedor universitario.",
    "Plataforma en línea que combina tecnología avanzada y una experiencia interactiva para permitir a los clientes crear y cotizar su automóvil ideal de manera personalizada.",
    "Empresa especializada en el desarrollo de software a medida. Nuestro enfoque se basa en la creación de soluciones tecnológicas personalizadas que atiendan las necesidades del cliente.",
    "EIPRES es una aplicación diseñada para ayudarte a calcular y gestionar tus finanzas personales de manera eficiente.",
    "Plataforma de reproducción de videos perfecta para disfrutar de tu lista de reproducción de videos favoritos",
    "Plataforma de software de escritorio que tiene como objetivo mejorar la eficiencia y la precisión en la gestión de encomiendas para empresas de transporte y logística.",
    "Herramienta de software de escritorio diseñada para realizar cálculos y conversiones de direcciones IP o tambien la configuración de redes.",
    "Plataforma de venta en línea que combina tecnología avanzada con una interfaz amigable para proporcionar a los usuarios una experiencia de compra sin complicaciones.",
    "THE MINIMUN DANGER es un juego de plataformas para todos los amantes de las aventuras clásicas. Inspirado por el icónico Mario Bros",
    "PAC-MAN Retro Adventure es un juego para Android que captura la esencia y la emoción del icónico PAC-MAN original.",
    "...",

  ];

  const galleryImages = [
    ["../img/font/SOUNDTHEZER.png"],
    ["../img/font/SALEOFTICKET.png"],
    ["../img/font/JAMDER.png"],
    ["../img/font/JHEWEKEEND.png"],
    ["../img/font/EIPRES.png"],
    ["../img/font/PLAYVIDEO.png"],
    ["../img/font/MARVISUR.png"],
    ["../img/font/IP.png"],
    ["../img/font/SIVEN.png"],
    ["../img/font/TMD.jpeg"],
    ["../img/font/PACMAN.png"],
    ["../img/font/"],
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
    imgElement.src = "seets/" + imagePaths[0]; 
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

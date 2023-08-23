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
    "https://github.com/JheysonJhair/SistemaEncomienda-Java",
    "https://github.com/JheysonJhair/IPCalculator-Java",
    "https://github.com/JheysonJhair/CalculadoraCientifica-Java",
    "https://github.com/JheysonJhair/SistemaVenta-Java",
    "https://github.com/JheysonJhair/",
    "https://github.com/JheysonJhair/FT_Jheyted_ReactNative",
    "https://github.com/JheysonJhair/",
    "https://github.com/JheysonJhair/",
  ];

  const galleryTexts = [
    "Reproductor multimedia diseñado para los amantes de la música y el video en una sola plataforma incluyendo un descargador.",
    "Plataforma en línea que revoluciona la forma en que se venden y gestionan los boletos para el comedor universitario.",
    "En proceso ...",
    "Empresa especializada en el desarrollo de software, su enfoque se basa en la creación de soluciones tecnológicas personalizadas que atiendan las necesidades del cliente.",
    "Aplicación diseñada para ayudarte a calcular y gestionar tus finanzas personales de manera eficiente.",
    "Plataforma de software de escritorio que tiene como objetivo mejorar la eficiencia y la precisión en la gestión de encomiendas para empresas de transporte y logística.",
    "Herramienta de software de escritorio diseñada para realizar cálculos y conversiones de direcciones IP o tambien la configuración de redes.",
    "Herramienta poderosa diseñada para desbloquear las complejidades del mundo de las matemáticas y la ciencia.",
    "Plataforma de venta en línea que combina tecnología avanzada con una interfaz amigable para proporcionar a los usuarios una experiencia de compra sin complicaciones.",
    "Plataforma de proceso de cotización de autos, proporcionando a los usuarios una plataforma intuitiva y poderosa para obtener información precisa sobre el valor de los vehículos.",
    "Plataforma te ayuda a gestionar tu inventario, crear menús personalizados, agilizar el proceso de pedidos y brindar un servicio excepcional a tus clientes.",
    "Juego de plataformas para todos los amantes de las aventuras clásicas. Inspirado por el icónico Mario Bros.",
    "Juego para Android que captura la esencia y la emoción del icónico PAC-MAN original.",
  ];

  const galleryImages = [
    ["../img/font/soundthezer.webp"],
    ["../img/font/saleofticket.webp"],
    ["../img/font/"],
    ["../img/font/jhewekeend.webp"],
    ["../img/font/eipres.webp"],
    ["../img/font/marvisur.webp"],
    ["../img/font/ip.webp"],
    ["../img/font/Calculadora.webp"],
    ["../img/font/siven.webp"],
    ["../img/font/jamder.webp"],
    ["../img/font/xgoo.webp"],
    ["../img/font/tmd.webp"],
    ["../img/font/pacman.webp"],
  ];

  const skillsIcons = [
    [
      "fab fa-node-js",
      "fab fa-angular",
      "fas fa-database",
      "fab fa-git",
      "fas fa-cloud",
    ],
    ["fab fa-angular", "c#", "fas fa-database", "fab fa-git", "fas fa-cloud"],
    ["fab fa-react", ".N", "fas fa-database", "fab fa-git"],
    ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
    ["fab fa-angular", "fab fa-git"],
    ["fab fa-java", "fas fa-database", "fab fa-git"],
    ["fab fa-java", "fab fa-git"],
    ["fab fa-java"],
    ["fab fa-java", "fas fa-database", "fab fa-git"],
    ["fab fa-java", "fab fa-git"],
    ["fab fa-react", "fas fa-cloud", "fab fa-git", "fas fa-code"],
    ["c++"],
    ["c++"],
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
    modalTitle.textContent = "Proyecto: " + title;
    modalImages.innerHTML = "";

    const imagePaths = galleryImages[currentIndex];
    const imgElement = document.createElement("img");
    imgElement.src = "seets/" + imagePaths[0];
    modalImages.appendChild(imgElement);

    const skillsContainer = document.querySelector(".modal-skills");
    skillsContainer.innerHTML = "";

    skillsIcons[currentIndex].forEach((iconClass) => {
      const skillItem = document.createElement("div");

      if (isValidFontAwesomeIcon(iconClass)) {
        const iconElement = document.createElement("i");
        iconElement.className = iconClass;
        skillItem.appendChild(iconElement);
      } else {
        const textNode = document.createTextNode(iconClass);
        skillItem.className = iconClass;
        skillItem.appendChild(textNode);
      }

      skillsContainer.appendChild(skillItem);
    });

    function isValidFontAwesomeIcon(iconClass) {
      return iconClass.startsWith("fab") || iconClass.startsWith("fas");
    }

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

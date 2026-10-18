
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");
  const currentYear = document.getElementById("currentYear");

  // Atualiza o ano automaticamente.
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Menu para celulares.
  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        menuToggle.textContent = "☰";
      });
    });
  }

  // O status é demonstrativo até a integração com a API real.
  const serverMessage = document.getElementById("serverMessage");
  const serverStatus = document.getElementById("serverStatus");

  if (serverMessage && serverStatus) {
    serverMessage.textContent = "Aguardando integração com a API";
    serverStatus.textContent = "NÃO CONECTADO";
    serverStatus.setAttribute("title", "Status demonstrativo");
  }

  // Exibe uma mensagem se houver links de navegação para seções.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        event.preventDefault();
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        event.preventDefault();
      }
    });
  });

  console.info("Minions Paradise Brazil: site carregado.");
});

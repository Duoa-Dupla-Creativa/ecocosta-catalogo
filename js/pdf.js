/* ==========================================================================
   ECOCOSTA — Exportación PDF (PLAN_1 §7)
   - Solo productos, sin portada ni contraportada, tamaño Carta (Letter).
   - Layout móvil forzado: escenario off-screen #pdf-export-stage a 420px.
   - 2 productos por hoja. Cada hoja se rasteriza por separado con html2pdf.js
     (evita el límite de altura de canvas de los navegadores con ~95 productos).
   ========================================================================== */
(function () {
  "use strict";
  var Cat = window.EcoCatalog;
  var PER_PAGE = 2;

  function pageHTML(chunk, pageNo, total) {
    return '<section class="pdf-page"><div class="pdf-cards">' + chunk.map(function (p) {
      var media = (p.missing || !p.img)
        ? '<div class="pdf-card-media pdf-card-media--missing"><span class="product-media-falta">FALTA</span></div>'
        : '<div class="pdf-card-media"><img src="' + Cat.imgSrc(p) + '" alt=""></div>';
      return '<article class="pdf-card">' +
        media +
        '<div class="pdf-card-body"><span class="pdf-cat">' + Cat.esc(p.category) + '</span>' +
        '<h3 class="text-title-product">' + Cat.esc(p.name) + '</h3>' +
        '<p class="text-specs">' + Cat.specs(p) + '</p></div></article>';
    }).join("") + '</div><div class="pdf-foot"><span>Ecocosta</span><span>' + pageNo + ' / ' + total + '</span></div></section>';
  }

  function buildStage() {
    var chunks = [];
    Cat.categories.forEach(function (c) {
      for (var i = 0; i < c.products.length; i += PER_PAGE) chunks.push(c.products.slice(i, i + PER_PAGE));
    });
    var stage = document.getElementById("pdf-export-stage");
    stage.innerHTML = chunks.map(function (ch, i) { return pageHTML(ch, i + 1, chunks.length); }).join("");
    return Array.prototype.slice.call(stage.querySelectorAll(".pdf-page"));
  }

  function imagesReady(stage) {
    var imgs = Array.prototype.slice.call(stage.querySelectorAll("img"));
    return Promise.all(imgs.map(function (img) {
      if (img.complete && img.naturalWidth) return Promise.resolve();
      return new Promise(function (res) { img.onload = img.onerror = res; });
    }));
  }

  function generate() {
    if (typeof window.html2pdf !== "function") {
      return Promise.reject(new Error("html2pdf.js no está disponible (¿sin conexión a la CDN?)"));
    }
    var overlay = document.getElementById("pdf-progress");
    var text = document.getElementById("pdf-progress-text");
    var fill = document.getElementById("pdf-bar-fill");
    overlay.hidden = false; fill.style.width = "0%"; text.textContent = "Preparando catálogo…";

    var pages = buildStage();
    var stage = document.getElementById("pdf-export-stage");
    var opt = {
      margin: 0,
      filename: "Catalogo-Ecocosta.pdf",
      image: { type: "jpeg", quality: 0.82 },
      html2canvas: { scale: 1.5, useCORS: true, backgroundColor: "#FCEADF", logging: false, scrollX: 0, scrollY: 0 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      pagebreak: { mode: [] }
    };

    function done(i) {
      fill.style.width = Math.round(((i + 1) / pages.length) * 100) + "%";
      text.textContent = "Generando página " + (i + 1) + " de " + pages.length + "…";
    }

    return imagesReady(stage).then(function () {
      var worker = window.html2pdf().set(opt).from(pages[0]).toContainer().toCanvas().toPdf().then(function () { done(0); });
      pages.slice(1).forEach(function (page, k) {
        worker = worker.get("pdf").then(function (pdf) { pdf.addPage(); })
          .from(page).toContainer().toCanvas().toPdf().then(function () { done(k + 1); });
      });
      text.textContent = "Generando página 1 de " + pages.length + "…";
      return worker.then(function () { text.textContent = "Guardando PDF…"; }).save();
    }).then(function () {
      stage.innerHTML = ""; overlay.hidden = true;
    }, function (err) {
      stage.innerHTML = ""; overlay.hidden = true; throw err;
    });
  }

  window.EcoPDF = { generate: generate };
})();

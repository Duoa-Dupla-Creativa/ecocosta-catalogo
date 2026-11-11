/* ==========================================================================
   ECOCOSTA — Aplicación SPA: rutas, chips, cotización WhatsApp, carrito
   ========================================================================== */
(function () {
  "use strict";
  var CFG = window.ECOCOSTA_CONFIG, Cat = window.EcoCatalog, Cart = window.EcoCart, I = window.ECO_ICONS;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- WhatsApp ---------- */
  function waUrl(text) { return "https://wa.me/" + CFG.whatsappNumber + "?text=" + encodeURIComponent(text); }
  function singleMessage(p) { return "Hola, estoy interesado en cotizar " + p.name; }
  function multiMessage(list) {
    return "Hola, estoy interesado en cotizar:\n" + list.map(function (p) { return "\u2022 " + p.name; }).join("\n");
  }
  function openWhatsApp(url) { window.open(url, "_blank", "noopener"); }

  /* ---------- Toast ---------- */
  var toastTimer;
  function toast(msg) {
    var region = $("#toast-region");
    region.innerHTML = '<div class="toast">' + I.check + '<span></span></div>';
    $("span", region).textContent = msg;
    var el = $(".toast", region);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      el.classList.add("is-leaving");
      setTimeout(function () { if (el.parentNode) el.remove(); }, 320);
    }, 2600);
  }

  /* ---------- Navegación entre páginas Inicio y Productos ---------- */
  var isIndexPage = !!document.getElementById("view-inicio");
  var isProductosPage = !!document.getElementById("view-productos");

  var navLinks = $$(".nav-btn[data-view]");
  function setActiveNav(name) {
    navLinks.forEach(function (a) {
      if (a.dataset.view === name) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  // Marcar enlace activo según la página actual
  if (isIndexPage && !isProductosPage) {
    setActiveNav("inicio");
  } else if (isProductosPage && !isIndexPage) {
    setActiveNav("productos");
  }

  navLinks.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      var target = btn.dataset.view;
      if (target === "inicio" && isIndexPage) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      } else if (target === "productos" && isProductosPage) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      }
      // Si va a la otra página, el navegador sigue el href (index.html o productos.html)
    });
  });

  var heroMoreBtn = $("#hero-btn-ver-mas");
  if (heroMoreBtn) {
    heroMoreBtn.addEventListener("click", function (e) {
      var targetEl = document.getElementById("inicio-intro-content");
      if (!targetEl) return;
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      targetEl.focus({ preventScroll: true });
    });
  }

  document.addEventListener("click", function (e) {
    var go = e.target.closest("[data-go]");
    if (go) {
      var target = go.dataset.go;
      if (target === "inicio") {
        if (isIndexPage) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
        } else {
          window.location.href = "index.html";
        }
      } else if (target === "productos") {
        if (isProductosPage) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
        } else {
          window.location.href = "productos.html";
        }
      }
    }
  });

  function routeFromHash() {
    var h = (location.hash || "").replace("#", "");
    if (h === "productos" && isIndexPage && !isProductosPage) {
      window.location.href = "productos.html";
    } else if (h === "inicio" && isProductosPage && !isIndexPage) {
      window.location.href = "index.html";
    }
  }
  window.addEventListener("hashchange", routeFromHash);

  /* ---------- Animación Trim Path en SVGs (Hojas, Brillo, Curvas) ---------- */
  function initTrimPath() {
    var paths = $$(".trim-path");
    paths.forEach(function (p) {
      var len = Math.ceil(p.getTotalLength() || 200);
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
    });
    // Forzar reflow en el navegador
    void document.body.offsetWidth;
    paths.forEach(function (p, i) {
      p.style.transition = "stroke-dashoffset 1.8s cubic-bezier(0.16, 1, 0.3, 1) " + (0.15 + i * 0.05) + "s";
      p.style.strokeDashoffset = "0";
    });
  }

  /* ---------- Parallax en scroll: productos se desplazan 0.2 más rápido hacia los textos ---------- */
  var parallaxItems = $$(".parallax-item");
  var baseTransforms = [];
  parallaxItems.forEach(function (item) {
    var st = window.getComputedStyle(item);
    var tr = st.transform !== "none" ? st.transform : "";
    baseTransforms.push(tr);
  });

  /* ---------- Parallax de vasos en sección Personalización ---------- */
  var cupItems = $$(".parallax-cup");
  var cupBaseTransforms = [];
  cupItems.forEach(function (item) {
    var st = window.getComputedStyle(item);
    var tr = st.transform !== "none" ? st.transform : "";
    cupBaseTransforms.push(tr);
  });
  var cupSection = document.getElementById("inicio-personalizacion");

  function updateCupsParallax(vh) {
    if (reduceMotion || !cupSection || cupItems.length === 0) return;
    var rect = cupSection.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > vh) return;

    // Progreso relativo al scroll mientras la sección cruza el viewport (-0.5 a 0.5)
    var progress = (vh - rect.top) / (vh + rect.height);
    var rel = progress - 0.5;

    cupItems.forEach(function (item, idx) {
      var speed = parseFloat(item.dataset.speed || 30);
      var dir = item.dataset.dir || "up";
      var dy = (dir === "up" ? -1 : 1) * rel * speed;
      var baseTr = cupBaseTransforms[idx];
      var translate = "translate3d(0, " + dy.toFixed(1) + "px, 0)";
      item.style.transform = baseTr ? translate + " " + baseTr : translate;
    });
  }

  var pTicking = false;
  function updateParallax() {
    pTicking = false;
    var sy = window.pageYOffset || document.documentElement.scrollTop;
    var vh = window.innerHeight;

    if (sy <= vh * 1.5) {
      parallaxItems.forEach(function (item, idx) {
        var speed = parseFloat(item.dataset.speed || 0.2);
        var dir = item.dataset.dir || "down";
        var dy = 0, dx = 0;
        if (dir === "down") {
          dy = sy * speed; // bajan pisando el texto
        } else if (dir === "up") {
          dy = -sy * speed; // suben pisando el texto
        } else if (dir === "right") {
          dx = sy * (speed * 0.7); // desplazamiento lateral
        }
        var baseTr = baseTransforms[idx];
        var translate = "translate3d(" + dx.toFixed(1) + "px, " + dy.toFixed(1) + "px, 0)";
        item.style.transform = baseTr ? translate + " " + baseTr : translate;
      });
    }

    // Actualizar parallax de vasos en personalización
    updateCupsParallax(vh);
  }

  window.addEventListener("scroll", function () {
    if (!pTicking) {
      pTicking = true;
      requestAnimationFrame(updateParallax);
    }
  }, { passive: true });

  /* ---------- Scroll-spy para navbar (solo si coexisten ambas vistas) ---------- */
  var navSpyTicking = false;
  function updateNavSpy() {
    navSpyTicking = false;
    var prod = document.getElementById("view-productos");
    var ini = document.getElementById("view-inicio");
    if (!prod || !ini) return;
    var rect = prod.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.4) {
      setActiveNav("productos");
    } else {
      setActiveNav("inicio");
    }
  }
  window.addEventListener("scroll", function () {
    if (!navSpyTicking) {
      navSpyTicking = true;
      requestAnimationFrame(updateNavSpy);
    }
  }, { passive: true });

  /* ---------- Navbar: ancho real para ubicar el globo del carrito ---------- */
  var nav = $("#navbar");
  function syncNavWidth() { document.documentElement.style.setProperty("--nav-w", nav.offsetWidth + "px"); }
  if ("ResizeObserver" in window) new ResizeObserver(syncNavWidth).observe(nav);
  window.addEventListener("resize", syncNavWidth);
  function syncChipOffset() { /* el top del sticky lo gestiona CSS por breakpoint */ }

  /* ---------- Reveal on scroll (IntersectionObserver) ---------- */
  var revealIO = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-visible"); revealIO.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }) : null;
  function observeReveals(root) {
    $$(".anim-slide-up, .anim-fade-in", root).forEach(function (el) {
      if (revealIO) revealIO.observe(el); else el.classList.add("is-visible");
    });
  }

  /* ---------- Chips + scroll-spy ---------- */
  var chipsTrack = $("#chips-track");
  var spyLock = 0, activeCat = null;
  function setActiveChip(id) {
    activeCat = id;
    $$(".chip", chipsTrack).forEach(function (c) {
      var on = c.dataset.cat === id;
      if (on) { c.setAttribute("aria-current", "true"); } else { c.removeAttribute("aria-current"); }
      if (on) {
        var target = c.offsetLeft - (chipsTrack.clientWidth - c.offsetWidth) / 2;
        chipsTrack.scrollTo({ left: target, behavior: reduceMotion ? "auto" : "smooth" });
      }
    });
  }
  function initChips() {
    if (!chipsTrack) return;
    var chipsBar = $("#chips-bar");
    function updateSticky() {
      if (!chipsBar) return;
      var isDesktop = window.innerWidth >= 768;
      var threshold = isDesktop ? 86 : 2;
      var isStuck = chipsBar.getBoundingClientRect().top <= threshold;
      chipsBar.classList.toggle("is-stuck", isStuck);
    }
    chipsTrack.addEventListener("click", function (e) {
      var chip = e.target.closest(".chip"); if (!chip) return;
      var sec = document.getElementById("cat-" + chip.dataset.cat);
      if (!sec) return;
      setActiveChip(chip.dataset.cat);
      spyLock = Date.now() + 900;
      sec.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    });
    var ticking = false;
    function spy() {
      ticking = false;
      updateSticky();
      if (Date.now() < spyLock) return;
      if (!chipsBar) return;
      var bar = chipsBar.getBoundingClientRect();
      var line = bar.bottom + 48, current = Cat.categories[0].id;
      $$(".category").forEach(function (s) { if (s.getBoundingClientRect().top <= line) current = s.dataset.cat; });
      if (current !== activeCat) setActiveChip(current);
    }
    window.addEventListener("scroll", function () {
      updateSticky();
      if (Date.now() < spyLock) { spyLock = Date.now() + 160; return; } /* scroll programático en curso: mantener el chip pulsado */
      if (!ticking) { ticking = true; requestAnimationFrame(spy); }
    }, { passive: true });
    window.addEventListener("resize", updateSticky, { passive: true });
    updateSticky();
    if (location.hash) {
      var targetId = location.hash.replace("#", "");
      var targetEl = document.getElementById(targetId) || document.getElementById("cat-" + targetId);
      if (targetEl) {
        var catId = targetEl.dataset.cat || targetId.replace("cat-", "");
        setActiveChip(catId);
        setTimeout(function () {
          targetEl.scrollIntoView({ behavior: "auto", block: "start" });
        }, 100);
      } else if (Cat.categories && Cat.categories.length) {
        setActiveChip(Cat.categories[0].id);
      }
    } else if (Cat.categories && Cat.categories.length) {
      setActiveChip(Cat.categories[0].id);
    }
  }

  /* ---------- Carrito: UI ---------- */
  var fab = $("#cart-fab"), badge = $("#cart-badge");
  var panel = $("#cart-panel"), list = $("#cart-list");
  var lastFocus = null;

  function renderFab(anim) {
    var n = Cart.count();
    if (n === 0 || !Cart.isActive()) { fab.hidden = true; return; }
    var wasHidden = fab.hidden;
    fab.hidden = false;
    badge.textContent = n;
    fab.setAttribute("aria-label", "Abrir lista de cotización (" + n + (n === 1 ? " producto" : " productos") + ")");
    fab.classList.remove("anim-cart-reveal", "anim-cart-bounce");
    if (anim) { void fab.offsetWidth; fab.classList.add(wasHidden ? "anim-cart-reveal" : "anim-cart-bounce"); }
  }
  function renderQuoteButtons() {
    $$("[data-quote]").forEach(function (b) {
      var inCart = Cart.has(b.dataset.quote);
      b.classList.toggle("is-added", inCart);
      var label = $("span", b), p = Cat.byId(b.dataset.quote);
      label.textContent = inCart ? "En tu lista" : "Cotizar";
      b.innerHTML = (inCart ? I.check : I.chat) + "<span>" + label.textContent + "</span>";
      b.setAttribute("aria-label", (inCart ? "En tu lista: " : "Cotizar ") + p.name);
    });
  }
  function renderPanel() {
    var items = Cart.items().map(Cat.byId).filter(Boolean);
    $("#cart-sub").textContent = items.length + (items.length === 1 ? " producto seleccionado" : " productos seleccionados");
    list.innerHTML = items.length ? items.map(function (p) {
      var mediaThumb = (p.missing || !p.img)
        ? '<div class="cart-item-placeholder">FALTA</div>'
        : '<img src="' + Cat.imgSrc(p) + '" alt="" width="56" height="56">';
      return '<li class="cart-item" data-id="' + p.id + '">' +
        mediaThumb +
        '<div class="cart-item-info"><p class="text-title-product">' + Cat.esc(p.name) + '</p><p class="text-specs">' + Cat.specs(p) + '</p></div>' +
        '<button class="cart-remove" type="button" data-remove="' + p.id + '" aria-label="Eliminar ' + Cat.esc(p.name) + '">' + I.trash + '</button></li>';
    }).join("") : '<li class="cart-empty text-body">Tu lista está vacía.</li>';
    var send = $("#cart-send");
    send.setAttribute("aria-disabled", items.length ? "false" : "true");
    send.style.pointerEvents = items.length ? "" : "none";
    send.style.opacity = items.length ? "" : ".5";
    send.href = items.length ? waUrl(multiMessage(items)) : "#";
    $("#cart-clear").hidden = !items.length;
  }

  Cart.onChange(function () {
    renderQuoteButtons(); renderPanel();
    if (panel.open && Cart.count() === 0) { panel.close(); }
    renderFab(false);
  });
  fab.addEventListener("click", function () { lastFocus = fab; renderPanel(); showModalSafe(panel); });
  list.addEventListener("click", function (e) {
    var b = e.target.closest("[data-remove]"); if (b) Cart.remove(b.dataset.remove);
  });
  $("#cart-clear").addEventListener("click", function () { Cart.clear(); });

  /* ---------- Modales: gestión de scroll y cierre ---------- */
  function syncBodyScrollLock() {
    var anyOpen = false;
    [decision, panel, detailModal].forEach(function (d) {
      if (d && d.open) anyOpen = true;
    });
    document.documentElement.classList.toggle("modal-open", anyOpen);
    document.body.classList.toggle("modal-open", anyOpen);
  }

  function showModalSafe(d) {
    if (!d) return;
    d.showModal();
    syncBodyScrollLock();
  }

  function wireDialog(d) {
    d.addEventListener("click", function (e) {
      if (e.target === d || e.target.closest("[data-close]")) d.close();
    });
    d.addEventListener("close", function () {
      syncBodyScrollLock();
    });
  }
  var decision = $("#decision-modal");
  var detailModal = $("#product-detail-modal");
  wireDialog(decision); wireDialog(panel);
  if (detailModal) wireDialog(detailModal);

  /* ---------- Pop-up Ficha de Producto con Tablas ---------- */
  var currentDetailProduct = null;
  function updateDetailListBtn() {
    var addBtn = $("#detail-add-list");
    if (!addBtn || !currentDetailProduct) return;
    var inCart = Cart.has(currentDetailProduct.id);
    addBtn.classList.toggle("is-added", inCart);
    addBtn.innerHTML = inCart ? (I.check + "<span>En tu lista</span>") : (I.plus + "<span>Agregar a mi lista</span>");
  }

  function openDetailModal(p, trigger) {
    if (!detailModal || !p) return;
    currentDetailProduct = p;
    lastFocus = trigger || document.activeElement;

    var catEl = $("#detail-category");
    if (catEl) catEl.textContent = p.category || "";

    var titleEl = $("#detail-title");
    if (titleEl) titleEl.textContent = p.name;

    var badgesEl = $("#detail-badges");
    if (badgesEl) {
      badgesEl.innerHTML = (p.badges || []).map(function (b) {
        return '<span class="detail-badge-pill">' + Cat.esc(b) + '</span>';
      }).join("");
    }

    var mediaEl = $("#detail-media");
    if (mediaEl) {
      if (p.missing || !p.img) {
        mediaEl.className = "detail-media detail-media--missing";
        mediaEl.innerHTML = '<span class="product-media-falta">FALTA</span>';
      } else {
        mediaEl.className = "detail-media";
        mediaEl.innerHTML = '<img src="' + Cat.imgSrc(p) + '" alt="' + Cat.esc(p.name) + '">';
      }
    }

    var descEl = $("#detail-description");
    if (descEl) descEl.textContent = p.description || "";

    var isRealTable = Boolean(p.isTable || p.id === "bolsas-sin-asa" || p.id === "bolsas-con-asa");
    detailModal.classList.toggle("is-table-view", isRealTable);

    var tableWrap = $("#detail-table-container");
    if (tableWrap) {
      if (isRealTable && p.table && p.table.rows && p.table.rows.length) {
        var ths = p.table.headers.map(function (h) { return '<th>' + Cat.esc(h) + '</th>'; }).join("");
        var trs = p.table.rows.map(function (row) {
          return '<tr>' + row.map(function (cell) { return '<td>' + Cat.esc(cell) + '</td>'; }).join("") + '</tr>';
        }).join("");
        tableWrap.innerHTML = '<div class="table-responsive"><table class="detail-table"><thead><tr>' + ths + '</tr></thead><tbody>' + trs + '</tbody></table></div>';
        tableWrap.hidden = false;
      } else {
        // Renderizar como lista de variantes con bullets de hojitas (según diseño PDF)
        var rows = (p.table && p.table.rows && p.table.rows.length) ? p.table.rows : [];
        if (!rows.length && p.shortSpecs) {
          rows = [[p.name, p.shortSpecs, ""]];
        }
        if (rows.length) {
          var bHtml = '<div class="detail-bullets-list">';
          rows.forEach(function (row) {
            var title = "";
            var specs = "";
            var pack = "";
            if (row.length >= 4) {
              title = row[0] + " " + row[1];
              specs = row[2];
              pack = row[3];
            } else if (row.length === 3) {
              title = row[0];
              specs = row[1];
              pack = row[2];
            } else if (row.length === 2) {
              title = row[0];
              var r1 = row[1] || "";
              if (/caja|paq|uds|bulto|kilo|unidades/i.test(r1)) {
                pack = r1;
              } else {
                specs = r1;
              }
            } else if (row.length === 1) {
              title = row[0];
            }

            if (pack) {
              pack = pack.replace(/•/g, '-').replace(/\bud(s)?\b(?!\.)/gi, 'uds.');
            }
            if (specs) {
              specs = specs.replace(/•/g, '-');
            }

            bHtml += '<div class="detail-bullet-item">';
            bHtml += '  <div class="detail-bullet-icon" aria-hidden="true">';
            bHtml += '    <img src="assets/svg/productos/hojitas_bullets.svg" alt="" class="bullet-leaf-icon">';
            bHtml += '  </div>';
            bHtml += '  <div class="detail-bullet-content">';
            if (title) bHtml += '    <h4 class="detail-bullet-title">' + Cat.esc(title) + '</h4>';
            if (specs) bHtml += '    <p class="detail-bullet-specs">' + Cat.esc(specs) + '</p>';
            if (pack)  bHtml += '    <p class="detail-bullet-pack">' + Cat.esc(pack) + '</p>';
            bHtml += '  </div>';
            bHtml += '</div>';
          });
          bHtml += '</div>';
          tableWrap.innerHTML = bHtml;
          tableWrap.hidden = false;
        } else {
          tableWrap.innerHTML = "";
          tableWrap.hidden = true;
        }
      }
    }

    var inner = detailModal.querySelector(".detail-inner");
    if (inner) inner.scrollTop = 0;

    updateDetailListBtn();
    showModalSafe(detailModal);
  }

  // Clic en tarjeta para abrir ficha técnica (pop-up)
  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-quote]") || e.target.closest("[data-close]") || e.target.closest("#decision-modal") || e.target.closest("#cart-panel") || e.target.closest("#product-detail-modal")) return;
    var detailEl = e.target.closest("[data-detail]");
    if (detailEl) {
      var p = Cat.byId(detailEl.dataset.detail);
      if (p) openDetailModal(p, detailEl);
      return;
    }
    var card = e.target.closest(".product-card");
    if (card && card.dataset.id) {
      var pCard = Cat.byId(card.dataset.id);
      if (pCard) openDetailModal(pCard, card);
    }
  });

  // Accesibilidad por teclado (Enter / Espacio)
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      if (e.target.closest("[data-quote]") || e.target.closest("[data-close]")) return;
      var detailEl = e.target.closest("[data-detail]");
      if (detailEl) {
        e.preventDefault();
        var p = Cat.byId(detailEl.dataset.detail);
        if (p) openDetailModal(p, detailEl);
      }
    }
  });

  // Apertura automática si viene parámetro ?open=id en la URL
  try {
    var urlParams = new URLSearchParams(window.location.search);
    var autoOpenId = urlParams.get("open");
    if (autoOpenId) {
      setTimeout(function () {
        var pAuto = Cat.byId(autoOpenId);
        if (pAuto) openDetailModal(pAuto);
      }, 200);
    }
  } catch (err) {}

  var detailQuoteWa = $("#detail-quote-wa");
  if (detailQuoteWa) {
    detailQuoteWa.addEventListener("click", function () {
      if (!currentDetailProduct) return;
      var msg = "Hola, estoy interesado en cotizar " + currentDetailProduct.name + (currentDetailProduct.shortSpecs ? " (" + currentDetailProduct.shortSpecs + ")" : "");
      openWhatsApp(waUrl(msg));
    });
  }

  var detailAddList = $("#detail-add-list");
  if (detailAddList) {
    detailAddList.addEventListener("click", function () {
      if (!currentDetailProduct) return;
      if (Cart.has(currentDetailProduct.id)) {
        Cart.remove(currentDetailProduct.id);
        toast("Producto eliminado de tu lista");
      } else {
        addToList(currentDetailProduct);
      }
      updateDetailListBtn();
    });
  }

  /* ---------- Flujo "Cotizar" ---------- */
  var pending = null;
  function addToList(p) {
    var wasEmpty = Cart.count() === 0;
    var added = Cart.add(p.id);
    renderFab(true);
    toast(added ? "Producto agregado a tu lista de cotización" : "Este producto ya está en tu lista");
    return wasEmpty;
  }
  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-quote]"); if (!btn) return;
    var p = Cat.byId(btn.dataset.quote); if (!p) return;
    if (Cart.isActive()) { addToList(p); return; }
    pending = p; lastFocus = btn;
    if (p.missing || !p.img) {
      $("#decision-img").style.display = "none";
    } else {
      $("#decision-img").style.display = "";
      $("#decision-img").src = Cat.imgSrc(p);
      $("#decision-img").alt = "";
    }
    $("#decision-name").textContent = p.name;
    $("#decision-specs").textContent = Cat.specs(p);
    showModalSafe(decision);
  });
  $("#decision-now").addEventListener("click", function () {
    if (!pending) return;
    var p = pending; pending = null; decision.close();
    openWhatsApp(waUrl(singleMessage(p)));
  });
  $("#decision-later").addEventListener("click", function () {
    if (!pending) return;
    var p = pending; pending = null; decision.close();
    Cart.activate(); addToList(p);
  });
  decision.addEventListener("close", function () { pending = null; });
  [decision, panel, detailModal].forEach(function (d) {
    if (!d) return;
    d.addEventListener("close", function () { if (lastFocus && document.contains(lastFocus) && !lastFocus.hidden) lastFocus.focus({ preventScroll: true }); });
  });

  /* ---------- PDF ---------- */
  var pdfBtn = $("#btn-pdf");
  pdfBtn.addEventListener("click", function () {
    if (pdfBtn.getAttribute("aria-busy") === "true") return;
    pdfBtn.setAttribute("aria-busy", "true");
    window.EcoPDF.generate().catch(function (err) {
      console.error(err);
      toast("No se pudo generar el PDF. Abre el sitio desde un servidor local o web (no file://).");
    }).then(function () { pdfBtn.removeAttribute("aria-busy"); });
  });

  /* ---------- Init ---------- */
  Cat.render();
  initChips();
  initTrimPath();
  observeReveals(document);
  renderQuoteButtons(); renderPanel(); renderFab(false);
  syncNavWidth();
  routeFromHash();
})();

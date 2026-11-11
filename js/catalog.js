/* ==========================================================================
   ECOCOSTA — Render del catálogo: chips, categorías y tarjetas
   ========================================================================== */
(function () {
  "use strict";
  var CFG = window.ECOCOSTA_CONFIG || {};
  var cats = window.ECOCOSTA_DATA.categories;
  var I = window.ECO_ICONS;
  var index = {};
  cats.forEach(function (c) { c.products.forEach(function (p) { p.category = c.name; index[p.id] = p; }); });

  function esc(s) { return String(s || "").replace(/[&<>"']/g, function (m) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]; }); }
  function pad(n) { return n < 10 ? "0" + n : String(n); }
  function waUrl(text) {
    var phone = (CFG && CFG.whatsappNumber) ? CFG.whatsappNumber : "";
    return "https://wa.me/" + phone + "?text=" + encodeURIComponent(text || "");
  }
  function specs(p) {
    if (p.shortSpecs) return p.shortSpecs;
    return "Caja: " + p.caja + " uds. - Paq: " + p.paq + " uds.";
  }
  function src(p) {
    if (!p.img || p.missing) return "";
    return "assets/img/" + p.img + ".webp";
  }

  function cardHTML(p, i) {
    var isMissing = p.missing || !p.img;
    var mediaContent = isMissing
      ? '<span class="product-media-falta" aria-label="Foto pendiente">FALTA</span>'
      : '<img src="' + src(p) + '" alt="' + esc(p.name) + '" loading="lazy" decoding="async" width="400" height="400">';

    return '<article class="product-card anim-slide-up" style="--delay:' + ((i % 4) * 0.05).toFixed(2) + 's" data-id="' + p.id + '">' +
      '<div class="product-media' + (isMissing ? ' product-media--missing' : '') + '" role="button" tabindex="0" data-detail="' + p.id + '" aria-label="Ver ficha técnica de ' + esc(p.name) + '">' +
      mediaContent +
      '</div>' +
      '<div class="product-body">' +
      '<h3 class="text-title-product" role="button" tabindex="0" data-detail="' + p.id + '" title="Clic para ver ficha técnica">' + esc(p.name) + '</h3>' +
      '<p class="text-specs">' + esc(specs(p)) + '</p>' +
      '<button class="btn-base btn-quote" type="button" data-quote="' + p.id + '" aria-label="Cotizar ' + esc(p.name) + '">' + I.chat + '<span>Cotizar</span></button>' +
      '</div></article>';
  }

  /* Plantilla reutilizable: Tarjeta personalización */
  function personalizationCardHTML(cfg, i) {
    var title = (cfg && cfg.title) ? cfg.title : "";
    var msg = (cfg && cfg.whatsappMessage) ? cfg.whatsappMessage : ("Quiero cotizar " + title);
    var art = (cfg && cfg.icon) ? cfg.icon : "assets/svg/design.svg";
    var delay = ((i % 4) * 0.05).toFixed(2);
    return '<article class="product-card product-card--personalizacion anim-slide-up" style="--delay:' + delay + 's">' +
      '<div class="product-media personalizacion-media" aria-hidden="true">' +
      '<img class="personalizacion-card-art" src="' + esc(art) + '" alt="" width="1523" height="2125" loading="lazy" decoding="async">' +
      '</div>' +
      '<div class="product-body personalizacion-card-body">' +
      '<h3 class="personalizacion-card-title">' + esc(title) + '</h3>' +
      '<a class="btn-base btn-quote" href="' + esc(waUrl(msg)) + '" target="_blank" rel="noopener noreferrer" aria-label="Cotizar: ' + esc(title) + '">' +
      I.chat + '<span>Cotizar</span></a>' +
      '</div>' +
      '</article>';
  }

  function renderPulpaBanner(c, n) {
    return '<div class="cat-banner-wrap">' +
      '<div class="cat-banner cat-banner--pulpa anim-slide-up" role="region" aria-label="Categoría Pulpa caña de azúcar">' +
      '<div class="cat-banner-grid">' +
      '<div class="cat-banner-visual">' +
      '<img src="assets/svg/banners/pulpa_sticker_1.svg" class="cat-banner-sticker cat-banner-sticker--top" alt="" aria-hidden="true">' +
      '<img src="assets/img/banners/pulpa_banner_composite.webp" class="cat-banner-img" alt="Empaques de Pulpa de caña de azúcar" width="740" height="688">' +
      '<img src="assets/svg/banners/pulpa_sticker_2.svg" class="cat-banner-sticker cat-banner-sticker--bottom" alt="" aria-hidden="true">' +
      '</div>' +
      '<div class="cat-banner-center">' +
      '<span class="cat-banner-idx">' + pad(n + 1) + '</span>' +
      '<h2 class="cat-banner-title" id="h-' + c.id + '">' +
      '<span>Pulpa caña</span>' +
      '<span>de azúcar</span>' +
      '</h2>' +
      '<span class="cat-banner-count">' + c.products.length + ' referencias</span>' +
      '</div>' +
      '<div class="cat-banner-features">' +
      '<ul class="cat-banner-list">' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/pulpa_bullet_beige.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Biodegradables y compostables</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/pulpa_bullet_beige.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Tiempo de biodegradación: Aprox 180 días</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/pulpa_bullet_beige.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Aptos para alimentos fríos y calientes</span>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  function renderMaizBanner(c, n) {
    return '<div class="cat-banner-wrap cat-banner-wrap--maiz">' +
      '<div class="cat-banner-stickers" aria-hidden="true">' +
      '<img src="assets/svg/banners/Corn 1.svg" class="cat-banner-sticker cat-banner-sticker--maiz-top" alt="">' +
      '<img src="assets/svg/banners/Corn 2.svg" class="cat-banner-sticker cat-banner-sticker--maiz-bottom" alt="">' +
      '</div>' +
      '<div class="cat-banner cat-banner--maiz anim-slide-up" role="region" aria-label="Categoría Almidón de maíz">' +
      '<div class="cat-banner-grid cat-banner-grid--maiz">' +
      '<div class="cat-banner-visual cat-banner-visual--left">' +
      '<img src="assets/img/banners/Almidon_banner_izquierdo.webp" class="cat-banner-img cat-banner-img--left" alt="Portacomida de almidón de maíz" width="2141" height="2612" loading="lazy" decoding="async">' +
      '</div>' +
      '<div class="cat-banner-center cat-banner-center--maiz">' +
      '<h2 class="cat-banner-title cat-banner-title--maiz" id="h-' + c.id + '">' +
      '<span>Almidón</span>' +
      '<span>de maíz</span>' +
      '</h2>' +
      '<span class="cat-banner-count cat-banner-count--maiz">' + c.products.length + ' referencias</span>' +
      '<div class="cat-banner-features cat-banner-features--maiz">' +
      '<ul class="cat-banner-list cat-banner-list--maiz">' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Tiempo de biodegradación: Aprox 180 días</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Resistentes al agua y aceite</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>No libera olores ni sabores</span>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '<div class="cat-banner-visual cat-banner-visual--right">' +
      '<img src="assets/img/banners/Almidon_banner_derecho.webp" class="cat-banner-img cat-banner-img--right" alt="Portacomida con división de almidón de maíz" width="1856" height="1726" loading="lazy" decoding="async">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  function renderBolsasBanner(c, n) {
    return '<div class="cat-banner-wrap cat-banner-wrap--bolsas">' +
      '<div class="cat-banner-stickers" aria-hidden="true">' +
      '<img src="assets/svg/banners/bolsas_sticker_1.svg" class="cat-banner-sticker cat-banner-sticker--bolsas-top" alt="">' +
      '<img src="assets/svg/banners/bolsas_sticker_2.svg" class="cat-banner-sticker cat-banner-sticker--bolsas-bottom" alt="">' +
      '</div>' +
      '<div class="cat-banner cat-banner--bolsas anim-slide-up" role="region" aria-label="Categoría ' + esc(c.name) + '">' +
      '<div class="cat-banner-grid cat-banner-grid--bolsas">' +
      '<div class="cat-banner-left cat-banner-left--bolsas">' +
      '<h2 class="cat-banner-title cat-banner-title--bolsas" id="h-' + c.id + '">' +
      '<span>Bolsas</span>' +
      '<span>papel kraft</span>' +
      '</h2>' +
      '<span class="cat-banner-count cat-banner-count--bolsas">' + c.products.length + ' referencias</span>' +
      '</div>' +
      '<div class="cat-banner-center cat-banner-center--bolsas">' +
      '<ul class="cat-banner-list cat-banner-list--bolsas">' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Biodegradables</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Resistentes</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Con y sin Asa</span>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '<div class="cat-banner-visual cat-banner-visual--right cat-banner-visual--bolsas">' +
      '<img src="assets/img/banners/bolsas_kraft_banner.webp" class="cat-banner-img cat-banner-img--bolsas" alt="Bolsas de papel kraft" width="738" height="690" loading="lazy" decoding="async">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  function renderVasosBanner(c, n) {
    return '<div class="cat-banner-wrap cat-banner-wrap--vasos">' +
      '<div class="cat-banner cat-banner--vasos anim-slide-up" role="region" aria-label="Categoría ' + esc(c.name) + '">' +
      '<div class="cat-banner-grid cat-banner-grid--vasos">' +
      '<div class="cat-banner-visual cat-banner-visual--vasos">' +
      '<img src="assets/img/banners/vasos_contenedores_banner.webp" class="cat-banner-img cat-banner-img--vasos" alt="Vasos y contenedores ecológicos" width="1200" height="1233" loading="lazy" decoding="async">' +
      '</div>' +
      '<div class="cat-banner-content cat-banner-content--vasos">' +
      '<h2 class="cat-banner-title cat-banner-title--vasos" id="h-' + c.id + '">' +
      '<span>Vasos y</span>' +
      '<span>contenedores</span>' +
      '</h2>' +
      '<span class="cat-banner-count cat-banner-count--vasos">' + c.products.length + ' referencias</span>' +
      '<ul class="cat-banner-list cat-banner-list--vasos">' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Aptos para bebidas calientes y frías</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Se pueden personalizar</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Higiénicos y seguros</span>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="cat-banner-stickers" aria-hidden="true">' +
      '<img src="assets/svg/banners/vasos_sticker_1.svg" class="cat-banner-sticker cat-banner-sticker--vasos-bottom" alt="">' +
      '<img src="assets/svg/banners/vasos_sticker_2.svg" class="cat-banner-sticker cat-banner-sticker--vasos-top" alt="">' +
      '</div>' +
      '</div>';
  }

  function renderCartonBanner(c, n) {
    return '<div class="cat-banner-wrap cat-banner-wrap--carton">' +
      '<div class="cat-banner-stickers" aria-hidden="true">' +
      '<img src="assets/svg/banners/carton_sticker_sheets.svg" class="cat-banner-sticker cat-banner-sticker--carton-sheets" alt="">' +
      '<img src="assets/svg/banners/carton_sticker_box.svg" class="cat-banner-sticker cat-banner-sticker--carton-box cat-banner-sticker--carton-box-desktop" alt="">' +
      '</div>' +
      '<div class="cat-banner cat-banner--carton anim-slide-up" role="region" aria-label="Categoría ' + esc(c.name) + '">' +
      '<div class="cat-banner-grid cat-banner-grid--carton">' +
      '<div class="cat-banner-content cat-banner-content--carton">' +
      '<h2 class="cat-banner-title cat-banner-title--carton" id="h-' + c.id + '">' +
      '<span>Empaques</span>' +
      '<span>de cartón</span>' +
      '</h2>' +
      '<div class="cat-banner-badge-wrap--carton">' +
      '<span class="cat-banner-count cat-banner-count--carton">' + c.products.length + ' referencias</span>' +
      '<img src="assets/svg/banners/carton_sticker_box.svg" class="cat-banner-sticker cat-banner-sticker--carton-box cat-banner-sticker--carton-box-mobile" alt="" aria-hidden="true">' +
      '</div>' +
      '<ul class="cat-banner-list cat-banner-list--carton">' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/carton_bullet_brown.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Ideales para empacar tus productos</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/carton_bullet_brown.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Se pueden personalizar</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/carton_bullet_brown.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Variedad de diseños y materiales</span>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '<div class="cat-banner-visual cat-banner-visual--right cat-banner-visual--carton">' +
      '<img src="assets/img/banners/empaques_carton_banner.webp" class="cat-banner-img cat-banner-img--carton" alt="Empaques de cartón ecológicos" width="2257" height="2916" loading="lazy" decoding="async">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  function renderSeedpackBanner(c, n) {
    return '<div class="cat-banner-wrap cat-banner-wrap--seedpack">' +
      '<div class="cat-banner-stickers" aria-hidden="true">' +
      '<img src="assets/svg/banners/seedpack_sticker_sheets.svg" class="cat-banner-sticker cat-banner-sticker--seedpack-sheets" alt="">' +
      '<img src="assets/svg/banners/seedpack_sticker_cane.svg" class="cat-banner-sticker cat-banner-sticker--seedpack-cane" alt="">' +
      '</div>' +
      '<div class="cat-banner cat-banner--seedpack anim-slide-up" role="region" aria-label="Categoría ' + esc(c.name) + '">' +
      '<div class="cat-banner-grid cat-banner-grid--seedpack">' +
      '<div class="cat-banner-content cat-banner-content--seedpack">' +
      '<h2 class="cat-banner-title cat-banner-title--seedpack" id="h-' + c.id + '">' +
      '<span>Seedpack</span>' +
      '</h2>' +
      '<ul class="cat-banner-list cat-banner-list--seedpack">' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Fabricados con papel 100% de caña de azúcar.</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Resistentes a grasas</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>No altera el sabor original de los alimentos</span>' +
      '</li>' +
      '</ul>' +
      '<div class="cat-banner-product-detail cat-banner-product-detail--seedpack">' +
      '<span class="cat-banner-product-name">Nombre del producto</span>' +
      '<span class="cat-banner-product-desc">Descripción breve</span>' +
      '</div>' +
      '</div>' +
      '<div class="cat-banner-visual cat-banner-visual--right cat-banner-visual--seedpack">' +
      '<img src="assets/img/banners/seedpack_banner.webp" class="cat-banner-img cat-banner-img--seedpack" alt="Empaques Seedpack de caña de azúcar" width="1200" height="945" loading="lazy" decoding="async">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  function renderBowlsBanner(c, n) {
    return '<div class="cat-banner-wrap cat-banner-wrap--bowls">' +
      '<div class="cat-banner-stickers" aria-hidden="true">' +
      '<img src="assets/svg/banners/bowl_sticker_cup.svg" class="cat-banner-sticker cat-banner-sticker--bowls-cup" alt="">' +
      '<img src="assets/svg/banners/bowl_sticker_steam.svg" class="cat-banner-sticker cat-banner-sticker--bowls-steam" alt="">' +
      '</div>' +
      '<div class="cat-banner cat-banner--bowls anim-slide-up" role="region" aria-label="Categoría ' + esc(c.name) + '">' +
      '<div class="cat-banner-grid cat-banner-grid--bowls">' +
      '<div class="cat-banner-content cat-banner-content--bowls">' +
      '<h2 class="cat-banner-title cat-banner-title--bowls" id="h-' + c.id + '">' +
      '<span>Bowl y</span>' +
      '<span>tazones</span>' +
      '</h2>' +
      '<div class="cat-banner-badge-wrap--bowls">' +
      '<span class="cat-banner-count cat-banner-count--bowls">' + c.products.length + ' referencias</span>' +
      '</div>' +
      '<ul class="cat-banner-list cat-banner-list--bowls">' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Ideales para domicilio</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Son apilables entre ellos</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Se pueden usar para llevar directamente a la mesa</span>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '<div class="cat-banner-visual cat-banner-visual--right cat-banner-visual--bowls">' +
      '<img src="assets/img/banners/bowl_contenedores_banner.webp" class="cat-banner-img cat-banner-img--bowls" alt="Bowls y contenedores ecológicos" width="1200" height="966" loading="lazy" decoding="async">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  function renderPitillosBanner(c, n) {
    return '<div class="cat-banner-wrap cat-banner-wrap--pitillos">' +
      '<div class="cat-banner-stickers" aria-hidden="true">' +
      '<img src="assets/svg/banners/pitillos_sticker_elbow.svg" class="cat-banner-sticker cat-banner-sticker--pitillos-elbow" alt="">' +
      '<img src="assets/svg/banners/pitillos_sticker_bend.svg" class="cat-banner-sticker cat-banner-sticker--pitillos-bend" alt="">' +
      '</div>' +
      '<div class="cat-banner cat-banner--pitillos anim-slide-up" role="region" aria-label="Categoría ' + esc(c.name) + '">' +
      '<div class="cat-banner-grid cat-banner-grid--pitillos">' +
      '<div class="cat-banner-visual cat-banner-visual--left cat-banner-visual--pitillos">' +
      '<img src="assets/img/banners/Pitillos_banner.webp" class="cat-banner-img cat-banner-img--pitillos" alt="Pitillos ecológicos" width="1200" height="1667" loading="lazy" decoding="async">' +
      '</div>' +
      '<div class="cat-banner-content cat-banner-content--pitillos">' +
      '<h2 class="cat-banner-title cat-banner-title--pitillos" id="h-' + c.id + '">' +
      '<span>Pitillos</span>' +
      '<span>ecológicos</span>' +
      '</h2>' +
      '<div class="cat-banner-badge-wrap--pitillos">' +
      '<span class="cat-banner-count cat-banner-count--pitillos">' + c.products.length + ' referencias</span>' +
      '</div>' +
      '<ul class="cat-banner-list cat-banner-list--pitillos">' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>100% Biodegradables y compostables</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Disponibles en empaque individual</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Conservan su forma en la bebida</span>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  function renderCubiertosBanner(c, n) {
    return '<div class="cat-banner-wrap cat-banner-wrap--cubiertos">' +
      '<div class="cat-banner-stickers" aria-hidden="true">' +
      '<img src="assets/svg/banners/Spoon_sticker.svg" class="cat-banner-sticker cat-banner-sticker--cubiertos-spoon" alt="">' +
      '<img src="assets/svg/banners/fork_sticker.svg" class="cat-banner-sticker cat-banner-sticker--cubiertos-fork" alt="">' +
      '</div>' +
      '<div class="cat-banner cat-banner--cubiertos anim-slide-up" role="region" aria-label="Categoría ' + esc(c.name) + '">' +
      '<div class="cat-banner-grid cat-banner-grid--cubiertos">' +
      '<div class="cat-banner-content cat-banner-content--cubiertos">' +
      '<h2 class="cat-banner-title cat-banner-title--cubiertos" id="h-' + c.id + '">' +
      '<span>Cubiertos</span>' +
      '</h2>' +
      '<div class="cat-banner-badge-wrap--cubiertos">' +
      '<span class="cat-banner-count cat-banner-count--cubiertos">' + c.products.length + ' referencias</span>' +
      '</div>' +
      '<ul class="cat-banner-list cat-banner-list--cubiertos">' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Tiempo de biodegradación: Aprox 180 días</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>Resistentes al agua y aceite</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>No libera olores ni sabores</span>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '<div class="cat-banner-visual cat-banner-visual--right cat-banner-visual--cubiertos">' +
      '<img src="assets/img/banners/Cubiertos_banner.webp" class="cat-banner-img cat-banner-img--cubiertos" alt="Cubiertos ecológicos" width="1200" height="1950" loading="lazy" decoding="async">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  function renderServilletasBanner(c, n) {
    return '<div class="cat-banner-wrap cat-banner-wrap--servilletas">' +
      '<div class="cat-banner-stickers" aria-hidden="true">' +
      '<img src="assets/svg/banners/servilletas_sticker_folded.svg" class="cat-banner-sticker cat-banner-sticker--servilletas-folded" alt="">' +
      '<img src="assets/svg/banners/servilletas_sticker_dispenser.svg" class="cat-banner-sticker cat-banner-sticker--servilletas-dispenser" alt="">' +
      '</div>' +
      '<div class="cat-banner cat-banner--servilletas anim-slide-up" role="region" aria-label="Categoría ' + esc(c.name) + '">' +
      '<div class="cat-banner-grid cat-banner-grid--servilletas">' +
      '<div class="cat-banner-content cat-banner-content--servilletas">' +
      '<h2 class="cat-banner-title cat-banner-title--servilletas" id="h-' + c.id + '">' +
      '<span>Servilletas</span>' +
      '</h2>' +
      '<div class="cat-banner-badge-wrap--servilletas">' +
      '<span class="cat-banner-count cat-banner-count--servilletas">' + c.products.length + ' referencias</span>' +
      '</div>' +
      '</div>' +
      '<div class="cat-banner-visual cat-banner-visual--right cat-banner-visual--servilletas">' +
      '<img src="assets/img/banners/Servilletas_banner.webp" class="cat-banner-img cat-banner-img--servilletas" alt="Servilletas ecológicas" width="1200" height="1059" loading="lazy" decoding="async">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  function renderAccesoriosBanner(c, n) {
    return '<div class="cat-banner-wrap cat-banner-wrap--accesorios">' +
      '<div class="cat-banner-stickers" aria-hidden="true">' +
      '<img src="assets/svg/banners/accesorios_sticker_spoon.svg" class="cat-banner-sticker cat-banner-sticker--accesorios-spoon" alt="">' +
      '<img src="assets/svg/banners/accesorios_sticker_mug.svg" class="cat-banner-sticker cat-banner-sticker--accesorios-mug" alt="">' +
      '</div>' +
      '<div class="cat-banner cat-banner--accesorios anim-slide-up" role="region" aria-label="Categoría ' + esc(c.name) + '">' +
      '<div class="cat-banner-grid cat-banner-grid--accesorios">' +
      '<div class="cat-banner-visual cat-banner-visual--left cat-banner-visual--accesorios">' +
      '<img src="assets/img/banners/Accesorios_banner.webp" class="cat-banner-img cat-banner-img--accesorios" alt="Accesorios y utensilios ecológicos" width="1200" height="1200" loading="lazy" decoding="async">' +
      '</div>' +
      '<div class="cat-banner-content cat-banner-content--accesorios">' +
      '<h2 class="cat-banner-title cat-banner-title--accesorios" id="h-' + c.id + '">' +
      '<span>Accesorios</span>' +
      '<span>y utencilios</span>' +
      '</h2>' +
      '<div class="cat-banner-badge-wrap--accesorios">' +
      '<span class="cat-banner-count cat-banner-count--accesorios">' + c.products.length + ' referencias</span>' +
      '</div>' +
      '<ul class="cat-banner-list cat-banner-list--accesorios">' +
      '<li class="cat-banner-item">' +
      '<span>Diseños atractivos</span>' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<span>Aptos para contacto con Alimentos</span>' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<span>No liberan olores ni sabores</span>' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  function renderVasosUBanner(c, n) {
    return '<div class="cat-banner-wrap cat-banner-wrap--vasosenu">' +
      '<div class="cat-banner-stickers" aria-hidden="true">' +
      '<img src="assets/svg/banners/vasosenu_sticker_straw_cup.svg" class="cat-banner-sticker cat-banner-sticker--vasosenu-straw" alt="">' +
      '<img src="assets/svg/banners/vasosenu_sticker_glass.svg" class="cat-banner-sticker cat-banner-sticker--vasosenu-glass" alt="">' +
      '</div>' +
      '<div class="cat-banner cat-banner--vasosenu anim-slide-up" role="region" aria-label="Categoría ' + esc(c.name) + '">' +
      '<div class="cat-banner-grid cat-banner-grid--vasosenu">' +
      '<div class="cat-banner-visual cat-banner-visual--left cat-banner-visual--vasosenu">' +
      '<img src="assets/img/banners/vasosenu_banner.webp" class="cat-banner-img cat-banner-img--vasosenu" alt="Vasos en U ecológicos" width="1200" height="1178" loading="lazy" decoding="async">' +
      '</div>' +
      '<div class="cat-banner-content cat-banner-content--vasosenu">' +
      '<h2 class="cat-banner-title cat-banner-title--vasosenu" id="h-' + c.id + '">' +
      '<span>Vasos en U</span>' +
      '</h2>' +
      '<div class="cat-banner-badge-wrap--vasosenu">' +
      '<span class="cat-banner-count cat-banner-count--vasosenu">' + c.products.length + ' referencias</span>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }


  function renderOtrosBanner(c, n) {
    return '<div class="cat-banner-wrap cat-banner-wrap--otros">' +
      '<div class="cat-banner cat-banner--otros anim-slide-up" role="region" aria-label="Categoría ' + esc(c.name) + '">' +
      '<div class="cat-banner-grid cat-banner-grid--otros">' +
      '<div class="cat-banner-visual cat-banner-visual--left cat-banner-visual--otros">' +
      '<img src="assets/img/banners/Otros.webp" class="cat-banner-img cat-banner-img--otros" alt="Otros empaques y vasos complementarios" width="1200" height="884" loading="lazy" decoding="async">' +
      '</div>' +
      '<div class="cat-banner-content cat-banner-content--otros">' +
      '<h2 class="cat-banner-title cat-banner-title--otros" id="h-' + c.id + '">' +
      '<span>Otros</span>' +
      '</h2>' +
      '<ul class="cat-banner-list cat-banner-list--otros">' +
      '<li class="cat-banner-item"><span>Bandejas darnel de plasticos</span><img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true"></li>' +
      '<li class="cat-banner-item"><span>Vasos plasticos gold</span><img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true"></li>' +
      '<li class="cat-banner-item"><span>Portacomidas bio de icopor</span><img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true"></li>' +
      '<li class="cat-banner-item"><span>Platos hondos negros con tapa de plasticos</span><img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true"></li>' +
      '<li class="cat-banner-item"><span>Vasos murano</span><img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true"></li>' +
      '<li class="cat-banner-item"><span>Copas venecia</span><img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true"></li>' +
      '</ul>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  function renderKitBanner(c, n) {
    return '<div class="cat-banner-wrap cat-banner-wrap--kit">' +
      '<div class="cat-banner cat-banner--kit anim-slide-up" role="region" aria-label="Categoría ' + esc(c.name) + '">' +
      '<div class="cat-banner-grid cat-banner-grid--kit">' +
      '<div class="cat-banner-content cat-banner-content--kit">' +
      '<h2 class="cat-banner-title cat-banner-title--kit" id="h-' + c.id + '">' +
      '<span>Kit</span>' +
      '<span>ecológico</span>' +
      '</h2>' +
      '<p class="cat-banner-subtitle--kit">Incluye:</p>' +
      '<ul class="cat-banner-list cat-banner-list--kit">' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>20 PlatosGrandes</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>20 Platos Pequeños</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>20 Vasos 9oz</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>20 Tenedores</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>20 Cuchillos</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>20 Tenedor</span>' +
      '</li>' +
      '<li class="cat-banner-item">' +
      '<img src="assets/svg/banners/maiz_bullet_white.svg" alt="" class="cat-banner-bullet" aria-hidden="true">' +
      '<span>20 Servilletas</span>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '<div class="cat-banner-visual cat-banner-visual--right cat-banner-visual--kit">' +
      '<img src="assets/img/banners/kir ecologico.webp" class="cat-banner-img cat-banner-img--kit" alt="Kit ecológico" width="1200" height="922" loading="lazy" decoding="async">' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
  }

  function render() {
    var chips = document.getElementById("chips-track");
    var root = document.getElementById("catalog-root");
    if (!chips || !root) return;
    chips.innerHTML = cats.map(function (c) {
      return '<button class="chip" type="button" role="listitem" data-cat="' + c.id + '">' + esc(c.name) + '</button>';
    }).join("");

    root.innerHTML = cats.map(function (c, n) {
      var cards = c.products.map(cardHTML);
      if (c.personalizationCard) {
        cards.push(personalizationCardHTML(c.personalizationCard, c.products.length));
      }
      var body = cards.length
        ? cards.join("")
        : '<div class="empty-category">' + I.seed + '<p class="text-subtitle">Próximamente: estamos preparando las fotos y fichas de esta categoría.</p></div>';

      var headerHTML = (c.id === "pulpa-cana")
        ? renderPulpaBanner(c, n)
        : (c.id === "almidon-maiz")
          ? renderMaizBanner(c, n)
          : (c.id === "bolsas-craft")
            ? renderBolsasBanner(c, n)
            : (c.id === "vasos-contenedores")
              ? renderVasosBanner(c, n)
              : (c.id === "empaques-carton")
                ? renderCartonBanner(c, n)
                : (c.id === "seed-pack")
                  ? renderSeedpackBanner(c, n)
                  : (c.id === "bowl-tazones")
                    ? renderBowlsBanner(c, n)
                    : (c.id === "pitillos-ecologicos")
                      ? renderPitillosBanner(c, n)
                      : (c.id === "cubiertos")
                        ? renderCubiertosBanner(c, n)
                        : (c.id === "accesorios-utensilios")
                          ? renderAccesoriosBanner(c, n)
                          : (c.id === "servilletas")
                            ? renderServilletasBanner(c, n)
                            : (c.id === "vasos-u")
                              ? renderVasosUBanner(c, n)
                              : (c.id === "otros")
                                ? renderOtrosBanner(c, n)
                                : (c.id === "kit-ecologico")
                                  ? renderKitBanner(c, n)
                                  : '<div class="category-head anim-slide-up">' +
                                  '<span class="category-idx">' + pad(n + 1) + '</span>' +
                                  '<h2 class="text-title-section" id="h-' + c.id + '">' + esc(c.name) + '</h2>' +
                                  '<span class="category-count">' + (c.products.length ? c.products.length + ' referencias' : 'Próximamente') + '</span>' +
                                  '<p class="text-body category-blurb">' + esc(c.blurb) + '</p>' +
                                  '</div>';

      var gridHTML = ((c.id === "seed-pack" || c.id === "otros" || c.id === "kit-ecologico") && !c.personalizationCard)
        ? ''
        : '<div class="product-grid">' + body + '</div>';

      return '<section class="category" id="cat-' + c.id + '" data-cat="' + c.id + '" aria-labelledby="h-' + c.id + '">' +
        headerHTML +
        gridHTML + '</section>';
    }).join("");
  }

  window.EcoCatalog = { categories: cats, byId: function (id) { return index[id]; }, specs: specs, imgSrc: src, esc: esc, render: render, personalizationCardHTML: personalizationCardHTML, renderCartonBanner: renderCartonBanner, renderSeedpackBanner: renderSeedpackBanner, renderBowlsBanner: renderBowlsBanner, renderPitillosBanner: renderPitillosBanner, renderCubiertosBanner: renderCubiertosBanner, renderServilletasBanner: renderServilletasBanner, renderAccesoriosBanner: renderAccesoriosBanner, renderVasosUBanner: renderVasosUBanner, renderOtrosBanner: renderOtrosBanner, renderKitBanner: renderKitBanner };
})();

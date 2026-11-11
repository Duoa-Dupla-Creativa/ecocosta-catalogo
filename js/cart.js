/* ==========================================================================
   ECOCOSTA — Estado del carrito de interés (sin cantidades ni precios)
   - ecocosta_cart_items  : array de ids de producto
   - ecocosta_cart_active : "1" cuando el usuario eligió "Seguir viendo"
   ========================================================================== */
(function () {
  "use strict";
  var KEY_ITEMS = "ecocosta_cart_items";
  var KEY_ACTIVE = "ecocosta_cart_active";
  var listeners = [];

  function read() {
    try { var a = JSON.parse(localStorage.getItem(KEY_ITEMS)); return Array.isArray(a) ? a : []; }
    catch (e) { return []; }
  }
  var items = read();

  function persist() {
    try {
      localStorage.setItem(KEY_ITEMS, JSON.stringify(items));
      if (items.length) localStorage.setItem(KEY_ACTIVE, "1"); else localStorage.removeItem(KEY_ACTIVE);
    } catch (e) { /* almacenamiento no disponible: el carrito vive en memoria */ }
    listeners.forEach(function (fn) { fn(items.slice()); });
  }

  var active = (function () { try { return localStorage.getItem(KEY_ACTIVE) === "1" && items.length > 0; } catch (e) { return false; } })();

  window.EcoCart = {
    items: function () { return items.slice(); },
    count: function () { return items.length; },
    has: function (id) { return items.indexOf(id) !== -1; },
    isActive: function () { return active && items.length > 0; },
    activate: function () { active = true; try { localStorage.setItem(KEY_ACTIVE, "1"); } catch (e) {} },
    add: function (id) { if (items.indexOf(id) !== -1) return false; items.push(id); active = true; persist(); return true; },
    remove: function (id) { items = items.filter(function (i) { return i !== id; }); if (!items.length) active = false; persist(); },
    clear: function () { items = []; active = false; persist(); },
    onChange: function (fn) { listeners.push(fn); }
  };
})();

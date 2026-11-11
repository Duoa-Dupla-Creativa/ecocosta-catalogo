/* ==========================================================================
   ECOCOSTA — Base de datos del catálogo oficial (Actualizado según PDF de cliente)
   ========================================================================== */
(function () {
  "use strict";

  var CATEGORIES = [
    {
      "id": "pulpa-cana",
      "name": "Pulpa caña de azucar",
      "blurb": "Platos, bandejas, bowls y contenedores 100% biodegradables y compostables hechos de fibra de caña.",
      "products": [
        {
          "id": "pulpa-portacomida-cuadrado",
          "name": "Portacomida Cuadrado",
          "img": "pulpa/5",
          "caja": 200,
          "paq": 100,
          "shortSpecs": "Caja: 200 uds • Paq: 100 uds",
          "description": "Portacomida cuadrado biodegradable con cierre de bisagra. Apto para alimentos fríos y calientes.",
          "badges": [
            "100% Biodegradable",
            "Apto frío / caliente"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Portacomida cuadrado sin división P1",
                "22 cm x 20.5 cm x 7.5 cm",
                "Caja: 200 uds. - Paq: 100 uds."
              ],
              [
                "Portacomida cuadrado con división P3",
                "22 cm x 20.5 cm x 7.5 cm",
                "Caja: 200 uds. - Paq: 100 uds."
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-portacomida-rectangular",
          "name": "Portacomida Rectangular",
          "img": "pulpa/70",
          "caja": 250,
          "paq": 125,
          "shortSpecs": "Caja: 250 uds • Paq: 125 uds",
          "description": "Portacomida rectangular de alta resistencia para domicilios y comidas completas.",
          "badges": [
            "100% Biodegradable",
            "Cierre hermético"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Portacomida rectangular sin división J1",
                "15.5 cm x 23 cm x 8 cm",
                "Caja: 250 uds. - Paq: 125 uds."
              ],
              [
                "Portacomida rectangular con división J2",
                "24 cm x 16 cm x 6 cm",
                "Caja: 250 uds. - Paq: 125 uds."
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-portahamburguesa",
          "name": "Porta Hamburguesa",
          "img": "pulpa/porta-hamburguesa",
          "caja": 250,
          "paq": 125,
          "shortSpecs": "15 x 15 x 8 cm • Caja: 250 uds",
          "description": "Contenedor tipo concha ideal para hamburguesas, sándwiches y postres.",
          "badges": [
            "Fibra natural",
            "Resistente a grasa"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Porta Hamburguesa C1",
                "15 cm x 15 cm x 8 cm",
                "Caja: 250 uds. - Paq: 125 uds."
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-plato-cuadrado",
          "name": "Plato Cuadrado",
          "img": "pulpa/15",
          "caja": 500,
          "paq": 125,
          "shortSpecs": "Medidas de 16cm a 26cm",
          "description": "Platos cuadrados elegantes en pulpa de caña, diseño moderno y rígido.",
          "badges": [
            "100% Compostable",
            "Alta rigidez"
          ],
          "table": {
            "headers": [
              "Tamaño",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Pequeño",
                "16 x 16 cm",
                "Caja: 1.000 uds • Paq: 125 uds"
              ],
              [
                "Mediano",
                "20 x 20 cm",
                "Caja: 500 uds • Paq: 125 uds"
              ],
              [
                "Grande",
                "26 x 26 cm",
                "Caja: 500 uds • Paq: 125 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-plato-rectangular-sushi",
          "name": "Plato Rectangular (Sushi)",
          "img": "pulpa/12",
          "caja": 500,
          "paq": 125,
          "shortSpecs": "13 x 16 cm • Caja: 500 uds",
          "description": "Bandeja y plato rectangular especializado para sushi, entradas y postres.",
          "badges": [
            "Especial Sushi",
            "Compostable"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Plato Sushi",
                "13 x 16 cm",
                "Caja: 500 uds • Paq: 125 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-plato-redondo",
          "name": "Plato Redondo",
          "img": "pulpa/13",
          "caja": 500,
          "paq": 125,
          "shortSpecs": "Diámetros: 6\", 9\" y 10\"",
          "description": "Plato redondo clásico de caña de azúcar, resistente a grasas y líquidos.",
          "badges": [
            "Biodegradable",
            "Resistente a líquidos"
          ],
          "table": {
            "headers": [
              "Diámetro",
              "Medida (cm)",
              "Empaque"
            ],
            "rows": [
              [
                "6 pulgadas",
                "16 cm",
                "Caja: 1.000 uds • Paq: 125 uds"
              ],
              [
                "9 pulgadas",
                "23 cm",
                "Caja: 500 uds • Paq: 125 uds"
              ],
              [
                "10 pulgadas",
                "26 cm",
                "Caja: 500 uds • Paq: 125 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-plato-redondo-division",
          "name": "Plato Redondo con División",
          "img": "pulpa/65",
          "caja": 500,
          "paq": 125,
          "shortSpecs": "10\" (26 cm) • 3 divisiones",
          "description": "Plato redondo con 3 divisiones para separar alimentos y salsas de manera ordenada.",
          "badges": [
            "3 Divisiones",
            "10 pulgadas"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Diámetro",
              "Empaque"
            ],
            "rows": [
              [
                "3 Divisiones",
                "10\" / 26 cm",
                "Caja: 500 uds • Paq: 125 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-plato-ovalado",
          "name": "Plato Ovalado",
          "img": "pulpa/16",
          "caja": 500,
          "paq": 125,
          "shortSpecs": "Formatos: 7\" y 10\"",
          "description": "Plato ovalado estilizado para pescados, carnes, asados y ensaladas.",
          "badges": [
            "Diseño Ovalado",
            "Compostable"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "7 pulgadas",
                "10 cm",
                "Caja: 500 uds • Paq: 125 uds"
              ],
              [
                "10 pulgadas",
                "12 cm",
                "Caja: 500 uds • Paq: 125 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-plato-hondo",
          "name": "Plato Hondo",
          "img": "pulpa/27",
          "caja": 500,
          "paq": 125,
          "shortSpecs": "Capacidad: 12oz, 16oz y 27oz",
          "description": "Plato hondo ideal para sopas, cremas, pastas y bowls fríos o calientes.",
          "badges": [
            "Apto microondas",
            "Antiderrame"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Volumen",
              "Empaque"
            ],
            "rows": [
              [
                "12 oz",
                "350 ml",
                "Caja: 500 uds • Paq: 125 uds"
              ],
              [
                "16 oz",
                "500 ml",
                "Caja: 500 uds • Paq: 125 uds"
              ],
              [
                "27 oz",
                "800 ml",
                "Caja: 500 uds • Paq: 125 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-plato-hondo-1000-tapa",
          "name": "Plato Hondo 1.000ml + Tapa",
          "img": "pulpa/74",
          "caja": 500,
          "paq": 125,
          "shortSpecs": "1.000 ml / 32 oz con tapa",
          "description": "Tazón hondo de 1.000ml con tapa hermética para delivery de preparaciones líquidas.",
          "badges": [
            "Con Tapa",
            "1.000 ml / 32 oz"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Incluye",
              "Empaque"
            ],
            "rows": [
              [
                "1.000 ml (32 oz)",
                "Plato + Tapa hermética",
                "Caja: 500 uds • Paq: 125 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-bandeja-regular",
          "name": "Bandeja Regular",
          "img": "pulpa/10",
          "caja": 500,
          "paq": 50,
          "shortSpecs": "Formatos Pequeña y Grande",
          "description": "Bandeja plana tradicional para porciones individuales, desayunos y panadería.",
          "badges": [
            "Fibra 100% caña",
            "Multiusos"
          ],
          "table": {
            "headers": [
              "Formato",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Pequeña",
                "13.5 x 18.5 x 2.5 cm",
                "Caja: 1.000 uds • Paq: 125 uds"
              ],
              [
                "Grande",
                "19.5 x 14.5 x 2.5 cm",
                "Caja: 500 uds • Paq: 50 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-bandeja-congelados",
          "name": "Bandeja para Congelados (Supermercado)",
          "img": "pulpa/49",
          "caja": 600,
          "paq": 100,
          "shortSpecs": "26x19 cm y 24x18 cm",
          "description": "Bandeja rígida apta para refrigeración, congelación y empaque de carnes y verduras.",
          "badges": [
            "Apto congelación",
            "Supermercado"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Supermercado 24",
                "24 x 18 cm",
                "Caja: 600 uds • Paq: 100 uds"
              ],
              [
                "Supermercado 26",
                "26 x 19 cm",
                "Caja: 600 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-bandeja-5-divisiones",
          "name": "Bandeja 5 Divisiones",
          "img": "pulpa/17",
          "caja": 500,
          "paq": 125,
          "shortSpecs": "21.5 x 33 x 2 cm • 5 divisiones",
          "description": "Bandeja institucional tipo menú escolar o corporativo con 5 compartimientos.",
          "badges": [
            "5 Compartimientos",
            "Institucional"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "5 Divisiones",
                "21.5 x 33 x 2 cm",
                "Caja: 500 uds • Paq: 125 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-bandeja-honda",
          "name": "Bandeja Honda",
          "img": "pulpa/51",
          "caja": 500,
          "paq": 50,
          "shortSpecs": "500ml y 650ml • Tapa accesoria",
          "description": "Bandeja honda de gran capacidad con tapa accesoria opcional.",
          "badges": [
            "Accesorio Tapa",
            "Compostable"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Accesorio",
              "Empaque"
            ],
            "rows": [
              [
                "500 ml",
                "Tapa disponible",
                "Caja: 500 uds • Paq: 50 uds"
              ],
              [
                "650 ml",
                "Tapa disponible",
                "Caja: 500 uds • Paq: 50 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-bandeja-honda-28oz",
          "name": "Bandeja Honda 28oz",
          "img": "pulpa/72",
          "caja": 500,
          "paq": 125,
          "shortSpecs": "23.8 x 15.5 x 4.8 cm • 28 oz",
          "description": "Bandeja rectangular profunda de 28oz con accesorio de tapa disponible.",
          "badges": [
            "28 oz / 800ml",
            "Tapa disponible"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Bandeja 28 oz",
                "23.8 x 15.5 x 4.8 cm",
                "Caja: 500 uds • Paq: 125 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-bandeja-honda-ovalada",
          "name": "Bandeja Honda Ovalada",
          "img": "pulpa/68",
          "caja": 500,
          "paq": 125,
          "shortSpecs": "27 oz • Accesorio tapa por separado",
          "description": "Bandeja ovalada alargada ideal para burritos, hot dogs gourmet y ensaladas.",
          "badges": [
            "Formato Burrito",
            "27 oz"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Accesorio",
              "Empaque"
            ],
            "rows": [
              [
                "27 oz",
                "Tapa se vende por separado",
                "Caja: 500 uds • Paq: 125 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-copa-salsera",
          "name": "Copa Salsera",
          "img": "pulpa/78",
          "caja": 1500,
          "paq": 150,
          "shortSpecs": "1 oz y 2 oz • Tapa PET / Pulpa",
          "description": "Copas salseras pequeñas biodegradables. Tapa en PET o Pulpa vendida por separado.",
          "badges": [
            "Porciones & Salsas",
            "Tapa opcional"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Tapa compatible",
              "Empaque"
            ],
            "rows": [
              [
                "1 oz",
                "PET o Pulpa",
                "Caja: 1.500 uds • Paq: 150 uds"
              ],
              [
                "2 oz",
                "PET o Pulpa",
                "Caja: 2.500 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-bandeja-3-divisiones",
          "name": "Plato Bandeja 3 Divisiones",
          "img": "pulpa/65",
          "caja": 500,
          "paq": 50,
          "shortSpecs": "22.5 x 18 x 3.5 cm • Accesorio Tapa",
          "description": "Bandeja rectangular con 3 divisiones y tapa accesoria opcional.",
          "badges": [
            "3 Divisiones",
            "Accesorio Tapa"
          ],
          "table": {
            "headers": [
              "Medidas",
              "Divisiones",
              "Empaque"
            ],
            "rows": [
              [
                "22.5 x 18 x 3.5 cm",
                "3 Compartimientos",
                "Caja: 500 uds • Paq: 50 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-porta-taco",
          "name": "Porta Taco (3 Compartimientos)",
          "img": "pulpa/porta-taco",
          "caja": 300,
          "paq": 50,
          "shortSpecs": "3 compartimientos • Caja: 300 uds",
          "description": "Base rígida en pulpa de caña con 3 ranuras especiales para tacos y fajitas.",
          "badges": [
            "Especial Taquería",
            "3 Tacos"
          ],
          "table": {
            "headers": [
              "Diseño",
              "Capacidad",
              "Empaque"
            ],
            "rows": [
              [
                "Porta Taco",
                "3 Compartimientos",
                "Caja: 300 uds • Paq: 50 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-bandeja-sushi",
          "name": "Bandeja Sushi",
          "img": "pulpa/bandeja-sushi",
          "caja": 1000,
          "paq": 125,
          "shortSpecs": "Modelos T1, T2, T6 y T3 con tapa",
          "description": "Línea profesional de bandejas de sushi en bagazo de caña con tapa transparente ajustada.",
          "badges": [
            "Accesorio Tapa",
            "Línea Sushi"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Medidas (cm)",
              "Empaque"
            ],
            "rows": [
              [
                "T1",
                "16.5 x 11.5 x 2.2 cm",
                "Caja: 1.000 uds • Paq: 125 uds"
              ],
              [
                "T2",
                "18.4 x 12.8 x 2.1 cm",
                "Caja: 1.000 uds • Paq: 125 uds"
              ],
              [
                "T6",
                "22.1 x 9.2 x 2.1 cm",
                "Caja: 1.000 uds • Paq: 125 uds"
              ],
              [
                "T3",
                "21.5 x 13.5 x 2.1 cm",
                "Caja: 500 uds • Paq: 125 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-bandeja-food-service",
          "name": "Bandeja Food Service",
          "img": "pulpa/bandeja-food-service",
          "caja": 500,
          "paq": 50,
          "shortSpecs": "Variedad de tamaños #1, #3, #5, #7, #8, #17",
          "description": "Bandejas pandas multiusos para autoservicio, comida rápida y catering.",
          "badges": [
            "Food Service",
            "Multiusos"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Medidas (cm)",
              "Empaque"
            ],
            "rows": [
              [
                "#1",
                "15.3 x 15.3 cm",
                "Caja: 500 uds • Paq: 50 uds"
              ],
              [
                "#3",
                "19.5 x 14.5 cm",
                "Caja: 500 uds • Paq: 50 uds"
              ],
              [
                "#7",
                "21.3 x 15.1 cm",
                "Caja: 400 uds • Paq: 50 uds"
              ],
              [
                "#8",
                "25.8 x 19.5 cm",
                "Caja: 200 uds • Paq: 50 uds"
              ],
              [
                "#17",
                "22.5 x 13.5 cm",
                "Caja: 1.000 uds • Paq: 50 uds"
              ],
              [
                "#5",
                "30.0 x 23.0 cm",
                "Caja: 250 uds • Paq: 50 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-bandeja-degustacion",
          "name": "Bandeja de Degustación",
          "img": "pulpa/bandeja-degustacion",
          "caja": 5000,
          "paq": 50,
          "shortSpecs": "6.5 x 6.5 cm • Caja: 5.000 uds",
          "description": "Mini bandeja cuadrada para bocados de degustación, eventos y ferias gastronómicas.",
          "badges": [
            "Catering & Eventos",
            "Mini Degustación"
          ],
          "table": {
            "headers": [
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "6.5 x 6.5 cm",
                "Caja: 5.000 uds • Paq: 50 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pulpa-cuchara-degustacion",
          "name": "Cuchara de Degustación",
          "img": "pulpa/cuchara-degustacion",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "Caja: 1.000 uds • Paq: 100 uds",
          "description": "Cucharita biodegradable en pulpa de caña para postres, degustaciones y sopas.",
          "badges": [
            "Catering",
            "Biodegradable"
          ],
          "table": {
            "headers": [
              "Uso",
              "Empaque"
            ],
            "rows": [
              [
                "Postres y degustaciones",
                "Caja: 1.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        }
      ]
    },
    {
      "id": "almidon-maiz",
      "name": "Almidón de maíz",
      "blurb": "Bio-contenedores térmicos y tazones en almidón de maíz, resistentes a grasas y altas temperaturas.",
      "products": [
        {
          "id": "almidon-portacomida-cuadrado",
          "name": "Portacomida Cuadrado",
          "img": "almidon/57",
          "caja": 200,
          "paq": 100,
          "shortSpecs": "20 x 20 x 7 cm • Caja: 200 uds",
          "description": "Portacomidas térmico en biopolímero de maíz. Disponible sin división (P1) o con división (P3).",
          "badges": [
            "Térmico",
            "Resistente a calor"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Portacomida cuadrado sin división P1",
                "20 cm x 20 cm x 7 cm",
                "Caja: 200 uds. - Paq: 100 uds."
              ],
              [
                "Portacomida cuadrado con división P3",
                "20 cm x 20 cm x 7 cm",
                "Caja: 200 uds. - Paq: 100 uds."
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "almidon-portacomida-rectangular",
          "name": "Portacomida Rectangular",
          "img": "almidon/58",
          "caja": 500,
          "paq": 125,
          "shortSpecs": "Formatos Estándar y Largo",
          "description": "Contenedor rectangular resistente al agua y aceite, no transmite sabores ni olores.",
          "badges": [
            "Sin olores ni sabores",
            "Almidón de maíz"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Portacomida rectangular sin división J1 Estándar",
                "18 cm x 13 cm x 5 cm",
                "Caja: 500 uds. - Paq: 125 uds."
              ],
              [
                "Portacomida rectangular sin división J2 Grande",
                "23 cm x 15 cm x 7 cm",
                "Caja: 200 uds. - Paq: 400 uds."
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "almidon-portahamburguesa",
          "name": "Porta Hamburguesa",
          "img": "almidon/3",
          "caja": 500,
          "paq": 50,
          "shortSpecs": "16 x 16 x 7 cm • C1",
          "description": "Caja térmica para hamburguesa con cierre click de seguridad.",
          "badges": [
            "Térmico",
            "Cierre seguro"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Porta Hamburguesa C1",
                "16 cm x 16 cm x 7 cm",
                "Caja: 500 uds. - Paq: 50 uds."
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "almidon-plato-hondo",
          "name": "Plato Hondo (Sopa) con Tapa",
          "img": "almidon/63",
          "caja": 480,
          "paq": 20,
          "shortSpecs": "12oz, 16oz y 32oz • Tapa hermética",
          "description": "Tazones hondos para caldos, sopas y pastas calientes con accesorio de tapa.",
          "badges": [
            "Apto altas temperaturas",
            "Accesorio Tapa"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Volumen",
              "Empaque"
            ],
            "rows": [
              [
                "12 oz",
                "350 ml",
                "Caja: 480 uds • Paq: 20 uds"
              ],
              [
                "16 oz",
                "500 ml",
                "Caja: 600 uds • Paq: 50 uds"
              ],
              [
                "32 oz",
                "1.000 ml",
                "Caja: 480 uds • Paq: 20 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "almidon-copa-salsera",
          "name": "Copa Salsera (Salsero)",
          "img": "almidon/35",
          "caja": 2500,
          "paq": 100,
          "shortSpecs": "2 oz (6 x 3 cm) • Caja: 2.500 uds",
          "description": "Salsero ecológico en bioplástico de maíz para aderezos calientes o fríos.",
          "badges": [
            "Bio-maíz",
            "Para salsas"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "2 oz",
                "6 x 3 cm",
                "Caja: 2.500 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        }
      ]
    },
    {
      "id": "bolsas-craft",
      "name": "Bolsas papel craft",
      "blurb": "Bolsas biodegradables de alta resistencia con o sin asa, en papel kraft natural y blanco.",
      "products": [
        {
          "id": "bolsas-sin-asa",
          "name": "Bolsa Kraft sin Asa",
          "img": "bolsas/29",
          "caja": 5000,
          "paq": 50,
          "shortSpecs": "11 tamaños desde #1 hasta #11",
          "description": "Bolsas de fondo americano en papel kraft natural Estándar y Premium.",
          "badges": [
            "Fondo americano",
            "Papel Premium / Estándar"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Ancho (cm)",
              "Fuelle (cm)",
              "Largo (cm)",
              "Bulto (uds)"
            ],
            "rows": [
              [
                "#1",
                "10.5",
                "6.0",
                "23.5",
                "6.000"
              ],
              [
                "#2",
                "12.5",
                "6.5",
                "25.5",
                "5.000"
              ],
              [
                "#3",
                "12.5",
                "6.5",
                "30.5",
                "4.000"
              ],
              [
                "#4",
                "16.5",
                "6.5",
                "35.0",
                "3.000"
              ],
              [
                "#5",
                "16.0",
                "9.5",
                "32.0",
                "2.000"
              ],
              [
                "#6",
                "18.0",
                "10.0",
                "36.0",
                "2.000"
              ],
              [
                "#7",
                "19.5",
                "12.0",
                "40.0",
                "1.000"
              ],
              [
                "#8",
                "21.0",
                "13.4",
                "40.5",
                "1.000"
              ],
              [
                "#9",
                "21.0",
                "13.4",
                "46.0",
                "1.000"
              ],
              [
                "#10 (1/8 BBL)",
                "25.0",
                "17.0",
                "37.5",
                "250"
              ],
              [
                "#11 (1/6 BBL)",
                "30.5",
                "17.0",
                "40.5",
                "500"
              ]
            ]
          },
          "isTable": true
        },
        {
          "id": "bolsas-con-asa",
          "name": "Bolsa Kraft con Asa",
          "img": "bolsas/28",
          "caja": 250,
          "paq": 25,
          "shortSpecs": "Tallas XS, S, M, L y Entorchada",
          "description": "Bolsas delivery con manija reforzada para transporte seguro de empaques.",
          "badges": [
            "Manija reforzada",
            "Ideal Domicilios"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Ancho (cm)",
              "Fuelle (cm)",
              "Largo (cm)",
              "Caja"
            ],
            "rows": [
              [
                "XS",
                "21",
                "12",
                "25",
                "250 uds"
              ],
              [
                "S",
                "26",
                "17",
                "34",
                "250 uds"
              ],
              [
                "M",
                "33",
                "17",
                "34",
                "250 uds"
              ],
              [
                "L",
                "30",
                "17",
                "40",
                "250 uds"
              ],
              [
                "Entorchada",
                "23.5",
                "12",
                "33",
                "250 uds"
              ]
            ]
          },
          "isTable": true
        },
        {
          "id": "bolsas-cubiertos",
          "name": "Bolsa para Cubiertos",
          "img": "bolsas/30",
          "caja": 10000,
          "paq": 100,
          "shortSpecs": "7.0 x 24.0 cm • 50 Grs",
          "description": "Bolsa higiénica fondo V con impresión genérica para cubiertos individuales.",
          "badges": [
            "Fondo V",
            "10.000 uds/bulto"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Gramaje",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Bolsa genérica con impresión 50 Grs",
                "7.0 cm x 24.0 cm",
                "Bulto: 10.000 uds."
              ]
            ]
          },
          "isTable": false
        }
      ]
    },
    {
      "id": "vasos-contenedores",
      "name": "Vasos y contenedores",
      "blurb": "Vasos de cartón térmicos para bebidas frías o calientes y contenedores take-away.",
      "products": [
        {
          "id": "vasos-carton",
          "name": "Vasos de Cartón",
          "img": "vasos-y-contenedores/1",
          "caja": 1000,
          "paq": 50,
          "shortSpecs": "Desde 4oz hasta 22oz",
          "description": "Vasos blancos de cartón ecológico aptos para café, infusiones y bebidas frías.",
          "badges": [
            "Bebidas frías y calientes",
            "Personalizables"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Empaque",
              "Personalización"
            ],
            "rows": [
              [
                "4 oz",
                "Caja: 1.000 uds • Paq: 50 uds",
                "Disponible"
              ],
              [
                "7 oz",
                "Caja: 1.000 uds • Paq: 50 uds",
                "Disponible"
              ],
              [
                "9 - 10 oz",
                "Caja: 1.000 uds • Paq: 50 uds",
                "Disponible"
              ],
              [
                "12 oz",
                "Caja: 1.000 uds • Paq: 50 uds",
                "Disponible"
              ],
              [
                "16 oz",
                "Caja: 1.000 uds • Paq: 50 uds",
                "Disponible"
              ],
              [
                "22 oz",
                "Caja: 1.000 uds • Paq: 50 uds",
                "Disponible"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "contenedores-carton",
          "name": "Contenedores de Cartón",
          "img": "vasos-y-contenedores/2",
          "caja": 1000,
          "paq": 50,
          "shortSpecs": "Desde 4oz hasta 16oz",
          "description": "Contenedor circular blanco de cartón para helados, cremas y acompañamientos.",
          "badges": [
            "Blanco puro",
            "Antigrasa"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Empaque"
            ],
            "rows": [
              [
                "4 oz",
                "Caja: 1.000 uds • Paq: 50 uds"
              ],
              [
                "5 oz",
                "Caja: 1.000 uds • Paq: 50 uds"
              ],
              [
                "6 oz",
                "Caja: 1.000 uds • Paq: 50 uds"
              ],
              [
                "8 oz",
                "Caja: 1.000 uds • Paq: 50 uds"
              ],
              [
                "12 oz",
                "Caja: 1.000 uds • Paq: 50 uds"
              ],
              [
                "16 oz",
                "Caja: 1.000 uds • Paq: 50 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "contenedor-chino",
          "name": "Contenedor Chino",
          "img": "vasos-y-contenedores/55",
          "caja": 800,
          "paq": 50,
          "shortSpecs": "9oz, 16oz y 25oz",
          "description": "Caja clásica take-away tipo pagoda para fideos, arroz chino y comida oriental.",
          "badges": [
            "Take-Away",
            "Cierre antiderrame"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Empaque"
            ],
            "rows": [
              [
                "9 oz (Nuevo)",
                "Caja: 450 uds • Paq: 50 uds"
              ],
              [
                "16 oz",
                "Caja: 800 uds • Paq: 50 uds"
              ],
              [
                "25 oz",
                "Caja: 450 uds • Paq: 50 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "vaso-conico",
          "name": "Vaso Cónico",
          "img": "vasos-y-contenedores/45",
          "caja": 5000,
          "paq": 200,
          "shortSpecs": "4.6oz y 6oz",
          "description": "Vaso cónico de papel blanco desechable, ideal para dispensadores de agua y bebidas frías.",
          "badges": [
            "Para dispensador",
            "Bebidas frías"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Empaque"
            ],
            "rows": [
              [
                "Vaso cónico 4.6 oz",
                "Caja: 5.000 uds • Paq: 200 uds"
              ],
              [
                "Vaso cónico 6 oz",
                "Caja: 5.000 uds • Paq: 200 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "tazones-con-tapa-carton",
          "name": "Tazones con Tapa de Cartón",
          "img": "vasos-y-contenedores/54",
          "caja": 1000,
          "paq": 50,
          "shortSpecs": "Desde 7oz hasta 32oz",
          "description": "Tazones blancos de cartón con tapa ajustada para sopas y alimentos calientes.",
          "badges": [
            "Con tapa de cartón",
            "Térmico"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Empaque"
            ],
            "rows": [
              [
                "7 oz",
                "Caja: 1.000 uds • Paq: 50 uds"
              ],
              [
                "12 oz",
                "Caja: 1.000 uds • Paq: 50 uds"
              ],
              [
                "14 oz",
                "Caja: 1.000 uds • Paq: 50 uds"
              ],
              [
                "16 oz",
                "Caja: 1.000 uds • Paq: 50 uds"
              ],
              [
                "24 oz",
                "Caja: 1.000 uds • Paq: 50 uds"
              ],
              [
                "32 oz",
                "Caja: 1.000 uds • Paq: 50 uds"
              ]
            ]
          },
          "isTable": false
        }
      ]
    },
    {
      "id": "empaques-carton",
      "name": "Empaques de cartón",
      "blurb": "Cajas de pizza, bandejas canoa, combos, cajas para comidas y empaques Earthpact.",
      "personalizationCard": {
        "title": "Se personalizan cajas",
        "whatsappMessage": "Quiero cotizar la personalización de cajas"
      },
      "products": [
        {
          "id": "caja-pizza-aluminizada",
          "name": "Caja Pizza Aluminizada",
          "img": "empaques-de-carton/20",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "7 tamaños: Personal a Super Extra Large",
          "description": "Caja para pizza con recubrimiento aluminizado térmico que preserva el calor y crujencia.",
          "badges": [
            "Interior aluminizado",
            "Conserva calor"
          ],
          "table": {
            "headers": [
              "Tamaño",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Personal",
                "20 x 20 x 3 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Junior",
                "24 x 24 x 3 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Small",
                "27 x 27 x 3 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Medium",
                "32 x 32 x 3 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Large",
                "35 x 35 x 3 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Extra Large",
                "39.5 x 39.5 x 3 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Super Extra Large",
                "49 x 49 x 3 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "caja-pizza-corrugada",
          "name": "Caja Pizza Corrugada",
          "img": "empaques-de-carton/21",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "8 tamaños: Personal a Super Extra Large",
          "description": "Caja de pizza en cartón microcorrugado liso de alta resistencia estructural.",
          "badges": [
            "Microcorrugado liso",
            "Personalizable"
          ],
          "table": {
            "headers": [
              "Tamaño",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Personal",
                "20 x 20 x 4.5 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Junior",
                "24 x 24 x 4 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Small",
                "27 x 27 x 5 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Small Especial",
                "30 x 30 x 5 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Medium",
                "36 x 36 x 5 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Large",
                "40 x 39 x 5 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Extra Large",
                "40 x 42 x 5 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Super Extra Large",
                "50 x 49.5 x 4 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "bandeja-plana-pulpa-carton",
          "name": "Bandeja Plana",
          "img": "empaques-de-carton/43",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "Referencias #1, #3 y #7",
          "description": "Bandeja plana compacta para autoservicio, repostería y pasabocas.",
          "badges": [
            "Borde bajo",
            "Biodegradable"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "#1",
                "12.7 x 12.7 x 1.6 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "#3",
                "14.3 x 18.6 x 1.7 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "#7",
                "12.1 x 21.1 x 1.6 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "bandeja-canoa",
          "name": "Bandeja Canoa",
          "img": "empaques-de-carton/80",
          "caja": 1800,
          "paq": 150,
          "shortSpecs": "1lb, 2lb, 3lb y 5lb",
          "description": "Bandeja abierta estilo canoa para papas fritas, salchipapas, nachos y snacks.",
          "badges": [
            "Resistente a grasa",
            "Ideal Fast Food"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "1 lb",
                "10.8 x 15.4 x 4.8 cm",
                "Caja: 3.240 uds • Paq: 180 uds"
              ],
              [
                "2 lb",
                "14.0 x 18.2 x 3.9 cm",
                "Caja: 1.800 uds • Paq: 150 uds"
              ],
              [
                "3 lb",
                "18.8 x 11.2 x 6.4 cm",
                "Caja: 1.800 uds • Paq: 180 uds"
              ],
              [
                "5 lb",
                "24.1 x 16.2 x 6.1 cm",
                "Caja: 1.500 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "bandeja-combo-carton",
          "name": "Bandeja Combo Cartón",
          "img": "empaques-de-carton/50",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "18 x 11 x 5 cm • Personalizable",
          "description": "Bandeja para combos de hamburguesa con papas. Se puede personalizar con tu logo.",
          "badges": [
            "Personalizable",
            "Para Combos"
          ],
          "table": {
            "headers": [
              "Medidas",
              "Empaque",
              "Personalización"
            ],
            "rows": [
              [
                "18 x 11 x 5 cm",
                "Caja: 1.000 uds • Paq: 100 uds",
                "Disponible con tu marca"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "platos-planos-carton",
          "name": "Platos Planos de Cartón",
          "img": "empaques-de-carton/44",
          "caja": 2000,
          "paq": 100,
          "shortSpecs": "Cuadrado y Rectangular",
          "description": "Platos descartables resistentes en cartón blanco para eventos y comida rápida.",
          "badges": [
            "Rígidos",
            "Económicos"
          ],
          "table": {
            "headers": [
              "Formato",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Cuadrado",
                "13.5 x 13.5 cm",
                "Caja: 2.000 uds • Paq: 100 uds"
              ],
              [
                "Rectangular",
                "13.5 x 21.5 cm",
                "Caja: 2.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "caja-cupcake",
          "name": "Caja para Cupcake",
          "img": "empaques-de-carton/24",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "Para 1, 2, 4, 6 y 12 unidades",
          "description": "Cajas con soporte interior para cupcakes y muffins, mantienen los postres impecables.",
          "badges": [
            "Con inserto",
            "Repostería"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "1 Unidad",
                "9 x 9 x 12 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "2 Unidades",
                "16 x 8 x 9 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "4 Unidades",
                "17.5 x 17.5 x 11.5 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "6 Unidades",
                "23.5 x 15.5 x 9 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "12 Unidades",
                "30 x 23 x 10 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "caja-menu",
          "name": "Caja Menú (Infantil / Pollo)",
          "img": "empaques-de-carton/1",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "Menú Infantil y Menú Pollo con asa",
          "description": "Cajas tipo maletín con manija superior integrada para combos infantiles o pollo frito.",
          "badges": [
            "Con asa integrada",
            "Fácil armado"
          ],
          "table": {
            "headers": [
              "Referencia",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Menú Infantil",
                "15 x 10 x 10 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Menú Pollo",
                "20 x 12 x 13 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "caja-comida-kraft",
          "name": "Caja para Comida Kraft",
          "img": "empaques-de-carton/23",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "Varias medidas • Cartón Kraft",
          "description": "Cajas para delivery con cierre seguro de pestañas y barrera antigrasa.",
          "badges": [
            "Kraft natural",
            "Antigrasa"
          ],
          "table": {
            "headers": [
              "Material",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Cartón Kraft",
                "Varias medidas según requerimiento",
                "Caja: 1.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "caja-comida-blanca",
          "name": "Caja para Comida Blanca",
          "img": "empaques-de-carton/26",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "Varias medidas • Cartón Blanco",
          "description": "Cajas para comidas en cartón blanco satinado de grado alimenticio.",
          "badges": [
            "Cartón blanco",
            "Grado alimenticio"
          ],
          "table": {
            "headers": [
              "Material",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Cartón Blanco",
                "Varias medidas según requerimiento",
                "Caja: 1.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "caja-porta-vasos",
          "name": "Porta Vasos Café",
          "img": "empaques-de-carton/70",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "Portavaso x 1 y Portavaso x 2",
          "description": "Bases porta vasos de cartón reforzado para delivery seguro de bebidas.",
          "badges": [
            "Transporte seguro",
            "Cartón kraft"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Portavaso x 1 (Nuevo)",
                "Formato individual",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Portavaso x 2",
                "18.5 x 9.4 x 5 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "porta-arepa",
          "name": "Porta Arepa",
          "img": "empaques-de-carton/41",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "13 x 3 x 8 cm • Caja: 1.000 uds",
          "description": "Bolsillo de cartón diseñado especialmente para arepas rellenas y empanadas.",
          "badges": [
            "Ergonómico",
            "1.000 uds/caja"
          ],
          "table": {
            "headers": [
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "13 x 3 x 8 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "porta-crispetas",
          "name": "Porta Crispetas",
          "img": "empaques-de-carton/71",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "8.5x8.5 cm y 9.5x9.5 cm",
          "description": "Empaque vertical de cartón para palomitas de maíz y snacks.",
          "badges": [
            "2 Tamaños",
            "Para cine y eventos"
          ],
          "table": {
            "headers": [
              "Tamaño",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "Medida 1",
                "8.5 x 8.5 x 11 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Medida 2 (Nueva)",
                "9.5 x 9.5 x 11 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "porta-papas",
          "name": "Porta Papas",
          "img": "empaques-de-carton/42",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "10 x 3.5 x 10 cm • Caja: 1.000 uds",
          "description": "Bolsillo cónico tradicional para papas a la francesa.",
          "badges": [
            "Cartón kraft",
            "Antigrasa"
          ],
          "table": {
            "headers": [
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "10 x 3.5 x 10 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "porta-hamburguesa-generico",
          "name": "Porta Hamburguesa",
          "img": "empaques-de-carton/69",
          "caja": 2000,
          "paq": 100,
          "shortSpecs": "17.5 x 5.5 x 4 cm • Caja: 2.000 uds",
          "description": "Porta hamburguesa con estampado genérico, práctico y resistente para comida rápida.",
          "badges": [
            "Diseño genérico",
            "Antigrasa"
          ],
          "table": {
            "headers": [
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "17.5 x 5.5 x 4 cm",
                "Caja: 2.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "porta-perro-generico",
          "name": "Porta Perro",
          "img": "empaques-de-carton/40",
          "caja": 2000,
          "paq": 100,
          "shortSpecs": "17.5 x 5.5 x 4 cm • Caja: 2.000 uds",
          "description": "Bandeja porta perro caliente con diseño genérico para servicio de comida rápida.",
          "badges": [
            "Diseño genérico",
            "Fast Food"
          ],
          "table": {
            "headers": [
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "17.5 x 5.5 x 4 cm",
                "Caja: 2.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "porta-crispeta-generico",
          "name": "Porta Crispeta",
          "img": "empaques-de-carton/67",
          "caja": 2000,
          "paq": 100,
          "shortSpecs": "17 x 21 cm • Caja: 2.000 uds",
          "description": "Cono porta crispeta con estampado genérico, ideal para eventos y comida rápida.",
          "badges": [
            "Diseño genérico",
            "Cartón alimentario"
          ],
          "table": {
            "headers": [
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "17 x 21 cm",
                "Caja: 2.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "porta-pizza-generico",
          "name": "Porta Pizza",
          "img": "empaques-de-carton/porta-pizza",
          "caja": 2000,
          "paq": 100,
          "shortSpecs": "21 x 17.5 x 2 cm • Caja: 2.000 uds",
          "description": "Bandeja triangular porta pizza con diseño genérico para porción individual.",
          "badges": [
            "Diseño genérico",
            "Cartón alimentario"
          ],
          "table": {
            "headers": [
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "21 x 17.5 x 2 cm",
                "Caja: 2.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "delivery-earthpact",
          "name": "Cajas Delivery en Earthpact",
          "img": "empaques-de-carton/72",
          "caja": 300,
          "paq": 25,
          "shortSpecs": "27oz, 36oz, 47oz y 64oz",
          "description": "Empaques fabricados en papel 100% de caña de azúcar sin blanquear Earthpact.",
          "badges": [
            "Papel Earthpact",
            "Sin químicos"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "27 oz",
                "12 x 9.3 x 5.8 cm",
                "Caja: 400 uds • Paq: 25 uds"
              ],
              [
                "36 oz",
                "14.3 x 11.2 x 6 cm",
                "Caja: 250 uds • Paq: 25 uds"
              ],
              [
                "47 oz",
                "15.2 x 12 x 6.4 cm",
                "Caja: 300 uds • Paq: 25 uds"
              ],
              [
                "64 oz",
                "17.3 x 12.4 x 7.5 cm",
                "Caja: 200 uds • Paq: 25 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "wok-earthpact",
          "name": "Cajas Wok",
          "img": "empaques-de-carton/73",
          "caja": 300,
          "paq": 50,
          "shortSpecs": "23oz, 27oz, 36oz, 47oz y 64oz",
          "description": "Contenedores Wok en papel Earthpact para preparaciones asiáticas y pastas.",
          "badges": [
            "Formato Wok",
            "Earthpact"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "23 oz",
                "11.3 x 9 x 5.5 cm",
                "Caja: 400 uds • Paq: 50 uds"
              ],
              [
                "27 oz",
                "12 x 9.3 x 5.8 cm",
                "Caja: 400 uds • Paq: 50 uds"
              ],
              [
                "36 oz",
                "14.3 x 11.2 x 6 cm",
                "Caja: 250 uds • Paq: 50 uds"
              ],
              [
                "47 oz",
                "15.2 x 12 x 6.4 cm",
                "Caja: 300 uds • Paq: 50 uds"
              ],
              [
                "64 oz",
                "17.3 x 12.4 x 7.5 cm",
                "Caja: 200 uds • Paq: 30 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "caja-postres-personalizada",
          "name": "Caja para Postres",
          "img": null,
          "missing": true,
          "caja": 500,
          "paq": 50,
          "shortSpecs": "Personalización completa disponible",
          "description": "Caja elegante para pastelería y repostería. Se fabrica y personaliza según especificaciones.",
          "badges": [
            "Personalizable",
            "Repostería"
          ],
          "table": {
            "headers": [
              "Servicio",
              "Detalle"
            ],
            "rows": [
              [
                "Personalización",
                "Desde 100 unidades en adelante"
              ],
              [
                "Tintas",
                "Según diseño del cliente"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "porta-contenedor",
          "name": "Porta Contenedor",
          "img": null,
          "missing": true,
          "caja": null,
          "paq": null,
          "shortSpecs": "Empaque en cartón • Referencia por definir",
          "description": "Porta contenedor en cartón ideal para transporte y entrega segura de alimentos.",
          "badges": [
            "Cartón alimentario",
            "Delivery"
          ],
          "table": {
            "headers": [
              "Detalle",
              "Especificación"
            ],
            "rows": [
              [
                "Presentación",
                "Consultar referencias y empaque"
              ]
            ]
          },
          "isTable": false
        }
      ]
    },
    {
      "id": "seed-pack",
      "name": "Seed pack",
      "blurb": "Empaques germinables y soluciones con fibras vegetales sostenibles.",
      "products": []
    },
    {
      "id": "bowl-tazones",
      "name": "Bowl y tazones",
      "blurb": "Bowls para ensaladas, poke, sopas y comidas calientes, apilables y aptos para delivery.",
      "products": [
        {
          "id": "contenedor-kraft-bowl",
          "name": "Contenedor Kraft",
          "img": "bowls/2",
          "caja": 300,
          "paq": 30,
          "shortSpecs": "16oz, 26oz, 32oz y 44oz",
          "description": "Contenedor redondo kraft para ensaladas y poke. Tapa plástica por aparte.",
          "badges": [
            "Para Ensaladas & Poke",
            "Tapa por aparte"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Volumen",
              "Tapa compatible"
            ],
            "rows": [
              [
                "16 oz",
                "500 ml",
                "Tapa plástica por aparte"
              ],
              [
                "26 oz",
                "700 ml",
                "Tapa plástica por aparte"
              ],
              [
                "32 oz",
                "1.000 ml",
                "Tapa plástica por aparte"
              ],
              [
                "44 oz",
                "1.500 ml",
                "Tapa plástica por aparte"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "tazon-kraft",
          "name": "Tazón Kraft",
          "img": "bowls/1",
          "caja": 300,
          "paq": 25,
          "shortSpecs": "4oz, 8oz, 16oz y 32oz",
          "description": "Tazones kraft térmicos con opción de tapa de cartón o plástica por aparte.",
          "badges": [
            "Tapa Cartón o Plástica",
            "Multiusos"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Volumen",
              "Opciones de Tapa"
            ],
            "rows": [
              [
                "4 oz",
                "118 ml",
                "Tapa Cartón o Plástica"
              ],
              [
                "8 oz",
                "250 ml",
                "Tapa Cartón o Plástica"
              ],
              [
                "16 oz",
                "500 ml",
                "Tapa Cartón o Plástica"
              ],
              [
                "32 oz",
                "1.000 ml",
                "Tapa Cartón o Plástica"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "tazon-bioform",
          "name": "Tazón BIOFORM",
          "img": "bowls/3",
          "caja": 300,
          "paq": 25,
          "shortSpecs": "8oz, 12oz, 16oz y 26oz",
          "description": "Tazón biodegradable BIOFORM rígido para delivery directo a la mesa.",
          "badges": [
            "BIOFORM",
            "Apilable"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Volumen",
              "Empaque"
            ],
            "rows": [
              [
                "8 oz",
                "250 ml",
                "Tapa plástica por aparte"
              ],
              [
                "12 oz",
                "350 ml",
                "Tapa plástica por aparte"
              ],
              [
                "16 oz",
                "500 ml",
                "Tapa plástica por aparte"
              ],
              [
                "26 oz",
                "750 ml",
                "Tapa plástica por aparte"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "bowl-kraft-rectangular",
          "name": "Bowl Kraft Rectangular",
          "img": "bowls/4",
          "caja": 300,
          "paq": 50,
          "shortSpecs": "16oz, 22oz, 26oz y 32oz",
          "description": "Bowl kraft rectangular con forro de PLA biodegradable, a prueba de fugas, resistente al aceite y 100% compostable.",
          "badges": [
            "Forro de PLA biodegradable",
            "A prueba de fugas",
            "Resistente al aceite",
            "100% Compostable"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Volumen"
            ],
            "rows": [
              [
                "16 oz",
                "500 ml"
              ],
              [
                "22 oz",
                "650 ml"
              ],
              [
                "26 oz",
                "750 ml"
              ],
              [
                "32 oz",
                "1.000 ml"
              ]
            ]
          },
          "isTable": false
        }
      ]
    },
    {
      "id": "pitillos-ecologicos",
      "name": "Pitillos ecológicos",
      "blurb": "Pitillos 100% biodegradables y compostables que conservan su firmeza en las bebidas.",
      "products": [
        {
          "id": "pitillo-diseno-bambu",
          "name": "Pitillo de Papel Diseño Bambú",
          "img": "pitillos/48",
          "caja": 5000,
          "paq": 200,
          "shortSpecs": "6mm y 8mm • Longitud 197 y 250mm",
          "description": "Pitillos de papel con diseño impreso de caña de bambú. Biodegradables.",
          "badges": [
            "Diseño Bambú",
            "5.000 uds/caja"
          ],
          "table": {
            "headers": [
              "Calibre",
              "Longitud",
              "Empaque"
            ],
            "rows": [
              [
                "6 mm",
                "197 mm",
                "Caja: 5.000 uds • Paq: 200 uds"
              ],
              [
                "8 mm",
                "197 mm",
                "Caja: 5.000 uds • Paq: 200 uds"
              ],
              [
                "6 mm",
                "250 mm",
                "Caja: 5.000 uds • Paq: 200 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pitillo-espiral-colores",
          "name": "Pitillo de Papel Espiral Colores",
          "img": "pitillos/47",
          "caja": 5000,
          "paq": 200,
          "shortSpecs": "6mm y 8mm • Rayas decorativas",
          "description": "Pitillo festivo de papel con espiral de colores, ideal para coctelería y eventos.",
          "badges": [
            "Espiral Colores",
            "Compostable"
          ],
          "table": {
            "headers": [
              "Calibre",
              "Longitud",
              "Empaque"
            ],
            "rows": [
              [
                "6 mm",
                "197 mm",
                "Caja: 5.000 uds • Paq: 200 uds"
              ],
              [
                "8 mm",
                "197 mm",
                "Caja: 5.000 uds • Paq: 200 uds"
              ],
              [
                "6 mm",
                "250 mm",
                "Caja: 5.000 uds • Paq: 200 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pitillos-blancos",
          "name": "Pitillos de Papel Blancos",
          "img": "pitillos/5",
          "caja": 5000,
          "paq": 200,
          "shortSpecs": "6mm y 8mm • Blanco pulcro",
          "description": "Pitillos blancos minimalistas en papel grado alimenticio de máxima duración.",
          "badges": [
            "Blanco puro",
            "Sin sabor residual"
          ],
          "table": {
            "headers": [
              "Calibre",
              "Longitud",
              "Empaque"
            ],
            "rows": [
              [
                "6 mm",
                "197 mm",
                "Caja: 5.000 uds • Paq: 200 uds"
              ],
              [
                "8 mm",
                "197 mm",
                "Caja: 5.000 uds • Paq: 200 uds"
              ],
              [
                "6 mm",
                "250 mm",
                "Caja: 5.000 uds • Paq: 200 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pitillo-oxxo-biodegradable",
          "name": "Pitillo Oxxo-Biodegradable",
          "img": "pitillos/6",
          "caja": 5000,
          "paq": 250,
          "shortSpecs": "Nuevo producto Oxo-Biodegradable",
          "description": "Nueva referencia de pitillo ecológico con tecnología oxo-biodegradable de alta resistencia.",
          "badges": [
            "Nuevo Producto",
            "Tecnología Oxo"
          ],
          "table": {
            "headers": [
              "Estado",
              "Características"
            ],
            "rows": [
              [
                "Nuevo Producto",
                "Apto para bebidas frías y frappés"
              ]
            ]
          },
          "isTable": false
        }
      ]
    },
    {
      "id": "cubiertos",
      "name": "Cubiertos",
      "blurb": "Kits y cubiertos individuales en almidón de maíz, madera natural y bioplásticos compostables.",
      "products": [
        {
          "id": "cubiertos-almidon-maiz",
          "name": "Cubiertos Almidón de Maíz",
          "img": "cubiertos/ed40",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "Cuchara, Cuchillo, Tenedor y Minis",
          "description": "Cubiertos rígidos en resina de maíz, resistentes a grasas, agua caliente y aceite.",
          "badges": [
            "Almidón de maíz",
            "1.000 uds/caja"
          ],
          "table": {
            "headers": [
              "Tipo",
              "Largo",
              "Empaque"
            ],
            "rows": [
              [
                "Cuchara",
                "16 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Cuchillo",
                "16 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Tenedor",
                "17 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Cuchara mini",
                "11.5 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Tenedor mini",
                "15 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "cubiertos-madera",
          "name": "Cubiertos de Madera",
          "img": "cubiertos/90",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "Cuchara, Cuchillo y Tenedor 16cm",
          "description": "Cubiertos de madera de abedul 100% natural sin ceras ni químicos.",
          "badges": [
            "Madera Natural",
            "100% Orgánico"
          ],
          "table": {
            "headers": [
              "Tipo",
              "Largo",
              "Empaque"
            ],
            "rows": [
              [
                "Cuchara",
                "16 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Cuchillo",
                "16 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Tenedor",
                "16 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "set-cubiertos",
          "name": "Set de Cubiertos con Servilleta",
          "img": "cubiertos/1",
          "caja": 1000,
          "paq": 50,
          "shortSpecs": "Kit completo individual sellado",
          "description": "Pack higiénico individual: Cuchara, Cuchillo, Tenedor, Servilleta y Bolsa de papel.",
          "badges": [
            "Pack Individual",
            "Higiénico"
          ],
          "table": {
            "headers": [
              "Componente",
              "Detalle"
            ],
            "rows": [
              [
                "Incluye",
                "Cuchara + Cuchillo + Tenedor + Servilleta + Bolsa"
              ],
              [
                "Servilleta",
                "Blanca o Natural"
              ],
              [
                "Empaque",
                "Caja: 1.000 uds • Paq: 50 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "cubiertos-bioplasticos",
          "name": "Cubiertos Bioplásticos",
          "img": "cubiertos/2",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "Línea compostable reforzada",
          "description": "Cubiertos de polímero bio reforzado de alto rendimiento para delivery premium.",
          "badges": [
            "Bioplástico",
            "Reforzados"
          ],
          "table": {
            "headers": [
              "Tipo",
              "Largo",
              "Empaque"
            ],
            "rows": [
              [
                "Cuchara",
                "16 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Cuchillo",
                "16 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Tenedor",
                "17 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Cuchara mini",
                "11.5 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ],
              [
                "Tenedor mini",
                "15 cm",
                "Caja: 1.000 uds • Paq: 100 uds"
              ]
            ]
          },
          "isTable": false
        }
      ]
    },
    {
      "id": "accesorios-utensilios",
      "name": "Accesorios y utencilios",
      "blurb": "Papel parafinado, asas clip, aisladores, pinchos de madera, mezcladores, conos y canoas de bambú.",
      "personalizationCard": {
        "title": "Se personalizan papel parafinado y antigrasa",
        "whatsappMessage": "Quiero cotizar la personalización de papel parafinado y antigrasa"
      },
      "products": [
        {
          "id": "papel-parafinado",
          "name": "Papel Parafinado",
          "img": "papel/45",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "Blanco y Cuadros • 15x15, 20x20, 30x30",
          "description": "Hojas de papel parafinado antigrasa. Diseños en blanco, cuadros rojo/blanco y negro/blanco. Personalizable.",
          "badges": [
            "Antigrasa",
            "Personalizable"
          ],
          "table": {
            "headers": [
              "Diseño",
              "Medidas",
              "Presentación"
            ],
            "rows": [
              [
                "Blanco",
                "15x15, 20x20, 30x30 cm",
                "Por 1 Kilo (# hojas según tamaño)"
              ],
              [
                "Cuadros Rojo/Blanco",
                "15x15, 20x20, 30x30 cm",
                "Por 1 Kilo"
              ],
              [
                "Cuadros Negro/Blanco",
                "15x15, 20x20, 30x30 cm",
                "Por 1 Kilo"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "laminas-de-comida",
          "name": "Láminas de Comida (Colores)",
          "img": "papel/46",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "Amarillo, Verde, Rojo, Negro, Azul",
          "description": "Láminas decorativas y protectoras para canastas y bandejas de comida rápida.",
          "badges": [
            "5 Colores",
            "Grado alimenticio"
          ],
          "table": {
            "headers": [
              "Colores",
              "Medidas"
            ],
            "rows": [
              [
                "Amarillo, Verde, Rojo, Negro, Azul",
                "15x15 cm, 20x20 cm, 30x30 cm"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "asa-clip-vaso",
          "name": "Asa Clip para Vasos (Negro)",
          "img": "utensilios/39",
          "caja": 2000,
          "paq": 50,
          "shortSpecs": "Color Negro • Caja: 2.000 uds",
          "description": "Manija plástica de enganche rápido para transportar vasos calientes o fríos con comodidad.",
          "badges": [
            "Color Negro",
            "2.000 uds/caja"
          ],
          "table": {
            "headers": [
              "Color",
              "Empaque"
            ],
            "rows": [
              [
                "Negro",
                "Caja: 2.000 uds • Paq: 50 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "copa-salsera-papel",
          "name": "Copa Salsera de Papel",
          "img": "utensilios/56",
          "caja": 10000,
          "paq": 500,
          "shortSpecs": "0.75 oz, 1 oz y 2 oz",
          "description": "Cápsulas plisadas de papel para salsas y degustaciones. Personalizables.",
          "badges": [
            "Plisada",
            "Personalizable"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Empaque"
            ],
            "rows": [
              [
                "0.75 oz",
                "Caja: 10.000 uds • Paq: 500 uds"
              ],
              [
                "1 oz (Nueva)",
                "Caja: 10.000 uds • Paq: 500 uds"
              ],
              [
                "2 oz",
                "Caja: 10.000 uds • Paq: 500 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "aislador-calor-fajilla",
          "name": "Aislador de Calor (Fajilla)",
          "img": "utensilios/38",
          "caja": 2000,
          "paq": 50,
          "shortSpecs": "21 x 5.5 cm • Caja: 2.000 uds",
          "description": "Fajilla aislante para vasos de café y bebidas calientes. Personalizable con logo.",
          "badges": [
            "Aislante térmico",
            "Personalizable"
          ],
          "table": {
            "headers": [
              "Medidas",
              "Empaque"
            ],
            "rows": [
              [
                "21 x 5.5 cm",
                "Caja: 2.000 uds • Paq: 50 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "pinchos-madera",
          "name": "Pinchos de Madera Decorativos",
          "img": "utensilios/pinchos",
          "caja": 5000,
          "paq": 250,
          "shortSpecs": "Pala Larga, Corazón, Perla, Nudo, Lazo",
          "description": "Pinchos y brochetas decorativas de bambú para cócteles, pasabocas y brochetas.",
          "badges": [
            "Bambú natural",
            "5 Diseños"
          ],
          "table": {
            "headers": [
              "Modelos",
              "Disponibilidad"
            ],
            "rows": [
              [
                "Pala Larga, Corazón, Perla, Nudo, Lazo",
                "Según disponibilidad de inventario"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "mezcladores-madera",
          "name": "Mezcladores de Madera",
          "img": "utensilios/mezcladores",
          "caja": 10000,
          "paq": 500,
          "shortSpecs": "11 cm, 14 cm y 17 cm",
          "description": "Paletinas de madera natural pulida para revolver café y bebidas.",
          "badges": [
            "Madera pulida",
            "10.000 uds/caja"
          ],
          "table": {
            "headers": [
              "Largo",
              "Empaque"
            ],
            "rows": [
              [
                "11 cm",
                "Caja: 10.000 uds • Paq: 500 uds"
              ],
              [
                "14 cm",
                "Caja: 10.000 uds • Paq: 500 uds"
              ],
              [
                "17 cm",
                "Caja: 10.000 uds • Paq: 500 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "canoas-bambu",
          "name": "Canoas de Bambú",
          "img": "utensilios/100",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "115mm, 13.5cm y 212mm",
          "description": "Bandejitas artesanales de hoja de bambú para catering, sushi y tapas gourmet.",
          "badges": [
            "Bambú artesanal",
            "Catering Gourmet"
          ],
          "table": {
            "headers": [
              "Medida",
              "Uso sugerido"
            ],
            "rows": [
              [
                "115 mm",
                "Canapés y pasabocas individuales"
              ],
              [
                "13.5 cm",
                "Entradas y aperitivos"
              ],
              [
                "212 mm",
                "Platos de degustación y sushi"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "conos-bambu",
          "name": "Conos de Bambú",
          "img": "utensilios/101",
          "caja": 1000,
          "paq": 100,
          "shortSpecs": "80mm, 120mm y 180mm",
          "description": "Conos ecológicos de bambú enrollado para servir snacks, frutos secos y fritos.",
          "badges": [
            "Hoja de bambú",
            "Formato Cono"
          ],
          "table": {
            "headers": [
              "Altura",
              "Uso sugerido"
            ],
            "rows": [
              [
                "80 mm",
                "Mini snacks y degustación"
              ],
              [
                "120 mm",
                "Papas, frutos secos y tapas"
              ],
              [
                "180 mm",
                "Porciones grandes y eventos"
              ]
            ]
          },
          "isTable": false
        }
      ]
    },
    {
      "id": "servilletas",
      "name": "Servilletas",
      "blurb": "Servilletas institucionales Tork para dispensadores Una a Una y servicio a la mesa.",
      "personalizationCard": {
        "title": "Se personalizan servilletas",
        "whatsappMessage": "Quiero cotizar la personalización de servilletas"
      },
      "products": [
        {
          "id": "servilletas-blancas-tork",
          "name": "Servilletas Blancas Tork",
          "img": "papel/1",
          "caja": 3000,
          "paq": 200,
          "shortSpecs": "Dispensador Una a Una • Personalizable",
          "description": "Servilleta blanca de alta absorción y suavidad. Compatible con dispensador y personalizable.",
          "badges": [
            "Dispensador Tork",
            "Personalizable"
          ],
          "table": {
            "headers": [
              "Sistema",
              "Color",
              "Personalización"
            ],
            "rows": [
              [
                "Dispensación Una a Una",
                "Blanca extra suave",
                "Impresión de logo disponible"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "servilletas-natural-tork",
          "name": "Servilletas Natural Tork",
          "img": "papel/51",
          "caja": 3000,
          "paq": 200,
          "shortSpecs": "Papel kraft ecológico • Personalizable",
          "description": "Servilletas ecológicas sin blanquear en fibra natural reciclada de alto rendimiento.",
          "badges": [
            "Kraft 100% ecológico",
            "Personalizable"
          ],
          "table": {
            "headers": [
              "Sistema",
              "Color",
              "Personalización"
            ],
            "rows": [
              [
                "Dispensación Una a Una",
                "Kraft Natural",
                "Impresión de logo disponible"
              ]
            ]
          },
          "isTable": false
        }
      ]
    },
    {
      "id": "vasos-u",
      "name": "Vasos en U",
      "blurb": "Vasos cristalinos con base redondeada en U para frappés, malteadas, smoothies y postres.",
      "products": [
        {
          "id": "vasos-en-u",
          "name": "Vasos en U",
          "img": "vasos-y-contenedores/vaso-u",
          "caja": 1000,
          "paq": 50,
          "shortSpecs": "9-10oz, 12oz, 16oz y 22oz",
          "description": "Vaso transparente con base en forma de U de gran visibilidad para bebidas premium.",
          "badges": [
            "Fondo en U",
            "Alta transparencia"
          ],
          "table": {
            "headers": [
              "Capacidad",
              "Empaque"
            ],
            "rows": [
              [
                "9 - 10 oz",
                "Caja: 1.000 uds • Paq: 50 uds"
              ],
              [
                "12 oz",
                "Caja: 1.000 uds • Paq: 50 uds"
              ],
              [
                "16 oz",
                "Caja: 1.000 uds • Paq: 50 uds"
              ],
              [
                "22 oz",
                "Caja: 1.000 uds • Paq: 50 uds"
              ]
            ]
          },
          "isTable": false
        },
        {
          "id": "tapas-vasos-en-u",
          "name": "Tapas para Vasos en U",
          "img": "vasos-y-contenedores/tapa-u",
          "caja": 1000,
          "paq": 40,
          "shortSpecs": "Viajera, Plana, Domo e Inserto",
          "description": "Gama completa de tapas compatibles con la serie de vasos en U.",
          "badges": [
            "Ajuste seguro",
            "Con o sin orificio"
          ],
          "table": {
            "headers": [
              "Tipo de Tapa",
              "Variante",
              "Empaque"
            ],
            "rows": [
              [
                "Tapa Viajera",
                "Cierre para beber",
                "Caja: 1.000 uds • Paq: 40 uds"
              ],
              [
                "Tapa Plana",
                "Con o sin perforación",
                "Caja: 1.000 uds • Paq: 40 uds"
              ],
              [
                "Tapa Domo",
                "Con o sin perforación",
                "Caja: 1.000 uds • Paq: 40 uds"
              ],
              [
                "Inserto contenedor",
                "Para toppings o cereal",
                "Caja: 1.000 uds • Paq: 40 uds"
              ]
            ]
          },
          "isTable": false
        }
      ]
    },
    {
      "id": "otros",
      "name": "Otros",
      "blurb": "Bandejas darnel de plásticos, vasos plásticos gold, portacomidas bio de icopor, platos hondos negros, vasos murano y copas venecia.",
      "products": []
    },
    {
      "id": "kit-ecologico",
      "name": "Kit ecológico",
      "blurb": "Combos listos para catering, celebraciones y eventos sostenibles.",
      "products": []
    }
  ]
  window.ECOCOSTA_DATA = { categories: CATEGORIES };
})();

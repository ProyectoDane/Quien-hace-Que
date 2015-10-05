const SONIDO_CONSIGNA = '/android_asset/www/audio/perro.mp3'


var niveles_oraciones_sintactica 	= [ //Niveles
  [ //Nivel
    [ //Sub-nivel
      {
        'text': 'La nena llora',
        'sound': '/android_asset/www/audio/La nena llora.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/La nena llora.mp3'
      },
      {
        'image': 'images/La nena llora.jpg'
      },
      {
        'image': 'images/La nena rie.jpg'
      },
      {
        'image': 'images/El chico llora.jpg'
      },
      {
        'image': 'images/El chico rie.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'La mujer estornuda',
        'sound': '/android_asset/www/audio/La mujer estornuda.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/La mujer estornuda.mp3'
      },
      {
        'image': 'images/La mujer estornuda.jpg'
      },
      {
        'image': 'images/La mujer bosteza.jpg'
      },
      {
        'image': 'images/El hombre estornuda.jpg'
      },
      {
        'image': 'images/El hombre bosteza.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'El perro sube',
        'sound': '/android_asset/www/audio/El perro sube.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/El perro sube.mp3'
      },
      {
        'image': 'images/El perro sube.jpg'
      },
      {
        'image': 'images/El perro baja.jpg'
      },
      {
        'image': 'images/El gato sube.jpg'
      },
      {
        'image': 'images/El gato baja.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'La mujer va de vacaciones',
        'sound': '/android_asset/www/audio/La mujer va de vacaciones.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/La mujer va de vacaciones.mp3'
      },
      {
        'image': 'images/La mujer va de vacaciones.jpg'
      },
      {
        'image': 'images/La mujer viene de vacaciones.jpg'
      },
      {
        'image': 'images/El hombre va de vacaciones.jpg'
      },
      {
        'image': 'images/El hombre viene de vacaciones.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'La chica aplaude',
        'sound': '/android_asset/www/audio/La chica aplaude.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/La chica aplaude.mp3'
      },
      {
        'image': 'images/La chica aplaude.jpg'
      },
      {
        'image': 'images/El chico aplaude.jpg'
      },
      {
        'image': 'images/Las chicas aplauden.jpg'
      },
      {
        'image': 'images/Los chicos aplauden.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'El caballo salta',
        'sound': '/android_asset/www/audio/El caballo salta.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/El caballo salta.mp3'
      },
      {
        'image': 'images/El caballo salta.jpg'
      },
      {
        'image': 'images/El perro salta.jpg'
      },
      {
        'image': 'images/Los caballos saltan.jpg'
      },
      {
        'image': 'images/Los perros saltan.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Los muchachos viajan',
        'sound': '/android_asset/www/audio/Los muchachos viajan.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Los muchachos viajan.mp3'
      },
      {
        'image': 'images/Los muchachos viajan.jpg'
      },
      {
        'image': 'images/Las chicas viajan.jpg'
      },
      {
        'image': 'images/El muchacho viaja.jpg'
      },
      {
        'image': 'images/La chica viaja.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Las estrellas brillan',
        'sound': '/android_asset/www/audio/Brillan las estrellas.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Brillan las estrellas.mp3'
      },
      {
        'image': 'images/Brillan las estrellas.jpg'
      },
      {
        'image': 'images/Brillan los cometas.jpg'
      },
      {
        'image': 'images/Brilla la estrella.jpg'
      },
      {
        'image': 'images/Brilla el cometa.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Cayó un avión',
        'sound': '/android_asset/www/audio/Cae un avion.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Cae un avion.mp3'
      },
      {
        'image': 'images/Cae un avion.jpg'
      },
      {
        'image': 'images/Despega un avion.jpg'
      },
      {
        'image': 'images/Cae un helicoptero.jpg'
      },
      {
        'image': 'images/Despega un helicoptero.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Se durmió el bebé',
        'sound': '/android_asset/www/audio/Se durmio el bebe.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Se durmio el bebe.mp3'
      },
      {
        'image': 'images/Se durmio el bebe.jpg'
      },
      {
        'image': 'images/Se desperto el bebe.jpg'
      },
      {
        'image': 'images/Se durmio el chico.jpg'
      },
      {
        'image': 'images/Se desperto el nino.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Llega papá',
        'sound': '/android_asset/www/audio/Llega papa.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Llega papa.mp3'
      },
      {
        'image': 'images/Llega papa.jpg'
      },
      {
        'image': 'images/Se va papa.jpg'
      },
      {
        'image': 'images/Llega mama.jpg'
      },
      {
        'image': 'images/Se va mama.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Ganó el atleta',
        'sound': '/android_asset/www/audio/Gano el atleta.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Gano el atleta.mp3'
      },
      {
        'image': 'images/Gano el atleta.jpg'
      },
      {
        'image': 'images/Perdio el atleta.jpg'
      },
      {
        'image': 'images/Gano el boxeador.jpg'
      },
      {
        'image': 'images/Perdio el boxeador.jpg'
      }
    ],
  ]          
];



var niveles_oraciones_semantica	 	= [ //Niveles
  [ //Nivel
    [ //Sub-nivel
      {
        'text': 'El hombre enciende la vela',
        'sound': '/android_asset/www/audio/El hombre enciende la vela.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/El hombre enciende la vela.mp3'
      },
      {
        'image': 'images/El hombre enciende la vela.jpg'
      },
      {
        'image': 'images/El hombre apaga la vela.jpg'
      },
      {
        'image': 'images/La mujer enciende la vela.jpg'
      },
      {
        'image': 'images/La mujer apaga la vela.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'El hombre lleva un bolso',
        'sound': '/android_asset/www/audio/El hombre lleva un bolso.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/El hombre lleva un bolso.mp3'
      },
      {
        'image': 'images/El hombre lleva un bolso.jpg'
      },
      {
        'image': 'images/El hombre trae un bolso.jpg'
      },
      {
        'image': 'images/La chica lleva un bolso.jpg'
      },
      {
        'image': 'images/La chica trae un bolso.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'El hombre enciende un cigarrillo',
        'sound': '/android_asset/www/audio/El hombre enciende el cigarrillo.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/El hombre enciende el cigarrillo.mp3'
      },
      {
        'image': 'images/El hombre enciende el cigarrillo.jpg'
      },
      {
        'image': 'images/El hombre apaga el cigarrillo.jpg'
      },
      {
        'image': 'images/El hombre enciende el fuego.jpg'
      },
      {
        'image': 'images/El hombre apaga el fuego.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'La mujer lleva un bolso',
        'sound': '/android_asset/www/audio/La chica lleva un bolso.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/La chica lleva un bolso.mp3'
      },
      {
        'image': 'images/La chica lleva un bolso.jpg'
      },
      {
        'image': 'images/La chica trae un bolso.jpg'
      },
      {
        'image': 'images/La chica lleva una valija.jpg'
      },
      {
        'image': 'images/La mujer trae una valija.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'El hombre lava el auto',
        'sound': '/android_asset/www/audio/El hombre lava el auto.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/El hombre lava el auto.mp3'
      },
      {
        'image': 'images/El hombre lava el auto.jpg'
      },
      {
        'image': 'images/La mujer lava el auto.jpg'
      },
      {
        'image': 'images/El hombre lava los platos.jpg'
      },
      {
        'image': 'images/La mujer lava los platos.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'El hombre lleva un bolso',
        'sound': '/android_asset/www/audio/El hombre lleva un bolso.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/El hombre lleva un bolso.mp3'
      },
      {
        'image': 'images/El hombre lleva un bolso.jpg'
      },
      {
        'image': 'images/La chica lleva un bolso.jpg'
      },
      {
        'image': 'images/El hombre lleva una valija.jpg'
      },
      {
        'image': 'images/La chica lleva una valija.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Una canción escucha el nene',
        'sound': '/android_asset/www/audio/Una cancion escucha el nene.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Una cancion escucha el nene.mp3'
      },
      {
        'image': 'images/Una cancion escucha el nene.jpg'
      },
      {
        'image': 'images/Una cancion canta el nene.jpg'
      },
      {
        'image': 'images/Una cancion escucha la nena.jpg'
      },
      {
        'image': 'images/Una cancion canta la nena.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Una canción canta el nene',
        'sound': '/android_asset/www/audio/Una cancion canta el nene.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Una cancion canta el nene.mp3'
      },
      {
        'image': 'images/Una cancion canta el nene.jpg'
      },
      {
        'image': 'images/Una cancion escucha el nene.jpg'
      },
      {
        'image': 'images/Una cancion canta la nena.jpg'
      },
      {
        'image': 'images/Una cancion escucha la nena.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Bananas vende la mujer',
        'sound': '/android_asset/www/audio/Bananas vende la mujer.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Bananas vende la mujer.mp3'
      },
      {
        'image': 'images/Bananas vende la mujer.jpg'
      },
      {
        'image': 'images/Bananas compra la mujer.jpg'
      },
      {
        'image': 'images/Bananas vende el hombre.jpg'
      },
      {
        'image': 'images/Bananas compra el hombre.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Un globo infla el nene',
        'sound': '/android_asset/www/audio/Un globo infla el nene.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Un globo infla el nene.mp3'
      },
      {
        'image': 'images/Un globo infla el nene.jpg'
      },
      {
        'image': 'images/Un globo patea el nene.jpg'
      },
      {
        'image': 'images/Una pelota infla el nene.jpg'
      },
      {
        'image': 'images/Una pelota patea el nene.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Un globo patea el nene',
        'sound': '/android_asset/www/audio/Un globo patea el nene.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Un globo patea el nene.mp3'
      },
      {
        'image': 'images/Un globo patea el nene.jpg'
      },
      {
        'image': 'images/Un globo infla el nene.jpg'
      },
      {
        'image': 'images/Una pelota patea el nene.jpg'
      },
      {
        'image': 'images/Una pelota infla el nene.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Uvas compra la mujer',
        'sound': '/android_asset/www/audio/Uvas compra la mujer.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Uvas compra la mujer.mp3'
      },
      {
        'image': 'images/Uvas compra la mujer.jpg'
      },
      {
        'image': 'images/Uvas vende la mujer.jpg'
      },
      {
        'image': 'images/Bananas compra la mujer.jpg'
      },
      {
        'image': 'images/Bananas vende la mujer.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Una moto maneja la abuela',
        'sound': '/android_asset/www/audio/Una moto maneja la abuela.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Una moto maneja la abuela.mp3'
      },
      {
        'image': 'images/Una moto maneja la abuela.jpg'
      },
      {
        'image': 'images/Una moto maneja el abuelo.jpg'
      },
      {
        'image': 'images/Un auto maneja la abuela.jpg'
      },
      {
        'image': 'images/Un auto maneja el abuelo.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Choclo come el loro',
        'sound': '/android_asset/www/audio/Choclo come el loro.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Choclo come el loro.mp3'
      },
      {
        'image': 'images/Choclo come el loro.jpg'
      },
      {
        'image': 'images/Choclo come el mono.jpg'
      },
      {
        'image': 'images/Sandia come el loro.jpg'
      },
      {
        'image': 'images/Sandia come el mono.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'La media se pone el hombre',
        'sound': '/android_asset/www/audio/La media se pone el hombre.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/La media se pone el hombre.mp3'
      },
      {
        'image': 'images/La media se pone el hombre.jpg'
      },
      {
        'image': 'images/La media se pone la mujer.jpg'
      },
      {
        'image': 'images/El zapato se pone el hombre.jpg'
      },
      {
        'image': 'images/El zapato se pone la mujer.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'La mujer pasea un perro',
        'sound': '/android_asset/www/audio/La mujer pasea al perro.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/La mujer pasea al perro.mp3'
      },
      {
        'image': 'images/La mujer pasea al perro.jpg'
      },
      {
        'image': 'images/Las mujeres pasean al perro.jpg'
      },
      {
        'image': 'images/La mujer pasea a los perros.jpg'
      },
      {
        'image': 'images/Las mujeres pasean a los perros.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'El chico toma un helado',
        'sound': '/android_asset/www/audio/El chico toma helado.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/El chico toma helado.mp3'
      },
      {
        'image': 'images/El chico toma helado.jpg'
      },
      {
        'image': 'images/Los chicos toman helado.jpg'
      },
      {
        'image': 'images/El chico toma helados.jpg'
      },
      {
        'image': 'images/Los chicos toman helados.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Los chicos leen un libro',
        'sound': '/android_asset/www/audio/.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/.mp3'
      },
      {
        'image': 'images/Los chicos leen el libro.jpg'
      },
      {
        'image': 'images/El chico lee el libro.jpg'
      },
      {
        'image': 'images/Los chicos leen los libros.jpg'
      },
      {
        'image': 'images/El chico lee los libros.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Las chicas toman un helado',
        'sound': '/android_asset/www/audio/Las chicas toman helado.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Las chicas toman helado.mp3'
      },
      {
        'image': 'images/Las chicas toman helado.jpg'
      },
      {
        'image': 'images/La chica toma un helado.jpg'
      },
      {
        'image': 'images/Las chicas toman helados.jpg'
      },
      {
        'image': 'images/La chica toma helados.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'La madre besa al hijo',
        'sound': '/android_asset/www/audio/La madre besa al hijo.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/La madre besa al hijo.mp3'
      },
      {
        'image': 'images/La madre besa al hijo.jpg'
      },
      {
        'image': 'images/La madre abraza al hijo.jpg'
      },
      {
        'image': 'images/El hijo besa a la madre.jpg'
      },
      {
        'image': 'images/El hijo abraza a la madre.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'La madre abraza al hijo',
        'sound': '/android_asset/www/audio/La madre abraza al hijo.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/La madre abraza al hijo.mp3'
      },
      {
        'image': 'images/La madre abraza al hijo.jpg'
      },
      {
        'image': 'images/La madre besa al hijo.jpg'
      },
      {
        'image': 'images/El hijo abraza a la madre.jpg'
      },
      {
        'image': 'images/El hijo besa a la madre.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'La mujer besa al perro',
        'sound': '/android_asset/www/audio/La mujer besa al perro.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/La mujer besa al perro.mp3'
      },
      {
        'image': 'images/La mujer besa al perro.jpg'
      },
      {
        'image': 'images/El hombre besa al perro.jpg'
      },
      {
        'image': 'images/El perro besa a la chica.jpg'
      },
      {
        'image': 'images/El perro besa al hombre.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'El hombre besa al perro',
        'sound': '/android_asset/www/audio/El hombre besa al perro.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/El hombre besa al perro.mp3'
      },
      {
        'image': 'images/El hombre besa al perro.jpg'
      },
      {
        'image': 'images/La mujer besa al perro.jpg'
      },
      {
        'image': 'images/El perro besa al hombre.jpg'
      },
      {
        'image': 'images/El perro besa a la chica.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'La mujer maquilla al hombre',
        'sound': '/android_asset/www/audio/la mujer maquilla al hombre.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/la mujer maquilla al hombre.mp3'
      },
      {
        'image': 'images/la mujer maquilla al hombre.jpg'
      },
      {
        'image': 'images/la mujer maquilla a la nena.jpg'
      },
      {
        'image': 'images/El hombre maquilla a la mujer.jpg'
      },
      {
        'image': 'images/la nena maquilla a la mujer.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'La mujer maquilla a la nena',
        'sound': '/android_asset/www/audio/la mujer maquilla a la nena.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/la mujer maquilla a la nena.mp3'
      },
      {
        'image': 'images/la mujer maquilla a la nena.jpg'
      },
      {
        'image': 'images/la mujer maquilla al hombre.jpg'
      },
      {
        'image': 'images/la nena maquilla a la mujer.jpg'
      },
      {
        'image': 'images/El hombre maquilla a la mujer.jpg'
      }
    ]
  ]
];

var niveles_oraciones_tematica 	= [ //Niveles
  [ //Nivel
    [ //Sub-nivel
      {
        'text': 'El médico le toma la presión al señor',
        'sound': '/android_asset/www/audio/El medico le toma la presion al senor.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/El medico le toma la presion al senor.mp3'
      },
      {
        'image': 'images/El medico le toma la presion al senor.jpg'
      },
      {
        'image': 'images/El medico le toma el pulso al senor.jpg'
      },
      {
        'image': 'images/La doctora toma la presion al senor.jpg'
      },
      {
        'image': 'images/La doctora toma el pulso al senor.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'El mozo le sirve la comida a la mujer',
        'sound': '/android_asset/www/audio/el mozo le sirve comida a la chica.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/el mozo le sirve comida a la chica.mp3'
      },
      {
        'image': 'images/el mozo le sirve comida a la chica.jpg'
      },
      {
        'image': 'images/El mozo le sirve vino a la mujer.jpg'
      },
      {
        'image': 'images/La camarera le sirve comida a la mujer.jpg'
      },
      {
        'image': 'images/La camarera le sirve vino a la mujer.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'El médico le toma al pulso al abuelo',
        'sound': '/android_asset/www/audio/El medico le toma el pulso al abuelo.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/El medico le toma el pulso al abuelo.mp3'
      },
      {
        'image': 'images/El medico le toma el pulso al abuelo.jpg'
      },
      {
        'image': 'images/El medico le toma el pulso a la abuela.jpg'
      },
      {
        'image': 'images/La doctora toma el pulso al abuelo.jpg'
      },
      {
        'image': 'images/La doctora toma el pulso a la abuela.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'El mozo le sirve vino a la pareja',
        'sound': '/android_asset/www/audio/El mozo le sirve vino a la pareja.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/El mozo le sirve vino a la pareja.mp3'
      },
      {
        'image': 'images/El mozo le sirve vino a la pareja.jpg'
      },
      {
        'image': 'images/El mozo le sirve vino al hombre.jpg'
      },
      {
        'image': 'images/La camarera le sirve vino a la pareja.jpg'
      },
      {
        'image': 'images/La camarera le sirve vino al senor.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'La doctora le controla la fiebre al nene',
        'sound': '/android_asset/www/audio/La doctora controla la fiebre al nene.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/La doctora controla la fiebre al nene.mp3'
      },
      {
        'image': 'images/La doctora controla la fiebre al nene.jpg'
      },
      {
        'image': 'images/La doctora controla la fiebre a la chica.jpg'
      },
      {
        'image': 'images/La doctora controla la presion al nene.jpg'
      },
      {
        'image': 'images/La doctora le controla la presion a la chica.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'El mozo le sirve comida a la chica',
        'sound': '/android_asset/www/audio/el mozo le sirve comida a la chica.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/el mozo le sirve comida a la chica.mp3'
      },
      {
        'image': 'images/el mozo le sirve comida a la chica.jpg'
      },
      {
        'image': 'images/El mozo le sirve la comida a la pareja.jpg'
      },
      {
        'image': 'images/El mozo le sirve vino a la mujer.jpg'
      },
      {
        'image': 'images/El mozo le sirve vino a la pareja.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'La mujer le da un regalo al hombre',
        'sound': '/android_asset/www/audio/La mujer le da un regalo al hombre.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/La mujer le da un regalo al hombre.mp3'
      },
      {
        'image': 'images/La mujer le da un regalo al hombre.jpg'
      },
      {
        'image': 'images/El hombre le da un regalo a la mujer.jpg'
      },
      {
        'image': 'images/La mujer le da dinero al hombre.jpg'
      },
      {
        'image': 'images/El hombre le da dinero a la mujer.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'El hombre le da dinero a la mujer',
        'sound': '/android_asset/www/audio/El hombre le da dinero a la mujer.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/El hombre le da dinero a la mujer.mp3'
      },
      {
        'image': 'images/El hombre le da dinero a la mujer.jpg'
      },
      {
        'image': 'images/La mujer le da dinero al hombre.jpg'
      },
      {
        'image': 'images/El hombre le da un regalo a la mujer.jpg'
      },
      {
        'image': 'images/La mujer le da un regalo al hombre.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'El empresario le señala la pantalla a la mujer',
        'sound': '/android_asset/www/audio/El hombre le senala la pantalla a la mujer.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/El hombre le senala la pantalla a la mujer.mp3'
      },
      {
        'image': 'images/El hombre le senala la pantalla a la mujer.jpg'
      },
      {
        'image': 'images/La mujer senala la pantalla al empresario.jpg'
      },
      {
        'image': 'images/El doctor le senala la pantalla a la mujer.jpg'
      },
      {
        'image': 'images/La mujer le senala la pantalla al doctor.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'El empresario le señala la pantalla a la mujer',
        'sound': '/android_asset/www/audio/El hombre le senala la pantalla a la mujer.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/El hombre le senala la pantalla a la mujer.mp3'
      },
      {
        'image': 'images/El hombre le senala la pantalla a la mujer.jpg'
      },
      {
        'image': 'images/La mujer senala la pantalla al empresario.jpg'
      },
      {
        'image': 'images/El doctor le senala la pantalla a la mujer.jpg'
      },
      {
        'image': 'images/La mujer le senala la pantalla al doctor.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'La chica le corta el pelo al muchacho',
        'sound': '/android_asset/www/audio/La chica le corta el pelo al muchacho.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/La chica le corta el pelo al muchacho.mp3'
      },
      {
        'image': 'images/La chica le corta el pelo al muchacho.jpg'
      },
      {
        'image': 'images/El muchacho le corta el pelo a la chica.jpg'
      },
      {
        'image': 'images/La chica le seca el pelo al muchacho.jpg'
      },
      {
        'image': 'images/El muchacho le seca el pelo a la chica.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'La chica le seca el pelo al muchacho',
        'sound': '/android_asset/www/audio/La chica le seca el pelo al muchacho.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/La chica le seca el pelo al muchacho.mp3'
      },
      {
        'image': 'images/La chica le seca el pelo al muchacho.jpg'
      },
      {
        'image': 'images/El muchacho le seca el pelo a la chica.jpg'
      },
      {
        'image': 'images/La chica le corta el pelo al muchacho.jpg'
      },
      {
        'image': 'images/El muchacho le corta el pelo a la chica.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'La mujer le muestra un teléfono al novio',
        'sound': '/android_asset/www/audio/la mujer le muestra el telefono al novio.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/la mujer le muestra el telefono al novio.mp3'
      },
      {
        'image': 'images/la mujer le muestra el telefono al novio.jpg'
      },
      {
        'image': 'images/El novio le muestra un telefono a la mujer.jpg'
      },
      {
        'image': 'images/la mujer le muestra un telefono al vendedor.jpg'
      },
      {
        'image': 'images/el vendedor le muestra un telefono a la mujer.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'La mujer le muestra un teléfono al vendedor',
        'sound': '/android_asset/www/audio/la mujer le muestra un telefono al vendedor.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/la mujer le muestra un telefono al vendedor.mp3'
      },
      {
        'image': 'images/la mujer le muestra un telefono al vendedor.jpg'
      },
      {
        'image': 'images/el vendedor le muestra un telefono a la mujer.jpg'
      },
      {
        'image': 'images/la mujer le muestra el telefono al novio.jpg'
      },
      {
        'image': 'images/El novio le muestra un telefono a la mujer.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Chocolate le pone el chef a la torta',
        'sound': '/android_asset/www/audio/Chocolate le pone el chef a la torta.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Chocolate le pone el chef a la torta.mp3'
      },
      {
        'image': 'images/Chocolate le pone el chef a la torta.jpg'
      },
      {
        'image': 'images/Crema le pone el chef a la torta.jpg'
      },
      {
        'image': 'images/Chocolate pone la cocinera a la torta.jpg'
      },
      {
        'image': 'images/Crema le pone la cocinera a la torta.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'A los alumnos el profesor les enseña matemática',
        'sound': '/android_asset/www/audio/Matematicas ensena el profesor a los alumnos.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Matematicas ensena el profesor a los alumnos.mp3'
      },
      {
        'image': 'images/Matematicas ensena el profesor a los alumnos.jpg'
      },
      {
        'image': 'images/Matematicas ensena la profesora a los alumnos.jpg'
      },
      {
        'image': 'images/Geografia ensena el profesor a los alumnos.jpg'
      },
      {
        'image': 'images/Geografia ensena la profesora a los alumnos.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'La oreja le revisa la veterinaria al gato',
        'sound': '/android_asset/www/audio/.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/.mp3'
      },
      {
        'image': 'images/Las orejas le revisa la veterinaria al gato.jpg'
      },
      {
        'image': 'images/Las orejas le revisa la veterinaria al perro.jpg'
      },
      {
        'image': 'images/Los dientes le revisa la veterinaria al gato.jpg'
      },
      {
        'image': 'images/Los dientes le revisa la veterinaria al perro.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Al marido le mostró la mujer una tarjeta roja',
        'sound': '/android_asset/www/audio/Al marido le mostro la mujer una tarjeta roja.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Al marido le mostro la mujer una tarjeta roja.mp3'
      },
      {
        'image': 'images/Al marido le mostro la mujer una tarjeta roja.jpg'
      },
      {
        'image': 'images/A la amiga le mostro le mujer una tarjeta roja.jpg'
      },
      {
        'image': 'images/Al marido le mostro la mujer la tarjeta amarilla.jpg'
      },
      {
        'image': 'images/A la amiga le mostro la mujer la tarjeta amarilla.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'Las llaves entregó el mecánico al hombre',
        'sound': '/android_asset/www/audio/Las llaves le entrega el mecanico al chico.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/Las llaves le entrega el mecanico al chico.mp3'
      },
      {
        'image': 'images/Las llaves le entrega el mecanico al chico.jpg'
      },
      {
        'image': 'images/Las llaves le entrega el mecanico a la mujer.jpg'
      },
      {
        'image': 'images/Las llaves le entrega el constructor al hombre.jpg'
      },
      {
        'image': 'images/Las llaves le entrega el constructor a la mujer.jpg'
      }
    ],
    [ //Sub-nivel
      {
        'text': 'A la comida la cocinera le agrega pimienta',
        'sound': '/android_asset/www/audio/A la comida la cocinera le agrega pimienta.mp3',
        'correct': 1, 
        'wordSound' : '/android_asset/www/audio/A la comida la cocinera le agrega pimienta.mp3'
      },
      {
        'image': 'images/A la comida la cocinera le agrega pimienta.jpg'
      },
      {
        'image': 'images/A la ensalada la cocinera le agrega pimienta.jpg'
      },
      {
        'image': 'images/A la comida el chef le agrega pimienta.jpg'
      },
      {
        'image': 'images/A la ensalada el chef le agrega pimienta.jpg'
      }
    ]
  ]
];


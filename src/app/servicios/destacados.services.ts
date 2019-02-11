import { Injectable } from '@angular/core';

@Injectable()
export class DestacadosService {

    private destacados: Destacado[] = [
        {
          nombre: 'Ter Stegen',
          posicion: 'Portero',
          bio: 'Tras 18 años ligado al Borussia Mönchengladbach, el 19 de mayo de 2014 y tras varios meses llenos de rumores, finalmente el Fútbol Club Barcelona hace oficial su contratación por 12 millones de euros.',
          img: 'assets/img/ter-stegen.png',
          nacimiento: '1992-04-30',
          equipo: 'FC Barcelona',
          id: 0
        },
        {
          nombre: 'Hugo Mallo',
          posicion: 'Lateral derecho',
          bio: 'Formado en las categorías inferiores del Celta de Vigo aunque comenzó jugando en el equipo de la localidad pontevedresa Salgueiriños, en el cual ya destacaba y formaba parte de categorías superiores a la de su edad. En la categoría infantil fichó por el Pontevedra C.F., donde permaneció un año, ya que al siguiente ficharía por su actual club.',
          img: 'assets/img/mallo.png',
          nacimiento: '1991-06-22',
          equipo: 'RC Celta de Vigo',
          id: 1
        },
        {
          nombre: 'Gerard Piqué',
          posicion: 'Defensa central',
          bio: 'Formado en la cantera del FC Barcelona. Fue internacional absoluto con España entre 2009 y 2018, totalizando 102 partidos y 5 goles, con la que se proclamó campeón del mundo en 2010 y campeón de Europa en 2012.',
          img: 'assets/img/pique.png',
          nacimiento: '1987-02-02',
          equipo: 'FC Barcelona',
          id: 2
        },
        {
          nombre: 'Raphaël Varane',
          posicion: 'Defensa central',
          bio: 'Formado en las categorías inferiores del Racing Club de Lens, debutó en 2010 con el equipo del Paso de Calais en la Ligue 1, con apenas 17 años. La siguiente temporada 2011/12, fichó por el Real Madrid,​ bajo recomendación del entonces asesor del club blanco, Zinedine Zidane. Es internacional absoluto con la selección francesa desde 2013, con la que se ha proclamado campeón del mundo en 2018.',
          img: 'assets/img/varane.png',
          nacimiento: '1993-04-25',
          equipo: 'Real Madrid CF',
          id: 3
        },
        {
          nombre: 'Jordi Alba',
          posicion: 'Lateral izquierdo',
          bio: 'Empezó a jugar en 1996 para el At. Hospitalense, uno de los equipos de su ciudad natal. En 1998, fichó por el F. C. Barcelona. Tras estar siete años en las categorías inferiores del F. C. Barcelona, en 2005 deja La Masía para recalar en las filas del UE Cornellà. En la segunda temporada fue fichado por el Valencia CF. El 28 de junio de 2012, mientras se disputaba la Eurocopa, el Valencia y el Barcelona llegaron a un principio de acuerdo para el traspaso del jugador a cambio de 14 millones de euros. También es internacional con la selección de España, con la que fue campeón de la Eurocopa 2012.',
          img: 'assets/img/alba.png',
          nacimiento: '1989-03-21',
          equipo: 'FC Barcelona',
          id: 4
        },
        {
          nombre: 'Sergio Canales',
          posicion: 'Centrocampista',
          bio: 'Como jugador profesional se formó en la cantera del Real Racing Club de Santander, equipo con el que debutó el 5 de octubre de 2008 en Primera División. En 2010 fue traspasado al Real Madrid, que lo cedió al Valencia Club de Fútbol en la siguiente temporada. En agosto de 2012 fue traspasado al Valencia C.F. con contrato hasta 2017, año en el que fue fichado por la Real Sociedad de Fútbol el 30 de enero de 2014. Actualmente es jugador del Real Betis Balompié, desde el verano de 2018.',
          img: 'assets/img/canales.png',
          nacimiento: '1991-02-16',
          equipo: 'Real Betis Balompié',
          id: 5
        },
        {
          nombre: 'Arthur Melo',
          posicion: 'Centrocampista',
          bio: 'Comenzó su carrera en Grêmio Foot-Ball Porto Alegrense antes de unirse al Fútbol Club Barcelona por una precio inicial de 31 millones de euros en 2018. Arthur hizo su debut con la selección de fútbol de Brasil en septiembre de 2018.',
          img: 'assets/img/arthur.png',
          nacimiento: '1996-08-12',
          equipo: 'FC Barcelona',
          id: 6
        },
        {
          nombre: 'Daniel Parejo',
          posicion: 'Centrocampista',
          bio: 'Capitán en el Valencia Club de Fútbol de la Primera División de España. Con la selección española sub-19 fue campeón del Europeo sub-19 en 2007, marcando en la final el gol decisivo, campeón también en los Juegos Mediterráneos de 2009, y con la selección sub-21 de la Eurocopa Sub-21 de 2011.',
          img: 'assets/img/parejo.png',
          nacimiento: '1989-04-16',
          equipo: 'València CF',
          id: 7
        },
        {
          nombre: 'Leo Messi',
          posicion: 'Extremo derecho',
          bio: 'Ha desarrollado toda su carrera en el F. C. Barcelona de la Primera División de España y en la selección argentina, de la que es capitán. Considerado con frecuencia el mejor jugador del mundo y el mejor jugador de todos los tiempos. es el primer futbolista en la historia que ha ganado, entre otras distinciones, cinco veces el Balón de Oro –un Balón de Oro y cuatro FIFA Balón de Oro– obteniendo los cuatro primeros de forma consecutiva; además de recibir cinco Botas de Oro.',
          img: 'assets/img/messi.png',
          nacimiento: '1987-06-24',
          equipo: 'FC Barcelona',
          id: 8
        },
        {
          nombre: 'Karim Benzema',
          posicion: 'Delantero',
          bio: 'Comenzó su carrera deportiva en las categorías inferiores del Olympique Lyonnais y debutó con el primer equipo en 2004. En sus cinco temporadas en el club francés disputó 112 partidos de liga y anotó 43 goles. En la temporada 2007-08, Benzema se convirtió en el máximo goleador de la Ligue 1 con 20 goles, lo que le valió para conseguir, también, el premio al Jugador del Año de la liga francesa. Tras finalizar esa temporada, el futbolista francés ficha por el Real Madrid C.F.',
          img: 'assets/img/benzema.png',
          nacimiento: '1987-12-19',
          equipo: 'Real Madrid CF',
          id: 9
        },
        {
          nombre: 'Ousmane Dembélé',
          posicion: 'Extremo izquierdo',
          bio: 'Formado en el Stade Rennais Football Club, el 24 de agosto de 2017 durante el sorteo de la Liga de Campeones de la UEFA 2017-18 llevado a cabo en Mónaco, los dirigentes del Borussia Dortmund, después de varias semanas de intensas negociaciones, lograron llegar a un acuerdo con el Barcelona para el traspaso de Dembélé por una cifra de 145 millones de euros. Es internacional con la selección de Francia, con la cual se consagró campeón de la Copa Mundial de Fútbol de Rusia 2018.',
          img: 'assets/img/dembele.png',
          nacimiento: '1987-05-15',
          equipo: 'FC Barcelona',
          id: 10
        }
      ];

    constructor() {

    }

    getDestacados(): Destacado[] {
        return this.destacados;
    }

    getDestacado(index: number): Destacado {
      if (index < 0)  { index *= -1; }
      if (index > 10) { index %= 11; }
      return this.destacados[index];
    }
}

export interface Destacado {
    nombre: string;
    posicion: string;
    bio: string;
    img: string;
    nacimiento: string;
    equipo: string;
    id: number;
}

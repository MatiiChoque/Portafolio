export const skills = [
  {
    skill: "JavaScript",
    image: "JavascriptL.png",
  },
  {
    skill: "Css",
    image: "cssL.png",
  },
  {
    skill: "Html",
    image: "htmlL.png",
  },
  {
    skill: "React.js",
    image: "ReactjsL.png",
  },
  {
    skill: "Mongodb",
    image: "MongoL.png",
  },
  {
    skill: "Node.js",
    image: "NodejsL.png",
  },
  {
    skill: "Next.js",
    image: "NextjsL.png",
  },
  {
    skill: "Express",
    image: "ExpressL.png",
  },
  {
    skill: "Redux",
    image: "ReduxL.png",
  },
  {
    skill: "PostgreSQL",
    image: "PostgreSQLL.png",
  },
  {
    skill: "Bootstrap",
    image: "BootstrapL.png",
  },
  {
    skill: "Git",
    image: "GitL.png",
  },
];

export const experience = [
  {
    title: "Encargado administrativo - Finanzas - Hospital Militar",
    description:
      "Rendición, gestión y control de combustibles, lubricantes y víveres. Me desempeñé como encargado, logrando un aumento significativo en el rendimiento y organización del área, como así también dejando precedentes de un adaptable y marcado modo de gestión sobre una innovadora aplicación web implementada a comienzos del año 2014.",
    from: "Sep 2013",
    to: "Jul 2022",
  },
  {
    title: "Six Circle",
    description:
      "Formé parte del Back, en donde pude realizar mis contribuciones organizando los servidores , agregando varias funcionalidades al sistema y ayudando en la gestión del funcionamiento de la pagina web, creamos la base de datos con MongoDB.",
    from: "May 2023",
    to: " Jun 2023",
  },
  {
    title: "Countries App",
    description:
      "Esta aplicación web está basada en React y está creada para tener un lugar de consulta sobre países de todo el mundo permitiendo poder buscar, filtrar y ver detalles de cada país junto con sus actividades correspondientes. Utiliza la API de Countries para mostrar información existente y permite la creación de nuevas actividades y almacenarlos en una base de datos PostgreSQL con los detalles personalizados. Para poder encontrar el País o sus actividades podemos ordenarlo alfabéticamente, por población o el tipo de actividad, también dispone de la posibilidad de ver detalles de cada País, como cantidad de población, capital, continente y actividades, etc.",
    from: "Abr 2023",
    to: "May 2023",
  },
];

export const projects = [
  {
    id: 1,
    name: "SixCircle",
    description: `Diseñamos y desarrollamos una aplicación orientada a un MarketPlace.`,
    detail: {
      funcionalidades: [
        "Autenticación local y de terceros.",
        "Búsquedas.",
        "Filtros combinados.",
        "Ordenamientos.",
        "Sistema de administración de usuarios.",
        "Gestión y alojamiento de imágenes.",
        "Pasarela de pagos.",
        "Envío de emails.",
      ],
      cuerpo: `Formé parte del Back junto a otra persona, en donde pude realizar mis contribuciones organizando los servidores , agregando varias funcionalidades al sistema y ayudando en la gestión del funcionamiento de la pagina web, creamos la base de datos con MongoDB. 
      `,
      tecnologias: {
        front: ["React.js", "Redux", "Axios", "Typescript", "Sass"],
        back: [
          "Javascript",
          "Node.js",
          "Mongoose",
          "Multer",
          "Express.js",
          "Bcrypt",
          "JWT",
          "Mercado Pago",
          "Google",
          "Nodemailer",
          "Cloudinary",
        ],
      },
    },
    image: "Home.JPG",
  },
  {
    id: 2,
    name: "AppCountries",
    description: `Esta aplicación web está creada para tener un lugar de consulta sobre países de todo el mundo.`,
    detail: {
      funcionalidades: [
        "REST API",
        "Búsquedas.",
        "Filtros combinados.",
        "Ordenamientos.",
        "Base de datos PostgreSQL",
      ],
      cuerpo: `Proyecto individual en Henry - Utiliza la API de Countries para mostrar información existente y permite la creación de nuevas actividades y almacenarlos en una base de datos PostgreSQL con los detalles personalizados. Para poder encontrar el País o sus actividades podemos ordenarlo alfabéticamente, por población o el tipo de actividad, también dispone de la posibilidad de ver detalles de cada País, como cantidad de población, capital, continente y actividades, etc. 
      `,
      tecnologias: {
        front: ["React.js", "Redux", "Axios", "Javascript", "CSS", "HTML"],
        back: [
          "Javascript",
          "Node.js",
          "PostgreSQL",
          "Express.js",
          "Sequelize",
        ],
      },
    },
    image: "picountries.JPG",
  },
  {
    id: 3,
    name: "Portafolio",
    description: `Considero a mi portafolio como un proyecto en sí mismo, ya que tuve la oportunidad de aplicar la mayor parte de los nuevos conocimientos que adquirí como desarrollador web.`,
    detail: {
      funcionalidades: [],
      cuerpo: `Me complace presentar mi portfolio recientemente diseñado. Es el resultado de la mejora continua, la exploración de nuevos enfoques de diseño y la búsqueda de soluciones óptimas. El diseño prioriza las interacciones fáciles de usar para garantizar una experiencia de navegación optima. Me esfuerzo por brindar la mejor experiencia de usuario posible, y este portfolio es un testimonio de mi compromiso continuo con la excelencia en el desarrollo web.

      El principal desafío era mantener la aplicación adaptable y atractiva para todos los tamaños de pantalla, desde un móvil pequeño hasta pantallas grandes. En este proyecto aprendí a trabajar de manera más efectiva y rápida. Como resultado, logre crear un producto que se adapta exitosamente a cualquier dispositivo, manteniendo el balance y la integridad sin dejar de lado la funcionalidad y la estética. 
      `,
      tecnologias: {
        front: ["React.js", "Redux", "Axios", "Typescript", "Sass"],
        back: [
          "Javascript",
          "Node.js",
          "Mongoose",
          "Multer",
          "Express.js",
          "Bcrypt",
          "JWT",
          "Mercado Pago",
          "Google",
          "Nodemailer",
          "Cloudinary",
        ],
      },
    },
    image: "portafolio.JPG",
  },
];
export const profile = {
  presentacion: `¡Hola! Gusto en conocerte, Soy Matías, un apasionado por la tecnología y la programación. Desde pequeño sentí un gran interés por la tecnología, soy estudiante universitario de la carrera Ingeniería Informática, e igualmente sigo en constante crecimiento aprovechando todo tipo de información y cursos, actualmente acabo de terminar un bootcamp en programación (SoyHenry).`,
  background:
    "Tengo experiencia en el manejo de grupos, liderazgo , capacitación y entrenamiento de personas. Trabajé 9 años en un Hospital Militar de los cuales casi 8 años y 6 meses los desempeñe como encargado. Me caracterizo por ser una persona organizada, responsable, comprometida y dedicada. Busco siempre cumplir con los objetivos de la mejor manera adaptándome al entorno constantemente. Me gusta trabajar y generar ambientes laborales confortables y organizados. Disfruto ayudar y trabajar en equipo, también soy una persona abierta a los feedbacks constructivos.",
  pasatiempos:
    "En mis tiempos libres disfruto de las caminatas, natación y videojuegos, pero sobretodo disfruto mucho de realizar viajes y contemplar todo tipo de paisajes en el camino.",
};

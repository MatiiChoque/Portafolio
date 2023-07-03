import Link from "next/link";
import Image from "next/image";
import perfil from "../public/MATIASCHOQUE.jpg";
import { skills, experience, projects } from "@/profile";

export default async function IndexPage() {
  return (
    <>
      <header className="row">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <Image src={perfil} alt="" width={426} height={240} />
            </div>
            <div className="col-md-8">
              <h1>Matias Choque</h1>
              <h3>Full Stack Developer</h3>
              <p>
                ¡Hola! Soy Matías, un apasionado por la tecnología y la
                programación. 🙋‍♂️ Desde pequeño sentí un gran interés por la
                tecnología, soy estudiante universitario de la carrera
                Ingeniería Informática, aunque por motivos de fuerza mayor tuve
                que suspenderlo temporalmente, aun así, sigo en constante
                crecimiento consumiendo todo tipo de información y cursos,
                actualmente acabo de terminar un bootcamp en programación
                (SoyHenry). 📚📖 Tengo experiencia en el manejo de grupos,
                liderazgo , capacitación y entrenamiento de personas. Trabaje 9
                años en un Hospital Militar de los cuales casi 8 años y 7 meses
                los desempeñe como encargado.🤝🏻 ✔️ Me caracterizo por ser una
                persona organizada, responsable, comprometida y dedicada. Busco
                siempre cumplir con los objetivos de la mejor manera adaptándome
                al entorno constantemente. ♻️ Me gusta trabajar y generar
                ambientes laborales confortables y organizados. Disfruto ayudar
                y trabajar en equipo como también soy una persona abierta a los
                feedbacks constructivos.
              </p>
              {/* <a href="/hireme">Contratame!</a> */}
            </div>
          </div>
        </div>
      </header>
      {/*Segunda Seccion*/}
      <div className="row py-2">
        <div className="col-md-4">
          <div className="card bd-ligth">
            <div className="card-body">
              <h1>Tecnologias</h1>

              {skills?.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bd-ligth">
            <div className="card-body">
              <h1>Experiencia</h1>
              <ul>
                {experience?.map(({ title, description, from, to }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from}-{to}
                    </h5>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*Portafolio*/}
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col md-12">
                <h1 className="text-center text-light">Portafolio</h1>
              </div>
            </div>
            {projects?.map(({ name, description, image }, i) => (
              <div className="col-md-4 p-2" key={i}>
                <div className="card h-100">
                  <div className="overflow">
                    <img src={image} alt="" className="card-img-top" />
                  </div>
                  <div className="card-body">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href="#!">Más Informacion</a>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-center mt-4">
              <Link href="/portafolio" className="btn btn-outline-light">
                Más Proyectos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

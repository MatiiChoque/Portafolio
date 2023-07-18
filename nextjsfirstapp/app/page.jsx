import Link from "next/link";
import Image from "next/image";
import perfil from "../public/MATIASCHOQUE.jpg";
import { profile, skills, experience, projects } from "@/profile";
import ubicacion from "../public/pngegg.png";
export default async function IndexPage() {
  return (
    <>
      <header className="row">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-3">
              <Image
                src={perfil}
                alt=""
                width={426}
                height={240}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div
              className=" row col-md-8"
              style={{ display: "flex", alignItems: "center" }}
            >
              <h3>Bienvenido!</h3>
              <h1>Matias Choque</h1>
              <h3>Desarrollador Web Full Stack</h3>
              <h5>
                <Image
                  src={ubicacion}
                  alt=""
                  width={125}
                  height={125}
                  style={{ width: "4%", marginRight: "1%" }}
                />
                SALTA, ARGENTINA
              </h5>

              <a
                href="Resume.pdf"
                download="CV Matias Choque.pdf"
                className="btn btn-outline-light my-2"
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </header>
      {/*Segunda Seccion*/}
      <div className=" py-2">
        <div className="col-md-12 pb-2">
          <div className="card  bd-ligth">
            <div className="card-body">
              <h1>Informacion Personal</h1>
              <ul>
                <li>
                  <p>{profile.presentacion}</p>
                </li>
                <li>
                  <p>{profile.pasatiempos}</p>
                </li>
                <li>
                  <p>{profile.background}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card bd-ligth">
            <div className="card-body">
              <h1>Experiencia Laboral</h1>
              <ul>
                <li>
                  <h3>{experience[0].title}</h3>
                  <h5>
                    {experience[0].from} - {experience[0].to}
                  </h5>
                  <p>{experience[0].description}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*Portafolio*/}
      <div className="">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="">
              <div className="col md-12">
                <h1 className="text-center text-light">Portafolio</h1>
              </div>
            </div>
            <div className="row">
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
            </div>
            <div className="text-center mt-4">
              <Link href="/portafolio" className="btn btn-outline-light">
                Más Proyectos
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* {Tecnologias} */}
      <div className="col-md-12 pt-2">
        <div className="card bd-ligth">
          <div className="card-body">
            <h1>Tecnologias</h1>
            <div className="row">
              {skills?.map(({ skill, image }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <Image
                    src={image}
                    alt=""
                    width={426}
                    height={240}
                    style={{ width: "15%" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

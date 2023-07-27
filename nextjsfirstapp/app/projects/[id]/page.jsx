import { projects } from "@/profile";
import Image from "next/image";

async function getProject(id) {
  let project = {};
  for (let item of projects) {
    if (item.id === Number(id)) {
      project = item;
    }
  }
  return project;
}

export default async function UserPage({ params }) {
  const { name, description, image, detail } = await getProject(params.id);
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-8 ">
        <div className="card">
          <div className="card-header text-center">
            <h1>{name}</h1>
          </div>
          <div className="card-body text-center">
            <div>
              <Image
                src={`/${image}`}
                priority="true"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="col-md-12 ">
          <div className="card" style={{ backgroundColor: "#e8ddcb" }}>
            <div className="card-body">
              <h2>Descripcion</h2>
              <h5>{description}</h5>
              <p>{detail?.cuerpo}</p>
              <h2>Funcionalidades</h2>
              {detail?.funcionalidades.map((funcion) => (
                <ul>
                  <li>
                    <p>{funcion}</p>
                  </li>
                </ul>
              ))}
              <h2>Tecnologias y librerias</h2>
              <h4>Front:</h4>
              {detail?.tecnologias.front.map((tech) => (
                <ul>
                  <li>
                    <p>{tech}</p>
                  </li>
                </ul>
              ))}
              <h4>Backend:</h4>
              {detail?.tecnologias.back.map((tech) => (
                <ul>
                  <li>
                    <p>{tech}</p>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

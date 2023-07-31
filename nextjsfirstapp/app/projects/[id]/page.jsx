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
        <div className="card" style={{ backgroundColor: "#e8ddcb" }} >
          <div className="card-header text-center" >
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
        <div className="col-md-12 py-2">
          <div className="card" style={{ backgroundColor: "#e8ddcb" }}>
            <div className="card-body">
              <h2 className="text-center p-2">Descripción</h2>
              <h5>{description}</h5>
              <p>{detail?.cuerpo}</p>
              {detail.funcionalidades.length ? <><h2>Funcionalidades</h2>
              {detail?.funcionalidades.map((funcion, i) => (
                <ul key={i}>
                  <li>
                    <p>{funcion}</p>
                  </li>
                </ul>
              ))}</>:<></>}
              
              <h2 className="text-center p-2">Tecnologías y librerías</h2>
              <h4 className="p-1">Front:</h4>
              {detail?.tecnologias.front.map((tech, i) => (
                <ul key={i}>
                  <li>
                    <p>{tech}</p>
                  </li>
                </ul>
              ))}
              <h4 className="p-1">Backend:</h4>
              {detail?.tecnologias.back.map((tech, i) => (
                <ul key={i}>
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

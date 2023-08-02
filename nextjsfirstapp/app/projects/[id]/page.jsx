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
        <div className="card" style={{ backgroundColor: "#e8ddcb" }}>
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
        <div className="col-md-12 py-2">
          <div className="card" style={{ backgroundColor: "#e8ddcb" }}>
            <div className="card-body">
              <h2 className="text-center p-2">Descripción</h2>
              <h5 className=" my-1 mx-4">{description}</h5>
              <p className="mt-3 mx-4">{detail?.cuerpo}</p>
              {detail?.funcionalidades?.length ? (
                <>
                  <h2 className="text-center py-2">Funcionalidades</h2>
                  <div className="d-flex flex-wrap justify-content-center ">
                    {detail?.funcionalidades?.map((funcion, i) => (
                      <span
                        key={i}
                        className="py-3 mx-2 my-2 badge rounded-pill  w-auto"
                        style={{ backgroundColor: "#17a7a8" }}
                      >
                        {funcion}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <></>
              )}

              <h2 className="text-center py-4">Tecnologías y librerías</h2>
              <h4 className="text-center my-3">Front</h4>
              <div className="d-flex flex-wrap justify-content-center ">
                {detail?.tecnologias?.front?.map((tech, i) => (
                  <span
                    key={i}
                    className="py-2 mx-2 my-2 badge rounded-pill text-bg-primary  w-auto"
                    style={{ backgroundColor: "#17a7a8" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {detail?.tecnologias?.back?.length ? (
                <>
                  <h4 className="text-center my-3">Back</h4>
                  <div className="d-flex flex-wrap justify-content-center ">
                    {detail?.tecnologias?.back?.map((tech, i) => (
                      <span
                        key={i}
                        className="py-2 mx-2 my-2 badge rounded-pill   w-auto"
                        style={{ backgroundColor: "#267705" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

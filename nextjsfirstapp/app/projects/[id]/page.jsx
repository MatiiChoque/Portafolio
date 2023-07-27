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
              <div>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 ">
          <div className="card" style={{ backgroundColor: "#e8ddcb" }}>
            <div className="card-body">
              <h1>Informacion Personal</h1>
              <ul>
                <li>
                  <p>hola</p>
                </li>
                <li>
                  <p>hola1</p>
                </li>
                <li>
                  <p>hola2</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

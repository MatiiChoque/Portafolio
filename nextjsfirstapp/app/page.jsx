import Users from "@/components/Users";
import { skills, experience } from "@/profile";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

export default async function IndexPage() {
  const users = await fetchUsers();
  return (
    <>
      <header className="row">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img
                src="MATIASCHOQUE.jpg"
                alt=""
                className="img-fluid"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="col-md-8">
              <h1>Matias Choque</h1>
              <h3>Full Stack Developer</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequatur, quis distinctio similique neque ipsam iusto!
                Nostrum, praesentium dicta voluptatibus sequi consectetur
                delectus est deleniti earum sunt similique nihil provident
                culpa?
              </p>
              <a href="/hireme">Contratame!</a>
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
    </>
  );
}

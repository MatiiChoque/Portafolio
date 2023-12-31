import Link from "next/link";

const cargarDatos = () => {
  return fetch("https://api.github.com/users/MatiiChoque")
    .then((res) => res.json())
    .then((data) => data);
};

export default async function ServicePage() {
  const datos = await cargarDatos();

  return (
    <div>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{datos.name}</h1>
            <img
              src={datos.avatar_url}
              alt=""
              style={{ borderRadius: "50%", border: "1px solid black" }}
            />
            <p className="my-2">{datos.bio}</p>
            <Link
              href={`${datos.html_url}`}
              target="_blank"
              className="btn btn-outline-secondary "
            >
              Ir a Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

const cargarDatos = () => {
  return fetch("https://api.github.com/users/MatiiChoque", {
    cache: "no-store",
  })
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
            <img src={datos.avatar_url} alt="" />
            <p className="my-2">{datos.bio}</p>
            <Link
              href={datos.html_url}
              target="_blank"
              className="btn btn-outline-secondary my-2"
            >
              Ir a Github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import Users from "@/components/Users";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

export default async function IndexPage() {
  const users = await fetchUsers();
  return (
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
              Consequatur, quis distinctio similique neque ipsam iusto! Nostrum,
              praesentium dicta voluptatibus sequi consectetur delectus est
              deleniti earum sunt similique nihil provident culpa?
            </p>
            <a href="/hireme">Contratame!</a>
          </div>
        </div>
      </div>
    </header>
  );
}

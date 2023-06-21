async function getUser(id) {
  console.log(id);
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

export default async function UserPage({ params }) {
  const user = await getUser(params.id);
  return (
    <div>
      <h1>User Details</h1>
      <div>
        <img src={user.avatar} alt="" />
        <div>
          <h3>
            {user.id} {user.first_name} {user.last_name}
          </h3>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
}

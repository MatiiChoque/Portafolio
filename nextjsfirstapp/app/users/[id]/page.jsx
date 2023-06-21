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
      {JSON.stringify(user)}
    </div>
  );
}

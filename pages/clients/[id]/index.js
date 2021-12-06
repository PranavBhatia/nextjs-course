import { useRouter } from "next/router";

function ClientsProjectPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: router.query.id, clientprojectid: "projecta" },
    });
  }

  return (
    <div>
      <h1>The Clients Project Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsProjectPage;

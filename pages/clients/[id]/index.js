import { useRouter } from "next/router";

function ClientsProjectPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Clients Project Page</h1>
    </div>
  );
}

export default ClientsProjectPage;

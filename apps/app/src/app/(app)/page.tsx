import { auth } from "@/actions/actions";

export default async function Home() {
  const subject = await auth();

  return <>{subject ? `user id: ${subject.properties.id}` : null}</>;
}

const Page = async ({ params }: { params: { place_id: string } }) => {
  const data = await fetchData(params.place_id);

  return <div>{params.place_id}</div>;
};

const fetchData = async (place_id: string) => {
  const url = `http://localhost:3000/api/place?place_id=${place_id}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Data fetching failed");
  }

  return await res.json();
};

export default Page;

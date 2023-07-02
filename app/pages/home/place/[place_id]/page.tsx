const Page = async ({ params }: { params: { place_id: string } }) => {
  return <div>{params.place_id}</div>;
};

export default Page;

export default async function Page({ params }: { params: { token: string } }) {
  const valid_token = await validateToken(params.token);

  return (
    <>
      <div className="h-full w-full flex items-center">
        <div className="text-6xl w-full text-center">
          {valid_token
            ? "Your account has been validated!"
            : "Oops! it looks like the link has expired or does not exist!"}
        </div>
      </div>
    </>
  );
}

const validateToken = async (token: string) => {
  const url = `http://localhost:3000/api/myauth/validateToken?token=${token}`;
  const res = await fetch(url, { next: { revalidate: 0 } });
  return res.status === 200;
};

import ForgetPassword from "@/app/components/forgetPassword";
export default async function Page({ params }: { params: { token: string } }) {
  const valid_token = await validateToken(params.token);
  if (valid_token) {
    return <ForgetPassword token={params.token} />;
  } else {
    return (
      <>
        <div className="h-full w-full flex items-center">
          <div className="text-6xl text-center">
            Oops! it looks like the link has expired or does not exist!
          </div>
        </div>
      </>
    );
  }
}

const validateToken = async (token: string) => {
  const url = `http://localhost:3000/api/myauth/validateToken?token=${token}`;
  const res = await fetch(url, { next: { revalidate: 0 } });
  return res.status === 200;
};

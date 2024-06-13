import { serialize } from "cookie";

export async function POST(request, params) {
  const data = await request.json();
  const password = data.password;
  const cookie = serialize(process.env.PASSWORD_COOKIE_NAME, "true", {
    httpOnly: true,
    path: "/",
  });

  if (process.env.PAGE_PASSWORD !== password) {
    return new Response("incorrect password", {
      status: 401,
    });
  }

  return new Response("password correct", {
    status: 200,
    headers: {
      "Set-Cookie": cookie,
    },
  });
}

import axios from "axios";

export async function GET() {
  const response = await axios.get(`https://api.deezer.com/user/6136819801`);

  return Response.json({ data: response.data });
}

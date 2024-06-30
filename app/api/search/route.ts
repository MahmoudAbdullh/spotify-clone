// pages/api/search.ts
import type { NextApiRequest } from "next";
import axios from "axios";

export async function GET(request: NextApiRequest) {
  const { searchParams } = new URL(request.url || "");
  const query = searchParams.get("q");
  const response = await axios.get(`https://api.deezer.com/search?q=${query}`);

  return Response.json({ data: response.data.data });
}

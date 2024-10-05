import axios from "axios";
import { cities } from "./indiancitys";
export async function POST(request: Request) {
  const body = await request.json();
  const search = body.search
  // @ts-ignore
  if (!search) return Response.json({ message: 'No search query provided' }, { status: 400 })
  const citysearch = cities.filter(city => city.city.toLowerCase().includes(search.toLowerCase()))
  const statesearch = cities.filter(city => city.state.toLowerCase().includes(search.toLowerCase()))
  let finalresponce = [...citysearch, ...statesearch]
  const startswith = finalresponce.filter((item) => item.city.toLowerCase().startsWith(search.toLowerCase()))
  if ((startswith.length > 0)) {
    finalresponce = startswith
  } else {
  }

  finalresponce = finalresponce.slice(0, 6)
  return Response.json(finalresponce, {
    status: 200,
  })
}

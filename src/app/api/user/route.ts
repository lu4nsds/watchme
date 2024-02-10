import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  const user = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  const { password, ...result } = user;
  return new Response(JSON.stringify(result));
}

export async function GET(request: Request) {
    const acessToken = request.headers.get("authorization");
    if(!acessToken || !verifyJwt(acessToken)){
      return new Response(JSON.stringify({
          error: "Unauthorized"
      }),
      {
          status: 401,
      }
      )
    }
    const users = await prisma.user.findMany();
    return new Response(JSON.stringify(users));
}
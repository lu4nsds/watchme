import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";

interface RequestBody {
  title: string;
  description: string;
  image: string;
}

export async function POST(request: Request) {
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
    const body: RequestBody = await request.json();
    const movie = await prisma.movie.create({
        data: {
        title: body.title,
        description: body.description,
        image: body.image,
        },
    });

  return new Response(JSON.stringify(movie));
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
    const movies = await prisma.movie.findMany();
    return new Response(JSON.stringify(movies));
}

// export async function PUT( request: Request, {params} : {params: {id: number}}) {
//     const movie = await prisma.movie.update({
//         where: {id: +params.id},

//     })
//     return new Response(JSON.stringify(movie));
// }
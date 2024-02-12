import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface RequestBody {
  title: string;
  description: string;
  image: string;
}

export async function POST(request: Request) {
    try {
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
    } catch(err){
        return NextResponse.json({
            message: "Error",
            err
        },
        {
            status: 500
        })
    }    
}

export async function GET(request: Request) {
    try {
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
    } catch(err){
        return NextResponse.json({
            message: "Error",
            err
        },
        {
            status: 500
        })
    }
}

export async function DELETE( request: Request) {
    try {
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
        const { id } = await request.json();
        const user = await prisma.movie.delete({
            where: {
                id
            }
        }); 
        return Response.json(user);
    } catch(err){
        return NextResponse.json({
            message: "Error",
            err
        },
        {
            status: 500
        })
    }
}

export async function PUT( request: Request) {
    try {
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
        const { id, title, description, image } = await request.json();
        const movie = await prisma.movie.update({
            where: {
                id
            },
            data:{
                title,
                description,
                image,
            }
        });
        return Response.json(movie);
    } catch(err){
        return NextResponse.json({
            message: "Error",
            err
        },
        {
            status: 500
        })
    }
  }
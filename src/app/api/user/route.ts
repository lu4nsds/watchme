import { verifyJwt } from "@/lib/jwt";
import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";
import { NextResponse } from "next/server";

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

interface FullRequestBody {
  id: number;
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: await bcrypt.hash(body.password, 10),
      },
    });
    const { password, ...result } = user;
    return new Response(JSON.stringify(result));
  }catch(err){
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
    const users = await prisma.user.findMany();
    return new Response(JSON.stringify(users));
  }catch(err){
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
      const user = await prisma.user.delete({
          where: {
              id
          }
      }); 
      const { password, ...result } = user;
      return Response.json(result);
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
      const body: FullRequestBody = await request.json();
      const user = await prisma.user.update({
          where: {
            id: body.id
          },
          data:{
            name: body.name,
            email: body.email,
            password: await bcrypt.hash(body.password, 10),
          }
      });
      const { password, ...result } = user;
      return Response.json(result);
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
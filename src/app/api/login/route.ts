import { signJwtAccessToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import * as bcrypt from 'bcrypt';
import { json } from "stream/consumers";

interface RequestBody {
    username: string;
    password: string;
}

export async function POST(request:Request) {
    const body : RequestBody = await request.json();
    const user = await prisma.user.findFirst({
        where: {
            email: body.username,
        }
    })

    if (user && (await bcrypt.compare(body.password, user.password))){
        const {password, ...userWithoutPass } = user;
        const acessToken = signJwtAccessToken(userWithoutPass);
        const result = { 
            ...userWithoutPass,
            acessToken,
        }
        return new Response(JSON.stringify(result));
    } else {
        return new Response(JSON.stringify(null));
    }
}
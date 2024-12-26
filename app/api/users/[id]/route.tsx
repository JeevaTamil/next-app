import { NextRequest, NextResponse } from "next/server";
import { notFound } from "next/navigation";
import schema from "../schema";
import prisma from "@/prisma/client";

// interface Props {
//   params: {
//     id: string;
//   };
// }

// export async function GET(request: NextRequest, { params }: Props) {
//   const id = await params.id;
//   const user = await prisma.user.findUnique({
//     where: {
//       id: id,
//     },
//   });

//   if (!user)
//     return NextResponse.json({ error: "User not found" }, { status: 404 });

//   return NextResponse.json(user);
// }

interface Props {
  params: {
    id: string;
  };
}

async function isUserExists(id: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });

  return user;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const user = await isUserExists(id);
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const id = (await params).id;
  const user = await isUserExists(id);
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const updatedUser = await prisma.user.update({
    where: { id: id },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return NextResponse.json(updatedUser, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const user = await isUserExists(id);
  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  await prisma.user.delete({ where: { id: id } });

  return NextResponse.json({});
}

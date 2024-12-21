import { NextRequest, NextResponse } from "next/server";
import productSchema from "../schema";
import prisma from "@/prisma/client";

interface Props {
  params: {
    id: string;
  };
}

async function isProductExists(id: number) {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  return product;
}

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const product = await isProductExists(parseInt(id));
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  return NextResponse.json(product);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const body = await request.json();
  const validation = productSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const product = await isProductExists(parseInt(id));
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  const updatedProduct = await prisma.product.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name: body.name,
      price: body.price,
    },
  });

  return NextResponse.json(updatedProduct, { status: 200 });
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const product = await isProductExists(parseInt(id));
  if (!product)
    return NextResponse.json({ error: "Product not found" }, { status: 404 });

  await prisma.product.delete({
    where: {
      id: parseInt(id),
    },
  });
  return NextResponse.json({});
}

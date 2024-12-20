import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Milk", price: 30.0 },
    { id: 2, name: "Bread", price: 40.0 },
  ]);
}

interface Props {
  params: {
    id: number;
    name: string;
    price: number;
  };
}

export async function POST(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = productSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  return NextResponse.json(
    { id: 4, name: body.name, price: body.price },
    { status: 201 }
  );
}

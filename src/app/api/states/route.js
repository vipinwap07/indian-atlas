import { NextResponse } from "next/server";
import data from "@/public/data.json";

export async function GET() {
  try {
    if (!Array.isArray(data)) return NextResponse.json({ success: false, message: "Invalid data format", description: "Expected an array of states from the data source." }, { status: 500 });

    const states = data.map((state) => ({ name: state.name, code: state.code, slug: state.slug, capital: state.capital, type: state.type, TIN: state.TIN, source: state.source, cities: state.cities }));

    return NextResponse.json({ success: true, message: "States fetched successfully", count: states.length, data: states }, { status: 200 });
  } catch (error) {
    console.error("Error loading states:", error);
    return NextResponse.json({ success: false, message: "Failed to load states", description: "An unexpected server error occurred" }, { status: 500 });
  }
}

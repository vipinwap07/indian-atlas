import { NextResponse } from "next/server";
import data from "@/public/data.json";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const stateParam = searchParams.get("state")?.toLowerCase();
    const startsWith = searchParams.get("startswith")?.toLowerCase();
    const limit = parseInt(searchParams.get("limit")) || undefined;
    const offset = parseInt(searchParams.get("offset")) || 0;

    let allCities = [];

    data.forEach((state) => {
      state.cities.forEach((city) => {
        allCities.push({ city, state: state.name, slug: state.slug, code: state.code, capital: city.toLowerCase() === state.capital.toLowerCase() });
      });
    });

    // Filter by state if ?state= query is present
    if (stateParam) {
      allCities = allCities.filter((c) => c.slug === stateParam);
    }

    // Filter by name prefix if ?startswith= query is present
    if (startsWith) {
      allCities = allCities.filter((c) => c.city.toLowerCase().startsWith(startsWith));
    }

    // Apply offset and limit
    const sliced = limit ? allCities.slice(offset, offset + limit) : allCities.slice(offset);

    return NextResponse.json({ success: true, message: "Cities fetched successfully", count: sliced.length, total: allCities.length, data: sliced });
  } catch (error) {
    console.error("Error loading cities:", error);
    return NextResponse.json({ success: false, message: "Failed to load cities", description: "An unexpected server error occurred" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import data from "@/public/data.json";

export async function GET(request, { params }) {
  try {
    const { slug } = params;

    if (!slug) return NextResponse.json({ success: false, message: "Missing state slug", description: "You must provide a valid state slug" }, { status: 400 });

    const state = data.find((state) => state.slug === slug.toLowerCase());

    if (!state) return NextResponse.json({ success: false, message: "State not found", description: `No state found with slug '${slug}'` }, { status: 404 });

    return NextResponse.json({ success: true, message: "State fetched successfully", data: state });
  } catch (error) {
    console.error("Error loading state:", error);
    return NextResponse.json({ success: false, message: "Failed to load state", description: "An unexpected server error occurred" }, { status: 500 });
  }
}

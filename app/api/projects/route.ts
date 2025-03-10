// For Next.js App Router (/app/api/projects/route.ts)
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch("https://cms.saitechnology.co/items/saiTechnologyProjects");
    
    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.status}`);
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    console.error("Error fetching projects:", error);
    
    const errorMessage = error instanceof Error 
      ? error.message 
      : "Failed to fetch projects";
      
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
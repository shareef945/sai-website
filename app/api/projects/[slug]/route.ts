import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  
  try {
    // Fetch all projects first
    const response = await fetch("https://cms.saitechnology.co/items/saiTechnologyProjects");
    
    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Find the specific project by slug
    const project = data.data.find((project: any) => project.slug === slug);
    
    if (!project) {
      return NextResponse.json(
        { error: "Project not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ data: project });
  } catch (error: unknown) {
    console.error("Error fetching project by slug:", error);
    
    const errorMessage = error instanceof Error 
      ? error.message 
      : "Failed to fetch project";
      
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
export interface Project {
    id: number;
    status: string;
    date_created: string;
    shortDescription: string;
    longDescription: string;
    url: string;
    landingMedia: string;
    services: string[] | null;
    clientName: string;
    dates: string;
    challenge1: string | null;
    solution1: string | null;
    challenge2: string | null;
    solution2: string | null;
    challenge3: string | null;
    solution3: string | null;
    result1: string | null;
    result2: string | null;
    result3: string | null;
    techUsed: string | null;
    feature1: string | null;
    feature1Img: string | null;
    feature2: string | null;
    feature2Img: string | null;
    feature3: string | null;
    feature3Img: string | null;
    feature4: string | null;
    feature4Img: string | null;
    feature5: string | null;
    feature5Img: string | null;
    grid1: string | null;
    grid2: string | null;
    grid3: string | null;
    grid4: string | null;
    testimonial: string | null;
    testimonialOwner: string | null;
    slug: string;
  }
  
  export interface ProjectsResponse {
    data: Project[];
  }
  
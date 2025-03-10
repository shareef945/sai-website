export const endpoints = {
    reports: {
      count: "/tech/reports/count",
      databases: "/tech/reports/databases",
      industries: "/tech/reports/industries",
      projects: "/tech/reports/projects",
      project: (slug: string) => `/tech/reports/projects/${slug}`,
    }
  };
  
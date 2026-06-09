export async function getLeads() {
  try {
    const res = await fetch("http://localhost:3000/api/leads", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch leads");
    }

    return res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
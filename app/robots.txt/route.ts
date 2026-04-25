export const dynamic = "force-static";

const BASE_URL = "https://blog.infinitygravity.com.br";

export function GET() {
  const robots = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}

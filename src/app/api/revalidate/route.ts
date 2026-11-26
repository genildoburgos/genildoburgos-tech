import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret =
    request.nextUrl.searchParams.get("secret") ||
    request.headers.get("x-revalidate-secret");
  const expectedSecret =
    process.env.REVALIDATION_SECRET || "genildoburgos-tech-revalidate-secret";

  if (secret !== expectedSecret) {
    return NextResponse.json(
      { message: "Unauthorized: invalid revalidation secret" },
      { status: 401 }
    );
  }

  try {
    const body = (await request.json().catch(() => ({}))) as {
      path?: string;
    };

    const targetPath = request.nextUrl.searchParams.get("path") || body.path || "/";

    revalidatePath(targetPath);

    return NextResponse.json({
      revalidated: true,
      path: targetPath,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error revalidating";
    return NextResponse.json(
      { message: "Failed to revalidate cache", error: message },
      { status: 500 }
    );
  }
}

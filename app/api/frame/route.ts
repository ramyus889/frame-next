import { NextRequest, NextResponse } from "next/server";

async function getResponse(req: NextRequest): Promise<NextResponse | any> {
  const searchParams = req.nextUrl.searchParams;
  const id: any = searchParams.get("id");
  const idAsNumber = parseInt(id);

  const nextId = idAsNumber + 1;

  if (idAsNumber === 32) {
    return new NextResponse(`<!DOCTYPE html><html><head>
            <title>This is frame 32</title>
            <meta property="fc:frame" content="vNext"/>
            <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRaTSD5nFJvLZp83AcmJZ8HbbzD1PcXLjeLgVy1kKHWem"/>
            <meta property="fc:frame:button:1" content="Visit CarCityCode.cloud"/>
            <meta property="fc:frame:button:1:action" content="post_redirect"/>
            <meta property="fc:frame:button:2" content="Learn How this was made"/>
            <meta property="fc:frame:button:2:action" content="post_redirect"/>
            <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/end"/>

        </head></html>`);
  } else {
    return new NextResponse(`<!DOCTYPE html><html><head>
            <title>This is frame ${id}</title>
            <meta property="fc:frame" content="vNext"/>
            <meta property="fc:frame:image" content="${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmRaTSD5nFJvLZp83AcmJZ8HbbzD1PcXLjeLgVy1kKHWem/${id}"/>
            <meta property="fc:frame:button:1" content="Next Page"/>
            <meta property="fc:frame:post_url" content="${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=${nextId}"/>
        </head></html>`);
  }
}

export async function POST(req: NextRequest): Promise<NextResponse | any> {
  return getResponse(req);
}

export const dynamic = "force-dynamic";

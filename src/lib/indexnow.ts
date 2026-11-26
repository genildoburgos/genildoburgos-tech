export const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY?.trim() || "d84f8812e1244838b939f60cb0eb4143";

export const INDEXNOW_HOST =
  process.env.INDEXNOW_HOST?.trim() || "genildoburgos.tech";

export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

export interface IndexNowResult {
  success: boolean;
  status: number;
  urls: string[];
  error?: string;
}

export async function notifyIndexNow(
  urls: string | string[] = [`https://${INDEXNOW_HOST}`]
): Promise<IndexNowResult> {
  const urlList = Array.isArray(urls) ? urls : [urls];

  try {
    const payload = {
      host: INDEXNOW_HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`,
      urlList,
    };

    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    const isSuccess = response.ok || response.status === 200 || response.status === 202;

    return {
      success: isSuccess,
      status: response.status,
      urls: urlList,
      error: isSuccess ? undefined : `IndexNow responded with status ${response.status}`,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return {
      success: false,
      status: 500,
      urls: urlList,
      error: message,
    };
  }
}

import { getPlaiceholder } from 'plaiceholder';

export const getBase64 = async (src: string) => {
  try {
    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
    const { base64 } = await getPlaiceholder(buffer);
    return base64;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }
};

export const getAllBase64 = async (photoUrls: Array<string>) => {
  const base64Data = photoUrls.map((url) => getBase64(url));
  const base64results = await Promise.all(base64Data);

  return base64results;
};

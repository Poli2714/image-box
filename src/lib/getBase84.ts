import { getPlaiceholder } from 'plaiceholder';

export const getBase64 = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );
  const { base64 } = await getPlaiceholder(buffer);
  return base64;
};

export const getAllBase64 = async (photoUrls: Array<string>) => {
  const base84Data = photoUrls.map((url) => getBase64(url));
  const base84results = await Promise.all(base84Data);

  return base84results;
};

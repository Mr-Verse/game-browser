export function getCroppedImageUrl(url: string | null) {
  if (!url) return;
  const index = url.indexOf("media/") + "media/".length;
  const urlCrop = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return urlCrop;
}

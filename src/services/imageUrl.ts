export function getCroppedImageUrl(url: string | null) {
  if (!url)
    return "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png";
  const index = url.indexOf("media/") + "media/".length;
  const urlCrop = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return urlCrop;
}

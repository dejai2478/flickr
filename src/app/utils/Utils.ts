import { EMPTY_STRING, AMPERSAND, TEXT, EQUAL, QUESTION_MARK, PAGE} from "./Constants";

export const getFlickrImageSrc = (
  server: string,
  imageId: string,
  secret: string,
  size: string
) => {
  return `https://live.staticflickr.com/${server}/${imageId}_${secret}_${size}.jpg`;
};

export const buildFlickerGetUrl = (
  url: string,
  params: { [k: string]: string | number },
  page: number,
  searchValue?: string,
) => {
  let paramStringBuilder = EMPTY_STRING;
  Object.keys(params).forEach((key, index, array) => {
    paramStringBuilder += key + EQUAL + params[key];
    if (index !== array.length - 1) paramStringBuilder += AMPERSAND;
  });
  if (searchValue) {
    paramStringBuilder += AMPERSAND + TEXT + EQUAL + searchValue;
  }
  return url + QUESTION_MARK + paramStringBuilder + AMPERSAND + PAGE + EQUAL + page;
};
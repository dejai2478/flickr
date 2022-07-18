import React, { useState, useEffect, useCallback} from "react";
import { useDebounce } from "../utils/useDebounce";
import { Spinner } from "../components/StyledComponents"
import Metadata from "../components/Metadata";
import SearchBar from "../components/SearchBar";
import ImageGrid from "../components/ImageGrid";
import Header from "../components/Header";
import { buildFlickerGetUrl } from "../utils/Utils";
import {
  SEARCH_PLACEHOLDER,
  EMPTY_STRING,
  EMPTY_ARRAY,
  FLICKR_API_URL,
  FLICKER_API_PARAMS,
  DEFAULT_PAGE,
    DEBOUNCE_DELAY,
} from "../utils/Constants";

const FlickrImageSearch = () => {
  const [searchValue, setSearchValue] = useState<string>(EMPTY_STRING);
  const debouncedSearchValue = useDebounce(searchValue, DEBOUNCE_DELAY)
  const [images, setImages] = useState<any>(EMPTY_ARRAY);
  const [page, setPage] = useState<number>(DEFAULT_PAGE);
  const [hasMore, setHasMore] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [totalPhotos, setTotalPhotos] = useState<number>(0)

  useEffect(() => {
    let getUrl = buildFlickerGetUrl(
      FLICKR_API_URL,
      FLICKER_API_PARAMS,
      page,
        debouncedSearchValue
    );
    fetch(getUrl).then((res) => res.json().then((res) => {
      setTotalPhotos(res.photos.total)
      if (res.photos.pages > page) setHasMore(true)
      if (page === DEFAULT_PAGE)
        setImages(res.photos.photo)
      else setImages((prevImages: any) => [...prevImages, ...res.photos.photo])
    }).finally(() => setLoading(false)));
  }, [debouncedSearchValue, page]);

  const handleScroll = useCallback((event: React.UIEvent<HTMLElement>) => {
    if (loading) return
    let target = event.target as HTMLElement
    let scrollHeight = target.scrollHeight;
    let scrollTop = target.scrollTop;
    if ((scrollHeight < scrollTop + 2000) && hasMore) {
      setPage((prevPage) => prevPage + DEFAULT_PAGE);
      setLoading(true)
    }
  }, [hasMore, loading])

  const onSearch = useCallback((text: string) => {
    setSearchValue(text)
    setPage(DEFAULT_PAGE)
    setLoading(true)
  }, [])

  return (
    <div>
      <Header>
        <SearchBar
          value={searchValue}
          setValue={onSearch}
          placeholder={SEARCH_PLACEHOLDER}
        />
        {images.length > 0 && <Metadata totalNumber={totalPhotos} showing={images.length}/>}
      </Header>
      <ImageGrid images={images} handleScroll={handleScroll} />
      {loading && <Spinner/>}
    </div>
  );
};

export default FlickrImageSearch;

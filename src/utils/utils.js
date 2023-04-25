import { axiosReq } from "../api/axiosDefaults";

/*
  Updates data based on request with the InfiniteScroll component
  Once content is loaded as per API pagnation limit a request is 
  sent for the next page of results
*/
export const fetchMoreData = async (resource, setResource) => {
  try {
    const { data } = await axiosReq.get(resource.next);
    setResource((prevResource) => ({
      ...prevResource,
      next: data.next,
      results: data.results.reduce((acc, cur) => {
        return acc.some((accResult) => accResult.id === cur.id)
          ? acc
          : [...acc, cur];
      }, prevResource.results),
    }));
  } catch (err) {
    console.log(err);
  }
};

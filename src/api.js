import axios from "axios";

const searchImages = async (term) => {
    const response = await  axios.get("https://api.unsplash.com/search/photos?page=3&query=office", {
      headers: {
        Authorization: 'Client-ID T6esN32jHKN0lKHHee_o_KIdKvUIPMtuRykBrPI1q1Q',
      },
      params: { query: term, },
    });
    debugger;
    return response.data.results;
  };

  export default searchImages ;
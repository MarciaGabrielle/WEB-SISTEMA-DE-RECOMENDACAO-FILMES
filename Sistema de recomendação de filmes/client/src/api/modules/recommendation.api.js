import privateClient from "../client/private.client";

const recommendationApi = {
    getRecommendations: async () => {
      try {
        const response = await privateClient.get("recommendations");
        return { response };
      } catch (err) {
        return { err };
      }
    }
  };
  
  export default recommendationApi;
  

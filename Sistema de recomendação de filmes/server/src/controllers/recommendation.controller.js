import responseHandler from "../handlers/response.handler.js";
import favoriteModel from "../models/favorite.model.js";
import tmdbApi from "../tmdb/tmdb.api.js";

const getRecommendations = async (req, res) => {
  try {
    // Busca os favoritos do usuário
    const favorites = await favoriteModel.find({ user: req.user.id });

    if (!favorites.length) {
      return responseHandler.ok(res, { message: "Nenhum favorito encontrado." });
    }

    // IDs dos filmes favoritos
    const favoriteIds = favorites.map((fav) => fav.mediaId.toString());

    let recommendationsSet = new Set();

    // Para cada favorito, buscar recomendações do TMDB
    for (const favorite of favorites) {
      const recommendations = await tmdbApi.mediaRecommend({
        mediaType: favorite.mediaType,
        mediaId: favorite.mediaId,
      });

      if (recommendations?.results) {
        recommendations.results.forEach((movie) =>
          recommendationsSet.add(JSON.stringify(movie))
        );
      }
    }

    // Converter de volta para objetos únicos (removendo duplicatas)
    const uniqueRecommendations = Array.from(recommendationsSet).map((movie) =>
      JSON.parse(movie)
    );

    if (!uniqueRecommendations.length) {
      return responseHandler.ok(res, { message: "Nenhuma recomendação encontrada." });
    }

    // 🔹 Filtrar filmes que já estão nos favoritos
    const filteredUniqueRecommendations = uniqueRecommendations.filter(
      (movie) => !favoriteIds.includes(movie.id?.toString())
    );

    if (!filteredUniqueRecommendations.length) {
      return responseHandler.ok(res, { message: "Nenhuma recomendação encontrada." });
    }

    responseHandler.ok(res, filteredUniqueRecommendations.slice(0, 20)); // Limita a 20 recomendações
  } catch (error) {
    console.error("Erro ao buscar recomendações:", error);
    responseHandler.error(res);
  }
};

export default { getRecommendations };

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecommendations } from '../redux/features/recommendationSlice';
import HeroSlide from '../components/common/HeroSlide';
import tmdbConfigs from "../api/configs/tmdb.configs";
import { Box } from '@mui/material';
import uiConfigs from "../configs/ui.configs";
import Container from "../components/common/Container";
import MediaSlide from "../components/common/MediaSlide";
import RecommendSlide from '../components/common/RecommendSlide';

const HomePage = () => {
  const dispatch = useDispatch();

  // Obtém o usuário e as recomendações do Redux Store
  const user = useSelector(state => state.user.user);
  const { recommendations, loading, error } = useSelector(state => state.recommendations);

  useEffect(() => {
    // 🔹 Só busca recomendações se o usuário estiver logado
    if (user) {
      dispatch(fetchRecommendations());
    }
  }, [dispatch, user]);

  return (
    <>
      <HeroSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.popular} />

      <Box marginTop="-4rem" sx={{ ...uiConfigs.style.mainContent }}>

        {/* 🔹 Seção de Recomendações - Só aparece se houver recomendações */}
        {user && recommendations.length > 0 && (
          <Container header="Recommendations For You">
            {loading ? (
              <p>Loading recommendations...</p>
            ) : error ? (
              <p>Error loading recommendations</p>
            ) : (
              <RecommendSlide medias={recommendations} mediaType={tmdbConfigs.mediaType.movie} />
            )}
          </Container>
        )}

        {/* 🔹 Outras seções existentes */}
        <Container header="Popular Movies">
          <MediaSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.popular} />
        </Container>

        <Container header="Popular Series">
          <MediaSlide mediaType={tmdbConfigs.mediaType.tv} mediaCategory={tmdbConfigs.mediaCategory.popular} />
        </Container>

        <Container header="Top Rated Movies">
          <MediaSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.top_rated} />
        </Container>

        <Container header="Top Rated Series">
          <MediaSlide mediaType={tmdbConfigs.mediaType.tv} mediaCategory={tmdbConfigs.mediaCategory.top_rated} />
        </Container>

      </Box>
    </>
  );
};

export default HomePage;

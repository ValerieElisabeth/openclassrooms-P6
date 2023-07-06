function statisticalsFactoty(datasPhotographers, datasMedia) {
  const {
    name,
    id: photographerId,
    city,
    country,
    tagline,
    price: photographerDaylyPrice,
    portrait,
  } = datasPhotographers;
  //
  const {
    id: mediaPictureId,
    photographerId: photographerMediaId,
    title,
    image,
    video,
    likes,
    date,
    price: picturePrice,
  } = datasMedia;

  function statisticalDisplayDOM() {
    const sectionStatistic = document.createElement('section');
  }

  return {
    datasPhotographers,
    name,
    photographerId,
    city,
    country,
    tagline,
    photographerDaylyPrice,
    portrait,
    //
    datasMedia,
    mediaPictureId,
    photographerMediaId,
    title,
    image,
    video,
    likes,
    date,
    picturePrice,
  };
}

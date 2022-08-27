const axios = require('axios');

export const axiosPhotos = async (value, page) => {
  const KEY = '25175816-a3b0e6224fe7d6836881efcec';
  return await axios(
    `https://pixabay.com/api/?q=${value}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => res.data);
};

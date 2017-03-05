const YEAR = function getYear() {
    return new Date().getFullYear();
}();

const categoryFetchData = () => {
  const dataUrl = 'http://localhost:8080/category';

  return fetch(dataUrl)
    .then(res => {
        return res.json();
    })
    .then(data => {
        return data.map(({ _id, name, src }) => ({ id: _id, name, src}));
    })

};

const dishFetchData = () => {
  const url = 'http://localhost:8080/category/dishes';

  return fetch(url)
    .then(res => {
      return res.json();
    })
	  .then(data => {
		  return data.map(({
		    _id,
        dishName,
        srcImage,
        description,
        category,
        comments,
        likes
		  }) => ({
		    id: _id,
			  dishName,
			  srcImage,
			  description,
			  category,
			  comments,
			  likes
		  }));
	  })
};

export { YEAR , categoryFetchData, dishFetchData };
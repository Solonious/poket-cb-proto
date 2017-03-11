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

const dishesFetchData = (url) => {
	return fetch(url)
		.then(res =>  res.json())
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

const dishFetchData = (url) => {
  return fetch(url)
    .then(res => {
      return res.json();
    })
	  .then(data => {
		  return data
	  })
};

export { YEAR , categoryFetchData, dishFetchData, dishesFetchData };
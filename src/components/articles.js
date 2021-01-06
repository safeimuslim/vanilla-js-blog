const img = {
  alt: 'Audits set-up in Chrome DevTools',
  src: 'https://miro.medium.com/fit/c/200/200/1*7raSM6pg5VIm6HNZVFQAsg.jpeg',
};

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      if (!response.ok) {
        throw new Error('ERROR');
      }
      return response.json();
    })
    .then((data) => {
      return {
        message: 'Success to fetch posts',
        data,
        status: 200,
      };
    })
    .catch((error) => {
      return {
        message: 'Failed to fetch posts',
        data: [],
        status: error.status,
      };
    });
};

const renderPopular = (posts) => {
  let popular = '';
  posts.slice(0, 3).forEach((item) => {
    popular += `
          <li>
            <img
              width="150px"
              height="150px"
              alt="${img.alt}"
              src="${img.src}"
            />
            <div class="description">
              <h1><a href="#">${item.title}</a></h1>
              <p>${item.body}</p>
              <div class="date">20 maret 2020</div>
            </div>
          </li>`;
  });
  return popular;
};

const renderLists = (posts) => {
  let lists = '';
  posts.forEach((item) => {
    lists += `
          <li>
            <img
              width="150px"
              height="150px"
              alt="${img.alt}"
              src="${img.src}"
            />
            <div class="description">
              <h1><a href="#">${item.title}</a></h1>
              <p>${item.body}</p>
              <div class="date">20 maret 2020</div>
            </div>
          </li>`;
  });
  return lists;
};

export const articles = async () => {
  const posts = await fetchPosts();
  let contentPopular = posts.message;
  let contentList = posts.message;

  if (posts.status === 200) {
    contentPopular = renderPopular(posts.data);
    contentList = renderLists(posts.data);
  }

  return `
  <div>
    <ul class="popular">${contentPopular}</ul>
    <hr class="p-20-0" />
    <ul id="list" class="list">${contentList}</ul>
  </div>`;
};

export default { articles };

import 'whatwg-fetch';

export default function (baseUrl) {
  function generateRequest(path, config) {
    return new Request(`${baseUrl}/${path}`,
      Object.assign({ mode: 'cors' }, config));
  }

  function getPosts() {
    const request = generateRequest('', {});
    return fetch(request).then(
      response => response.json().then(posts =>
        Promise.resolve(
          posts.reduce((acc, post) =>
            Object.assign(acc, { [post._id]: post })
          , {})
        )
      )
    ).catch(error => Promise.reject(error));
  }

  function updatePost(post) {
    const request = generateRequest(`${post.id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    return fetch(request).then(response =>
      (response.status === 200 ? Promise.resolve(post) :
        Promise.reject('HTTP response code was not 200'))
    ).catch(error => Promise.reject(error));
  }

  function submitPost(post) {
    const request = generateRequest('', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
    return fetch(request).then(response =>
      (response.status === 201 ? response.json().then(
          jsonResponse => Promise.resolve(jsonResponse)) :
        Promise.reject('HTTP response code was not 201'))
    ).catch(error => Promise.reject(error));
  }

  function deletePost(postId) {
    const request = generateRequest(`${postId}`, {
      method: 'DELETE',
    });
    return fetch(request).then(response =>
      (response.status === 200 ? Promise.resolve(response) :
        Promise.reject('HTTP response code was not 200'))
    ).catch(error => Promise.reject(error));
  }

  return {
    getPosts,
    updatePost,
    submitPost,
    deletePost,
  };
}

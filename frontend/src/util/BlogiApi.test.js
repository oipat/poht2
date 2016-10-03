import makeBlogiApi from './BlogiApi'


const api = makeBlogiApi('http://hostname/contexroot/');

const testPosts = [
  {
    created: '2016-09-05T14:12:09.538Z',
    title: ' ,m,m,mm,',
    body: 'nn,n,n,',
    _id: 'AgR814eynPABU42g',
  },
  {
    created: '2016-09-05T14:11:58.713Z',
    title: ',,,,,,mmmm',
    body: 'mmmmmm',
    _id: 'HQkmVKHfz9kggraw',
  },
  {
    created: '2016-09-05T13:37:20.394Z',
    title: 'testpost3',
    body: 'testpost3',
    _id: 'SvmZm8iMvUif9iFx',
  },
  {
    title: 'BlogPostTitle1311',
    body: 'BlogPostBody3',
    author: 'Author3',
    created: '2016-07-01T00:00:00.000Z',
    _id: 'j2JsA91d75mQnhL6',
  },
];

const testPostNew = {
  created: '2016-09-05T11:12:09.538Z',
  title: 'newposttitle',
  body: 'newpostbody',
};

function makeHttpResponse(statusCode, data) {
  return new window.Response(data, {
    status: statusCode,
    headers: {
      'Content-type': 'application/json',
    },
  });
}

let stubedFetch;
beforeEach(() => {
  stubedFetch = sinon.stub(window, 'fetch');
});

afterEach(() => {
  stubedFetch.restore();
});

describe('BlogiApi#getPosts', () => {
  it('returns promise with posts when successful', () => {
    const mockResponse = makeHttpResponse(200, JSON.stringify(testPosts));
    stubedFetch.returns(Promise.resolve(mockResponse));
    const ret = api.getPosts();
    return ret.then((posts) => {
      expect(posts).to.be.an('object');
      expect(Object.keys(posts).length).to.equal(4);
    });
  });

  it('returns promise with error when fetch was not successful', () => {
    stubedFetch.returns(Promise.reject('errormsg'));
    const ret = api.getPosts();
    return ret.catch((error) => {
      expect(error).to.equal('errormsg');
    });
  });

  it('returns empty array when there are no posts', () => {
    const mockResponse = makeHttpResponse(200, JSON.stringify([]));
    stubedFetch.returns(Promise.resolve(mockResponse));

    const ret = api.getPosts();
    return ret.then((posts) => {
      expect(posts).to.be.an('object');
      expect(Object.keys(posts).length).to.equal(0);
    });
  });
});

describe('BlogiApi#updatePost', () => {
  it('updates a post and returns the updated one', () => {
    const mockResponse = makeHttpResponse(200, null);
    stubedFetch.returns(Promise.resolve(mockResponse));
    const postToModify = testPosts.slice()[0];
    postToModify.title = 'modifiedtitle';
    const ret = api.updatePost(postToModify);
    return ret.then((responsePost) => {
      expect(responsePost).to.be.an('object');
      expect(responsePost.title).to.equal('modifiedtitle');
    });
  });

  it('returns error if HTTP response status code was not 200', () => {
    const mockResponse = makeHttpResponse(201, null);
    stubedFetch.returns(Promise.resolve(mockResponse));
    const postToModify = testPosts.slice()[0];
    postToModify.title = 'modifiedtitle';
    const ret = api.updatePost(postToModify);
    return ret.catch((error) => {
      // Error message contains HTTP
      expect(error).to.contain('HTTP');
    });
  });

  it('returns error if fetch returns error', () => {
    stubedFetch.returns(Promise.reject('errormsg'));
    const postToModify = testPosts.slice()[0];
    postToModify.title = 'modifiedtitle';
    const ret = api.updatePost(postToModify);
    return ret.catch((error) => {
      expect(error).to.equal('errormsg');
    });
  });
});

describe('BlogiApi#submitPost', () => {
  it('adds a new post and returns it', () => {
    const responsePost = Object.assign({ _id: 'testid1d75mQnhL6' }, testPostNew);
    const mockResponse = makeHttpResponse(201, JSON.stringify(responsePost));
    stubedFetch.returns(Promise.resolve(mockResponse));
    const ret = api.submitPost(testPostNew);
    return ret.then((response) => {
      expect(response).to.deep.equal(responsePost);
    });
  });

  it('returns error if fetch returns error', () => {
    stubedFetch.returns(Promise.reject('errormsg'));
    const ret = api.submitPost(testPostNew);
    return ret.catch((error) => {
      expect(error).to.equal('errormsg');
    });
  });

  it('returns error if HTTP response status code was not 201', () => {
    const mockResponse = makeHttpResponse(202, null);
    stubedFetch.returns(Promise.resolve(mockResponse));
    const ret = api.submitPost(testPostNew);
    return ret.catch((error) => {
      // Error message contains HTTP
      expect(error).to.contain('HTTP');
    });
  });
});

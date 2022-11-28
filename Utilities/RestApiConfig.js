import UrlUtil from '../Utilities/ConfigApp';
export default class API {
  constructor(options) {
    this.baseUrl = UrlUtil.BASE_URL;
  }
  get(endpoint, params) {
    return this.httpRequestget('GET', this.baseUrl + endpoint);
  }
  post(endpoint, params) {
    return this.httpRequest('POST', this.baseUrl + endpoint, params);
  }
  postWithFormData(endpoint, params) {
    return this.httpRequestWithFormData('POST', this.baseUrl + endpoint, params);
  }

  httpRequest(method, url, params) {
    console.log('Post params:',params);
  
    return new Promise(async (resolve, reject) => {
      console.log(JSON.stringify(params));
      let options = {
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
          // Authorization: 'Bearer ' + token,
        },
        method: method,
        body: JSON.stringify(params),
      };
      console.log(url, options);
      fetch(url, options)
        .then(response => response.json())
        .then(responseJson => {
          resolve(responseJson);
          console.log(responseJson);
        })
        .catch(error => {
          resolve(error);
        }); //to catch the errors if any
    });
  }
  httpRequestWithFormData(method, url, params) {
  
    return new Promise(async (resolve, reject) => {

      var formData = new FormData();

      for (var k in params) 
      {
        formData.append(k, params[k]);
      }

      let options = {
        headers: {
          Accept: '*/*',
          'Content-Type': 'multipart/form-data',
        },
        method: method,
        body: formData,
      };
      console.log(url, options);
      fetch(url, options)
        .then(response => response.json())
        .then(responseJson => {
          resolve(responseJson);
          console.log(responseJson);
        })
        .catch(error => {
          resolve(error);
        }); 
    });
  }

  httpRequestget(method, url) {
    return new Promise(async (resolve, reject) => {
      let options = {
        method: method,
      };
      console.log(url);
      fetch(url, options)
        .then(response => response.json())
        .then(responseJson => {
          resolve(responseJson);
        })
        .catch(error => {
          resolve(error);
        }); 
    });
  }
}

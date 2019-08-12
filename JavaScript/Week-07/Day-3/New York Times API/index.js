let ul = document.querySelector('ul')
let body = document.querySelector('body')
let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = console.log;
httpRequest.open('GET', 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11&api-key=vO4k95y5Re5sKMVLoMD2jYIcppXhOIEV', true);
httpRequest.send(null);

httpRequest.onload = () => {
  let data = JSON.parse(httpRequest.responseText);
  console.log(data);
  console.log(data.response.docs[0]);
  let headline = document.createElement('li');
  headline.textContent = data.response.docs[0].headline.main
  ul.appendChild(headline);
  let snip = document.createElement('li');
  snip.textContent = data.response.docs[0].snippet;
  ul.appendChild(snip);
  let date = document.createElement('li');
  date.textContent = data.response.docs[0].pub_date;
  ul.appendChild(date);
  let url = document.createElement('a');
  url.innerText = data.response.docs[0].web_url;
  url.setAttribute('href', data.response.docs[0].web_url)
  body.appendChild(url);
}
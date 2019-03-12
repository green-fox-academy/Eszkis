// ipap API: 44642e3a43e30617c3e738c9cafdbb13
// google API: AIzaSyDw34DSEft_VRYIpGmTcxNXffudrK5tH9M

let input = document.querySelector('input');
const http = new XMLHttpRequest();
let body = document.querySelector('body');
let response

const button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('button was pushed');
  console.log(input.value);

  http.open('GET', `http://api.ipapi.com/${input.value}?access_key=44642e3a43e30617c3e738c9cafdbb13`, true);
  http.onload = () => {
    response = JSON.parse(http.responseText);
    let newFrame = document.createElement('iframe');
    newFrame.setAttribute('src', `https://www.google.com/maps/embed/v1/view?key=AIzaSyDw34DSEft_VRYIpGmTcxNXffudrK5tH9M&center=${response.latitude},${response.longitude}&zoom=15&maptype=satellite`);
    newFrame.setAttribute('frameborder', '0');
    console.log(body.childElementCount);
    
    body.childElementCount > 3 ? body.removeChild(body.childNodes[6]) : body.appendChild(newFrame);
    console.log(body.childNodes);
    
  }
  http.send();
});
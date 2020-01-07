(function(){
  const request = new XMLHttpRequest();
  request.open('GET', 'https://raw.githubusercontent.com/zedero/a11y-css/master/ayy1.css', true);
  request.onload = () => {
    const injectCssIntoElement = (element) => {
      const styleElement = document.createElement('style');
      styleElement.type = 'text/css';
      styleElement.innerHTML = request.responseText;
      element.appendChild(styleElement);
    };
    injectCssIntoElement(document.body);
    Array.from(document.getElementsByTagName('iframe')).forEach((frame) => {
      injectCssIntoElement(frame.contentDocument.body);
    });
  };
  request.send();
})();

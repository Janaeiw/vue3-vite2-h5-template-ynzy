(function(){"use strict";let t=0,e;function i(){t=t+1,postMessage(t),e=setTimeout(i,500),t>1&&clearTimeout(e)}i()})();

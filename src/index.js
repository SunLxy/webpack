import _ from 'lodash';
import './styles/index.css';
import vcodeIcon from "./assets/vcode.jpg"

function component() {
  const element = document.createElement('div');
  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // 添加 class name 名称
  element.classList.add('hello');
  // 添加图片到页面
  const img = new Image(200, 100)
  img.src = vcodeIcon
  element.appendChild(img)
  return element;
}

document.body.appendChild(component());
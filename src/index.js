import _ from 'lodash';
import './styles/index.css';
import vcodeIcon from "./assets/vcode.jpg"
import XML from "./assets/xml.xml"
import json5 from "./assets/json5.json5"

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

  // 打印 XML 内容
  const xmlContent = JSON.stringify(XML, null, 2)
  const DivXml = document.createElement("div")
  DivXml.innerHTML = ` XML内容 ${xmlContent}`
  element.appendChild(DivXml)

  // 打印 json5 内容
  const json5Content = JSON.stringify(json5, null, 2)
  const json5Xml = document.createElement("div")
  json5Xml.innerHTML = ` JSON5内容 ${json5Content}`
  element.appendChild(json5Xml)

  return element;
}

document.body.appendChild(component());
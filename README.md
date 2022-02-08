# zhong-ui 组件库

### 快速开始
> 1.安装组件库
```javascript
npm i zhong-ui
```
> 2.在 main.js 中引入组件库

```javascript
// 全部引入
import 'zhong-ui/dist/css/index.css'
import MUI from "zhong-ui";
Vue.use(MUI);

// 按需引入
import 'zhong-ui/dist/css/demo.css'
import { Demo } from "zhong-ui";
Vue.use(Demo);

```
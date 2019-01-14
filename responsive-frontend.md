# Material-ui

### **React.jsを基盤にするUIとして漏れなく言及されているレスポンシブフレームワーク**  
- Google's Material Designベース  
- 情報量も多いので使いやすい
- jQueryに依存しない

## インストール
----
### material-ui
- npm 
  >npm install @material-ui/core
- yarn
  >yarn add @material-ui/core

  **＜バージョンチャック必須＞**  
  react>= 16.3.0   
  react-dom >= 16.3.0

### Roboto Font
  Material-uiの基本Fontは‘Roboto’です
  1. <link>を利用する場合（.html）
  
  ```
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />　
  ```
  1. importする場合(npm/yarnでインストールしてimport)
  - npm
    >npm i typeface-roboto  
  - yarn
    >yarn add typeface-roboto

  ```
  import 'typeface-roboto'
  ```

### Font Icons
  1. '.html'ファイルで`<link>`タグ追加  
  ```
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  ```
  2. **import** ‘@material-ui/core/Icon’ 
  ```
  import Icon from '@material-ui/core/Icon'
  ```
  **[例]**
  ```
  import React, { Component } from 'react';
  import Icon from '@material-ui/core/Icon'
  import './App.css';

  class App extends Component {
    render() {
      return (
        <div className="App">
          <Icon className="material-icons">add_circle</Icon>
          <Icon className="material-icons" color="primary">add_circle</Icon>
        </div>
      );
    }
  }
  ```
### SVG Icons
  1. インストール  
  - npm
    >npm install @material-ui/icons
  - yarn
    >yarn add @material-ui/core

  2. 必要な Icon を選んで import
  **[例]**
  ```
  import React, { Component } from 'react';
  import DeleteIcon from '@material-ui/icons/Delete'
  import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
  import './App.css';

  class App extends Component {
    render() {
      return (
        <div className="App">
          <DeleteIcon />
          <DeleteForeverIcon />
        </div>
      );
    }
  }
  ```
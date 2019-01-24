# Reactを使うために必要な基本概念

## JSX (Javascript + XML)  
 既存JavaScriptの拡張文法  
 本体JavaScriptの中でHTML使用可能
 
 (例)  
 ```
import React { Component } from 'react'
import Image from './images/image.jpg' 

 class App extends Component {
   render(){
     return(
       <div>
          <h1> Hello World ! </h1>
       </div>
     )
   }
 }

 export default App
 ```

 JSXでは変数とメソッドのバインディングができます 
 (例)
 ```
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
 
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
 
  class App extends Component {
    render(){
      return(
        <div>
          <h1> Hello , {formatName(user)} ! </h1>
        </div>
      )
    }
  }


 ```

注意事項
 - タグは必ず閉めてください
 HTMLの場合は時々タグを閉めることを忘れてもほとんど問題なく実行ができますが、JSXではエラーが発生  
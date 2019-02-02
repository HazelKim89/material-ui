# Reactを使うために必要な基本概念

## **JSX (Javascript + XML)**  
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

 ## **props & state**  

|    props    |    state    |  
|:-------------:|:-------------:|
| 不変のデータ   |   可変のデータ |  
| 親から渡される  |  コンポーネントによって保持|  
|    変更不可    |     変更可   |  
|デフォルト値の設定と検証が可能|プライベートであるべき|

## Props  
propsは　**'this.'** キーワードを通じて照会できる  
```
import React, { Component } from 'react'

class MyName extends Component {
  render() {
    return (
      <div>
        Hi ! My name is <b>{this.props.name}</b> .
      </div>
    )
  }
}

export default MyName;
```
```
import React, { Component } from 'react'
import MyName from './MyName'

class App extends Component {
  render() {
    return (
      <MyName name="React" />
    )
  }
}

export default App;
```

**defaultProps**  
親コンポーネントからpropsを忘れた時、あるいは態々空欄におく必要がある時がある  
このような場合はpropsのデフォルメを設定することが可能

```
class My Name extends Component {
  render() {
    return (
      <div>
        Hi ! My name is <b>{this.props.name}</b> .
      </div>
    )
  }
}
MyName.defaultProps = {
  name: 'defaultName'
};

```

## State  
動的なデータを利用する時は**state**を使う  

### **stateの定義**  
  
1. class fields 利用  
    ```
    class Greeting extends Component {
      state = {
        greeting: 'Hello'
      }
      render(){
        return(
          <div>
            <h1>{this.state.greeting}</h1>
          </div>   
        )
      }
    }
    ```  
2. constructor(props)利用  
    ```
    class Greeting extends Component {
      constructor(props){
        super(props)
        this.state = {
          greeting: 'Hello'
        }
      }
      render(){
        return(
          ....
        )
      }
    }
    ```
### **state内変数の変更**  
--> stateの中である変数値を変更するためには必ず **this.setState()** メソッドを使う  
  ```
  class Greeting extends Compnent{
    state = {
      clicked : false
    }
    btnClicked = () => {
      this.setState({
        clicked : true
      })
      console.log(this.state.clicked)
    }

    render(){
      return(
        <div>
          <button onClick={this.btnClicked}>Click Me</Button>
        </div>
      )
    }
  }
  ```
しかし、'setState'は深い所までは確認ができない  
例えば、  
```
state = {
    id: 0,
    info: {
      name: 'Julia',
      age: 24 
    }
  }
  ・
  ・
  ・
  changeValue = () => {
    this.setState({
      info: {
        age: 26
      }
    })
  }

  [changeValue実行後]  
  
  state = {
    id: 0,
    info: {
      age: 26
    }
  }  
```  
stateのinfo中にあった‘age’は変更されますが、ほかの変数‘name’がなくなる  
[解決方法]  
```
this.setState({
  info: {
    ...this.state.info,
    age: 26
  }
})
```  
スプレッド演算子使用すると、元々持っていた変数を失わず変更可能


<br><br><br><br>
出所  
 - https://qiita.com/kyrieleison/items/78b3295ff3f37969ab50
 - https://velopert.com/3629
import React, { Component } from 'react';

export default class Menu2 extends Component {
  state = {
    name: "芥川龍之介",
    book: "杜子春"
  };

  // 描画メソッド
  render() {
    console.log("components/Menu2.props: " + JSON.stringify(this.props));
    console.log("components/Menu2.state: " + JSON.stringify(this.state));

    return (
      <div>
        <h1><font color={this.props.color}>ここはMenu2コンポーネントですよ！</font></h1>
        著者: {this.state.name}<br/>
        作品: {this.state.book}<br/>
        カウンタ: {this.props.counter}<br/>
        <button onClick={e => this.props.ADD_MENU2(1)}>PUSH + 1</button>
        <button onClick={e => this.props.ADD_MENU2TO1(1)}>PUSH + 1 -> Menu1</button>
      </div>
    );
  }
}
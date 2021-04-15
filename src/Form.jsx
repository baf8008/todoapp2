import { useState } from "react";

const Form = ({ addTodo }) => {
  const [text, setText] = useState("");

  // formが送信された時に実行させる関数
  const handleSubmit = (e) => {
    e.preventDefault();
    // 空文字を送信させない方法(if文使用:addTodoの前に記載):alertあり
    if (text.trim() === "") return alert("文字を入力してください！");
    addTodo(text);

    // 送信後、タスクの中身が空に処理
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="タスクを入力"
      />
      <button>送信</button>
    </form>
  );
};

export default Form;

// 空文字を送信させない方法:alertなし
// {/* <button disabled={text.trim() === ''} >送信</button> */}
// disabledは、disabledの以下（{text.trim() === ''}）の条件では、値を送信したくないフォーム要素に対して無効を示す属性

//preventDefault()の使用
// 現在のURLに対してフォームの送信が行われると、結果的にページがリロードされてしまいます。 そのため、event.preventDefault()を呼び出し、デフォルトの動作をキャンセルしていました。 event.preventDefault()をコメントアウトすると、ページがリロードされてしまうことが確認できます。

// onSubmitの使用(formタグに追加するもの)
//送信ボタンが押された時に起動するイベント

//onChangeの使用（<input>、<select>、及び<textarea>要素で対応）
//入力欄や選択肢が変更された時に発生するイベント
//イベントハンドラー
//->ユーザーの操作：ボタンを押した、キーボードのキーを押した
//->ブラウザの状態の変化：ページを読み込んだ、読込が完了した
//->その他：エラーが発生した

//placeholder:入力フォームへの入力をユーザーに促がすための補助文を表示するための属性

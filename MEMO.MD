開発手法についてのメモ

開発したい機能
atuo-loginと自動セッション延長機能

auto-loginのロードマップ

web viewでアクセスする前に、送りたいところへデータ送信を行い、そのごweb viewでアクセスを行う。という非同期処理を行えばいいのかな？
    injectedjavascriptを使って、web view画面に対してjsを効かせる事ができる。
    これを活用し、web viewで画面を表示させる前に、jsで特定のページにログイン情報を送りつけることが出来るはずだ。 injectbefoerJavascriptメソッドがこれは使える。

1. パスワードとログインIDの保存
2. injectedJavaScriptBeforeContentLoaded　により、webview読み込み前にjavascriptを走らせる
2.5 https://wsdmoodle.waseda.jp/auth/saml2/login.php?wants=https%3A%2F%2Fwsdmoodle.waseda.jp%2F&idp=fcc52c5d2e034b1803ea1932ae2678b0&passive=off に対してどういうデータを渡せばログイン出来るのか調査する
    auto login tsによって上記ページに情報だけ送り、そのセッションデータをweb viewに渡すとかならありえるけど、ちょっとやり方わからん。
    vendor を一度コメントアウトした。
3. ログインしようとしたときに送られるデータの取得と、そのデータに対するパスワードとログインIDの取得

or 
2. web view画面のdom取得
3. dom操作によりauto-fill


自動セッション延長機能
1. そもそもセッションぎれとは？
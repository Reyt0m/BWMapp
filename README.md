このブランチでは開発のために、
expo cli のインストールと、node.js lts のインストールが必須です。

開発手順
`npm install `
`npm start`
で expo を起動して自分のスマホでテストしてください。

基本は、web view で moodle を開いてそれを使いつつ BWM の本体を適応させる方向で行う。

`expo install react-native-webview`
によって web view を導入

package.json を書き換えているので、普通に戻す場合は修正が必要
現状は main : main.js にし、
main.js 内部は./src/app にしている。
修正するときは main を書き換えることでエントリーポイントを変えられる
`"main": "node_modules/expo/AppEntry.js"`

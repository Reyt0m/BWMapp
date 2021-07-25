package com.example.webview

import android.os.Bundle
import android.view.KeyEvent
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val myWebView: WebView = findViewById(R.id.webview)
        myWebView.settings.javaScriptEnabled = true // javascript の表示
        myWebView.loadUrl("https://wsdmoodle.waseda.jp/my/")
        myWebView.webViewClient = WebViewClient()



    }

    //アプリ内でブラウザオープン　特定ドメイン以外はブラウザ起動という機能を一時カット
    // text https://developer.android.com/guide/webapps/webview#HandlingNavigation
    private class MyWebViewClient : WebViewClient() {
        override fun shouldOverrideUrlLoading(view: WebView?, url: String?): Boolean {
//            if (Uri.parse(url).host == "www.example.com") {
                // This is my web site, so do not override; let my WebView load the page
                return false
            }
            // Otherwise, the link is not for a page on my site, so launch another Activity that handles URLs
//            Intent(Intent.ACTION_VIEW, Uri.parse(url)).apply {
//                startActivity(this)
//            }
//            return true
//        }
    }

    //戻るボタン
    override fun onKeyDown(keyCode: Int, event: KeyEvent?): Boolean {
        // Check if the key event was the Back button and if there's history
        val myWebView: WebView = findViewById(R.id.webview)
        if (keyCode == KeyEvent.KEYCODE_BACK && myWebView.canGoBack()) {
            myWebView.goBack()
            return true
        }
        // If it wasn't the Back key or there's no web page history, bubble up to the default
        // system behavior (probably exit the activity)
        return super.onKeyDown(keyCode, event)
    }
}

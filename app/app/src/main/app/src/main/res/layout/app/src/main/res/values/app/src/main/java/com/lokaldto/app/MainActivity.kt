package com.lokaldto.app

import android.app.Activity
import android.os.Bundle
import android.graphics.Color
import android.view.Gravity
import android.widget.TextView

class MainActivity : Activity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val text = TextView(this)
        text.text = "LoKalDiTo TEST 3"
        text.textSize = 28f
        text.setTextColor(Color.WHITE)
        text.setBackgroundColor(Color.rgb(8, 107, 22))
        text.gravity = Gravity.CENTER

        setContentView(text)
    }
}

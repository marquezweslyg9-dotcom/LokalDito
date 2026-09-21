package com.lokaldto.app

import android.app.Activity
import android.os.Bundle
import android.graphics.Color
import android.view.Gravity
import android.widget.TextView

class MainActivity : Activity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val screen = TextView(this)

        screen.text = "LoKalDiTo is working!"
        screen.textSize = 28f
        screen.setTextColor(Color.WHITE)
        screen.setBackgroundColor(Color.rgb(8, 107, 22))
        screen.gravity = Gravity.CENTER

        setContentView(screen)
    }
}

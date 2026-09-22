package com.lokaldto.app;

import android.app.Activity;
import android.os.Bundle;
import android.graphics.Color;
import android.view.Gravity;
import android.widget.TextView;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        TextView text = new TextView(this);

        text.setText("LoKalDiTo TEST 4");
        text.setTextSize(28);
        text.setTextColor(Color.WHITE);
        text.setBackgroundColor(Color.rgb(8, 107, 22));
        text.setGravity(Gravity.CENTER);

        setContentView(text);
    }
}

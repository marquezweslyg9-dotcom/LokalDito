plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.lokaldto.app"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.lokaldto.app"
        minSdk = 23
        targetSdk = 35
        versionCode = 3
        versionName = "1.2-test"
    }
}

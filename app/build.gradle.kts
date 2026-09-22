plugins {
    id("com.android.application") version "8.7.3" apply false
}

android {
    namespace = "com.lokaldto.app"
    compileSdk = 35

    defaultConfig {
        applicationId = "com.lokaldto.app"
        minSdk = 23
        targetSdk = 35
        versionCode = 5
        versionName = "1.4"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
    }
}

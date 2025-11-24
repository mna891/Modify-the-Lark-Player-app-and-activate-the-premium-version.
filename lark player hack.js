Java.perform(function () {
    const MMKV = Java.use("com.tencent.mmkv.MMKV");


    MMKV.getBoolean.overload("java.lang.String", "boolean").implementation = function (key, defaultValue) {
        if (key === "KEY_HAS_IN_APP_PURCHASED") {
            console.log("[+] Intercepted Premium Key => Returning TRUE");
            return true;
        }

        return this.getBoolean(key, defaultValue);
    };
});

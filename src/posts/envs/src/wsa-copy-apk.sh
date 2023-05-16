packages=$(adb shell pm list packages | cut -d ":" -f 2 | sed 's/ //g' | grep -v "android" | grep -v "windows" | grep -v "google")

for package in $packages; do
    echo "[INFO] Backup" $package "now ..."
    apk_path=$(adb shell pm path $package | grep "/base.apk" | cut -d ":" -f 2 | sed 's/ //g')
    if [ ! -z "$apk_path" ]; then
        echo "[INFO] Saving" $apk_path "->" $package.apk
        adb pull $apk_path $package.apk
    else
        echo "[WARN] Not normal package" $package
    fi
done

function dump(arr, level) {
    var dumped_text = "";
    level || (level = 0);
    var level_padding = "";
    for (var j = 0; level + 1 > j; j++) level_padding += "    ";
    if ("object" == typeof arr) for (var item in arr) {
        var value = arr[item];
        if ("object" == typeof value) {
            dumped_text += level_padding + "'" + item + "' ...\n";
            dumped_text += dump(value, level + 1);
        } else dumped_text += level_padding + "'" + item + "' => \"" + value + '"\n';
    } else dumped_text = "===>" + arr + "<===(" + typeof arr + ")";
    return dumped_text;
}
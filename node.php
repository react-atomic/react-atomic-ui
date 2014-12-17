<?php
include('/home/sys/web/lib/cache_header_helper.php');
$cacheHeader = new CacheHeaderHelper();
$cacheHeader->publicCache(0);
$run = shell_exec("/home/sys/bin/node server.js");
echo $run;

<?php
// bootstrap.php
define('APP_DIR', '');
define('PHPANGULAR_DEBUG', true);
define('URL_STORAGE', 'web/upload/');
define('URL_ABSOLUTE', 'https://localhost/moresalle/webng2/');
define('VERSION', '0000002');
session_start();
require_once "vendor/autoload.php";
require_once "PHPAngularConfig.php";
// mysql config
define('DOCTRINE_HOST', 'localhost');
define('DOCTRINE_USER', 'root');
define('DOCTRINE_PASSWORD', '');
define('DOCTRINE_DB', 'moresalle');
define('PHPANGULAR_BUNDLE', '\\LIM\\MoreSalle');
define('resetWebDir', false);

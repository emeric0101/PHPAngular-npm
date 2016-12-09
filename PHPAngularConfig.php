<?php
namespace Emeric0101\PHPAngular;
final class Config {
    const PHPANGULAR_BUNDLE = '\\LIM\\MoreSalle';
    const APP_TITLE = 'MoreSalle - Réservation';
    /**
    *   All file to load in the index.php
    */
    static $jsModule = [

    ];
    /**
    *   All css files to load in the index.php
    */
    static $cssModule = [
    ];
    /**
    *   All meta tags files to load in the index.php
    */
    static $metaTags = [
        'viewport' => 'width=device-width, initial-scale=1'
    ];
    static $ResolveTargetEntities = [
        'Emeric0101\PHPAngular\Entity\IUser' => 'LIM\MoreSalle\Entity\User',
        'Emeric0101\PHPAngular\Entity\IGroupe' => 'LIM\MoreSalle\Entity\Groupe'
    ];
    static $cache = 'FILE';
    // flag => rights
    static $rights = [
        'MODERATOR' => [
            'user-edit-all',
            'position-edit-all',
            ['USER']
        ],
        'USER' => ['user-edit-itself']
    ];
    static $scssPath = [
        'web/node_modules/normalize-scss/sass',
        'web/node_modules/foundation-sites/scss'
    ];
    static $phpSassCompiler = false;
    static $phpPackJs = false;
    static $angular = 2;

}

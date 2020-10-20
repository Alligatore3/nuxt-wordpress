# Nuxt ❤️ Wordpress

## Some requirements before enjoy 🎉

- Wordpress must be installed in an **external environment**.
- You must install a [_custom-theme_ in wordpress](https://www.youtube.com/watch?v=-h7gOJbIpmo). This theme must have a `functions.php` (of course) with these required functions:
```php
<?php
/**
 * @description Menus are currently not available in the WP Rest.
 * So what you need to do is register your own custom endpoint and then
 * just call that route from your application that needs it.
 * EDIT: since the base API REST doesn't provide menu voice SLUG
 * we have to add it.

 * @see https://wordpress.stackexchange.com/a/306294
 * @see https://wordpress.stackexchange.com/a/274513
*/
function get_menu() {
    $menu_items = wp_get_nav_menu_items('main-menu');
    foreach($menu_items as $menu_item) {
        // ALTERNATIVE: $slug = get_post_field( 'post_name', $menu_item->object_id );
        $slug = basename( get_permalink($menu_item->object_id) );
        $menu_item->slug = $slug;
    }

    return $menu_items;
}

/**
 * @description
 * We have used ‘wp/v2’ which is a default WP REST API v2 route base.
*/
add_action( 'rest_api_init', function () {
  register_rest_route(
    'wp/v2',
    '/menu',
    array(
      'methods' => 'GET',
      'callback' => 'get_menu',
    )
  );
});

/**
 * @description Themes have to declare their support for post thumbnails before the interface for assigning
 * these images will appear on the Edit Post and Edit Page screens
 * @see https://codex.wordpress.org/Post_Thumbnails#Enabling_Support_for_Post_Thumbnails
 */
add_theme_support( 'post-thumbnails' );

/**
 * @description Enable CORS on JSON API Wordpress.
 * @see https://stackoverflow.com/a/29201101
 */
function add_cors_http_header(){
  header("Access-Control-Allow-Origin: *");
}
add_action('init','add_cors_http_header');
```
- Once you have the URL you have to compose it inside `/wordpress.config.js`. This is **crucial**.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

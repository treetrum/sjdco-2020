<?php 

function add_post_types() {

	// Custom post type for Projects
	$singular = "Project";
	$plural = "Projects";
	$args = array(
		'labels' => array(
			"name" => __( "$plural" ),
			"singular_name" => __( "$singular" ),
			"add_new" => __( "Add New" ),
			"add_new_item" => __( "Add New $singular" ),
			"edit" => __( "Edit" ),
			"edit_item" => __( "Edit $singular" ),
			"new_item" => __( "New $singular" ),
			"view" => __( "View $singular" ),
			"view_item" => __( "View $singular" ),
			"search_items" => __( "Search $plural" ),
			"not_found" => __( "No $plural found." ),
			"not_found_in_trash" => __( "No $plural found in Trash." )
		),
		'public' => true,
		'menu_icon' => 'dashicons-admin-page',
		'supports' => array( 'title', 'editor', 'thumbnail' ),
		'has_archive' => 'projects',
		'hierarchical' => false,
		"show_in_rest" => true,
		"show_in_graphql" => true,
		"graphql_single_name" => strtolower($singular),
		"graphql_plural_name" => strtolower($plural),
		"rest_base" => "projects"
	);
	register_post_type( 'project', $args );

}
add_action( 'init', 'add_post_types' );

if( function_exists('acf_add_options_page') ) {
	acf_add_options_page([
		'page_title' => 'SJDco Options',
		'post_id' => 'sjdco-options',
		"show_in_graphql" => true
	]);
}

add_action('rest_api_init', function () {
	$namespace = 'sjdco/v1';
	register_rest_route( $namespace, '/post-by-path/(?P<url>.*?)', array(
		'methods'  => 'GET',
		'callback' => 'get_post_for_path',
	));
});
/**
* This fixes the wordpress rest-api so we can just lookup pages by their full
* path (not just their name). This allows us to use React Router.
*
* @return WP_Error|WP_REST_Response
*/
function get_post_for_path($data)
{
    $postId    = url_to_postid($data['url']);
	$postType  = get_post_type($postId);
	$request = new WP_REST_Request('GET', "/wp/v2/{$postType}s/{$postId}");
	$response = rest_do_request( $request );
	$server = rest_get_server();
	$data = $server->response_to_data( $response, true );
	return $data;
}

/**
 * The filter is named rest_{post_type}_collection_params. So you need to hook a new filter for each 
 * of the custom post types you need to sort.
 * @link https://www.timrosswebdevelopment.com/wordpress-rest-api-post-order/
 */
// This enables the orderby=menu_order for Posts
add_filter( 'rest_post_collection_params', 'filter_add_rest_orderby_params', 10, 1 );
// And this for a custom post type called 'project'
add_filter( 'rest_project_collection_params', 'filter_add_rest_orderby_params', 10, 1 );
/**
 * Add menu_order to the list of permitted orderby values
 */
function filter_add_rest_orderby_params( $params ) {
	$params['orderby']['enum'][] = 'menu_order';
	return $params;
}

add_theme_support( 'title-tag' );
add_theme_support( 'post-thumbnails' );

// Callback function to insert 'styleselect' into the $buttons array
function my_mce_buttons_2( $buttons ) {
	array_unshift( $buttons, 'styleselect' );
	return $buttons;
}
// Register our callback to the appropriate filter
add_filter( 'mce_buttons_2', 'my_mce_buttons_2' );

add_filter( 'tiny_mce_before_init', function($init_array) {

    // Define the style_formats array
	$style_formats = array(
		// Each array child is a format with it's own settings
		array(
			'title' => 'Lead Paragraph',
			'selector' => 'p',
			'classes' => 'lead'
        ),
        array(
			'title' => 'Button (Blue)',
			'selector' => 'a',
			'classes' => 'button-blue'
        ),
        array(
			'title' => 'Button (Green)',
			'selector' => 'a',
			'classes' => 'button-green'
		),
		array(
			'title' => 'Button (Purple)',
			'selector' => 'a',
			'classes' => 'button-purple'
        )
    );

	// Insert the array, JSON ENCODED, into 'style_formats'
	$init_array['style_formats'] = json_encode( $style_formats );

	return $init_array;

});

/**
* Registers an editor stylesheet for the theme.
*/
function wpdocs_theme_add_editor_styles() {
    add_editor_style(get_template_directory_uri() . '/build/css/editor.css?v=' . md5_file(get_template_directory() . '/build/css/editor.css'));
}
add_action( 'admin_init', 'wpdocs_theme_add_editor_styles' );
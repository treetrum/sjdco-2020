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
		"rest_base" => "projects"
	);
	register_post_type( 'project', $args );

}
add_action( 'init', 'add_post_types' );

if( function_exists('acf_add_options_page') ) {
	acf_add_options_page([
		'page_title' => 'SJDco Options',
		'post_id' => 'sjdco-options'
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
	error_log("$postId $postType");
    $controller = new WP_REST_Posts_Controller($postType);
    $request    = new WP_REST_Request('GET', "/wp/v2/{$postType}s/{$postId}");
    $request->set_url_params(array('id' => $postId));
    return $controller->get_item($request);
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
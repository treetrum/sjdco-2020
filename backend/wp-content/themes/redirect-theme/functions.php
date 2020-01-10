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
		'has_archive' => false,
		'hierarchical' => false
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
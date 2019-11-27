<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/', function () {
    return [
        'name' => 'intranet',
        'version' => '0.0.0',
        'desc' => '...',
    ];
});

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
});


Route::group(['middleware' => ['api', 'auth:api']], function ($router) {
    
    Route::group(['prefix' => 'auth'], function () {
        Route::post('logout', 'AuthController@logout');
    });

    Route::group(['prefix' => 'auth'], function () {
        Route::post('logout', 'AuthController@logout');
        Route::post('refresh', 'AuthController@refresh');
        Route::post('user', 'AuthController@user');
    });

    Route::apiResource('roles', 'RoleController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'RoleController@');
    });

    Route::apiResource('users', 'UserController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'UserController@');
    });

    Route::apiResource('branches', 'BranchController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'BranchController@');
    });

    Route::apiResource('departments', 'DepartmentController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'DepartmentController@');
    });

    Route::apiResource('teams', 'TeamController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'TeamController@');
    });

    Route::apiResource('files', 'FileController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'FileController@');
    });

    Route::apiResource('events', 'EventController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'EventController@');
    });

    Route::apiResource('articles', 'ArticleController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'ArticleController@');
    });

    Route::apiResource('ideas', 'IdeaController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', '@');
    });

    Route::apiResource('ideables', 'IdeableController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'IdeaController@');
    });

    Route::apiResource('articleables', 'ArticleableController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'ArticleableController@');
    });

    Route::apiResource('eventables', 'EventableController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'EventableController@');
    });

    Route::apiResource('fileables', 'FileableController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'FileableController@');
    });

    Route::apiResource('states', 'StateController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'StateController@');
    });

    Route::apiResource('countries', 'CountryController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'CountryController@');
    });

    Route::apiResource('tagables', 'TagableController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'TagableController@');
    });

    Route::apiResource('tags', 'TagController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'TagController@');
    });

    Route::apiResource('feedback', 'FeedbackController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'FeedbackController@');
    });

    Route::apiResource('settings', 'SettingController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'SettingController@');
    });

    Route::apiResource('photos', 'PhotoController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'PhotoController@');
    });

    Route::apiResource('forums', 'ForumController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'ForumController@');
    });

    Route::apiResource('topics', 'TopicController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'TopicController@');
    });

    Route::apiResource('comments', 'CommentController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'CommentController@');
    });
    
    Route::apiResource('commentables', 'CommentableController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'CommentableController@');
    });

    Route::apiResource('photoables', 'PhotoableController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'PhotoableController@');
    });

    Route::apiResource('areas', 'AreaController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('', 'AreaController@');
    });

});

Route::get('routes', function () {
    \Artisan::call('route:list');
    return '<pre>' . \Artisan::output() . '</pre>';
});
Route::apiResource('forumables', 'ForumableController'); 

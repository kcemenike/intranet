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
        Route::get('user', 'AuthController@user');
    });

    Route::apiResource('roles', 'RoleController');
    Route::group(['prefix' => 'roles/{id}'], function () {
        Route::get('users', 'RoleController@users');
    });

    Route::apiResource('users', 'UserController');
    Route::group(['prefix' => 'users/{id}'], function () {
        Route::get('role', 'UserController@role');
        Route::get('branch', 'UserController@branch');
        Route::get('department', 'UserController@department');
        Route::get('team', 'UserController@team');
        Route::get('files', 'UserController@files');
        Route::get('articles', 'UserController@articles');
        Route::get('ideas', 'UserController@ideas');
        Route::get('feedbacks', 'UserController@feedbacks');
        Route::get('photos', 'UserController@photos');
        Route::get('forums', 'UserController@forums');
        Route::get('topics', 'UserController@topics');
        Route::get('comments', 'UserController@comments');
        Route::get('getIdeas', 'UserController@getIdeas');
        Route::get('getArticles', 'UserController@getArticles');
        Route::get('getEvents', 'UserController@getEvents');
        Route::get('getFiles', 'UserController@getFiles');
        Route::get('getPhotos', 'UserController@getPhotos');
    });

    Route::apiResource('branches', 'BranchController');
    Route::group(['prefix' => 'branches/{id}'], function () {
        Route::get('country', 'BranchController@country');
        Route::get('state', 'BranchController@state');
        Route::get('area', 'BranchController@area');
        Route::get('departments', 'BranchController@departments');
        Route::get('users', 'BranchController@users');
    });

    Route::apiResource('departments', 'DepartmentController');
    Route::group(['prefix' => 'departments/{id}'], function () {
        Route::get('branch', 'DepartmentController@branch');
        Route::get('teams', 'DepartmentController@teams');
        Route::get('users', 'DepartmentController@users');
        Route::get('getIdeas', 'DepartmentController@getIdeas');
        Route::get('getArticles', 'DepartmentController@getArticles');
        Route::get('getEvents', 'DepartmentController@getEvents');
        Route::get('getFiles', 'DepartmentController@getFiles');
        Route::get('getPhotos', 'DepartmentController@getPhotos');
    });

    Route::apiResource('teams', 'TeamController');
    Route::group(['prefix' => 'teams/{id}'], function () {
        Route::get('department', 'TeamController@department');
        Route::get('users', 'TeamController@users');
        Route::get('getIdeas', 'TeamController@getIdeas');
        Route::get('getArticles', 'TeamController@getArticles');
        Route::get('getEvents', 'TeamController@getEvents');
        Route::get('getFiles', 'TeamController@getFiles');
        Route::get('getPhotos', 'TeamController@getPhotos');
    });

    Route::apiResource('files', 'FileController');
    Route::group(['prefix' => 'files/{id}'], function () {
        Route::get('user', 'FileController@user');
        Route::get('getTags', 'FileController@getTags');
        Route::get('getUsers', 'FileController@getUsers');
        Route::get('getBranches', 'FileController@getBranches');
        Route::get('getDepartments', 'FileController@getDepartments');
        Route::get('getTeams', 'FileController@getTeams');
    });

    Route::apiResource('events', 'EventController');
    Route::group(['prefix' => 'events/{id}'], function () {
        Route::get('user', 'EventController@user');
        Route::get('getTags', 'EventController@getTags');
        Route::get('getUsers', 'EventController@getUsers');
        Route::get('getBranches', 'EventController@getBranches');
        Route::get('getDepartments', 'EventController@getDepartments');
        Route::get('getTeams', 'EventController@getTeams');
    });

    Route::apiResource('articles', 'ArticleController');
    Route::group(['prefix' => 'articles/{id}'], function () {
        Route::get('user', 'ArticleController@user');
        Route::get('getTags', 'ArticleController@getTags');
        Route::get('getComments', 'ArticleController@getComments');
        Route::get('getUsers', 'ArticleController@getUsers');
        Route::get('getBranches', 'ArticleController@getBranches');
        Route::get('getDepartments', 'ArticleController@getDepartments');
        Route::get('getTeams', 'ArticleController@getTeams');
    });

    Route::apiResource('ideas', 'IdeaController');
    Route::group(['prefix' => 'ideas/{id}'], function () {
        Route::get('user', 'IdeaController@user');
        Route::get('getUsers', 'IdeaController@getUsers');
        Route::get('getBranches', 'IdeaController@getBranches');
        Route::get('getDepartments', 'IdeaController@getDepartments');
        Route::get('getTeams', 'IdeaController@getTeams');
    });

    Route::apiResource('ideables', 'IdeableController');

    Route::apiResource('articleables', 'ArticleableController');

    Route::apiResource('eventables', 'EventableController');

    Route::apiResource('fileables', 'FileableController');

    Route::apiResource('states', 'StateController');
    Route::group(['prefix' => 'states/{id}'], function () {
        Route::get('country', 'StateController@country');
        Route::get('branches', 'StateController@branches');
    });

    Route::apiResource('countries', 'CountryController');
    Route::group(['prefix' => 'countries/{id}'], function () {
        Route::get('states', 'CountryController@states');
        Route::get('branches', 'CountryController@branches');
        Route::get('teams', 'CountryController@teams');
    });

    Route::apiResource('tags', 'TagController');
    Route::group(['prefix' => 'tags/{id}'], function () {
        Route::get('tagable', 'TagController@tagable');
    });

    Route::apiResource('feedback', 'FeedbackController');
    Route::group(['prefix' => 'feedback/{id}'], function () {
        Route::get('user', 'FeedbackController@user');
    });

    Route::apiResource('photos', 'PhotoController');
    Route::group(['prefix' => 'photos/{id}'], function () {
        Route::get('user', 'PhotoController@user');
        Route::get('getTags', 'PhotoController@getTags');
        Route::get('getUsers', 'PhotoController@getUsers');
        Route::get('getBranches', 'PhotoController@getBranches');
        Route::get('getDepartments', 'PhotoController@getDepartments');
        Route::get('getTeams', 'PhotoController@getTeams');
    });

    Route::apiResource('forums', 'ForumController');
    Route::group(['prefix' => 'forums/{id}'], function () {
        Route::get('topics', 'ForumController@topics');
        Route::get('user', 'ForumController@user');
        Route::get('getUsers', 'ForumController@getUsers');
        Route::get('getBranches', 'ForumController@getBranches');
        Route::get('getDepartments', 'ForumController@getDepartments');
        Route::get('getTeams', 'ForumController@getTeams');
    });

    Route::apiResource('topics', 'TopicController');
    Route::group(['prefix' => 'topics/{id}'], function () {
        Route::get('user', 'TopicController@user');
        Route::get('forum', 'TopicController@forum');
        Route::get('getComments', 'TopicController@getComments');
    });

    Route::apiResource('comments', 'CommentController');
    Route::group(['prefix' => 'comments/{id}'], function () {
        Route::get('user', 'CommentController@user');
        Route::get('commentable', 'CommentController@commentable');
    });

    Route::apiResource('photoables', 'PhotoableController');

    Route::apiResource('areas', 'AreaController');
    Route::group(['prefix' => 'areas/{id}'], function () {
        Route::get('state', 'AreaController@state');
        Route::get('branches', 'AreaController@branches');
    });

});

Route::apiResource('settings', 'SettingController');
Route::group(['prefix' => 'settings/{key}'], function () {
    Route::get('value', 'SettingController@value');
});

Route::get('routes', function () {
    \Artisan::call('route:list');
    return '<pre>' . \Artisan::output() . '</pre>';
});
Route::apiResource('forumables', 'ForumableController'); 

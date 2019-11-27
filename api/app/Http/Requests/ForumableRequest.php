<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ForumableRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }
    
    public function rules()
    {
        switch ($this->method()) {
            case 'GET':
                return true;
                break;
            case 'POST':
                return [
                    'forum_id' => 'required|exists:forums,id',
                    'forumable_id' => 'required',
                    'forumable_type' => 'required|in:users,branches,departments,teams',
                ];
                break;
            case 'PATCH':
            case 'PUT':
                return [
                    'forum_id' => 'required|exists:forums,id',
                    'forumable_id' => 'required',
                    'forumable_type' => 'required|in:users,branches,departments,teams',
                ];
                break;
            case 'DELETE':
                return true;
                break;
            default:
                return true;
                break;
        }

    }
}

<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class IdeableRequest extends FormRequest
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
                    'idea_id' => 'required|exists:ideas,id',
                    'ideable_id' => 'required',
                    'ideable_type' => 'required|in:users,branches,departments,teams',
                ];
                break;
            case 'PATCH':
            case 'PUT':
                return [
                    'idea_id' => 'required|exists:ideas,id',
                    'ideable_id' => 'required',
                    'ideable_type' => 'required|in:users,branches,departments,teams',
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

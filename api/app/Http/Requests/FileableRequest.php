<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FileableRequest extends FormRequest
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
                    'file_id' => 'required|exists:files,id',
                    'fileable_id' => 'required',
                    'fileable_type' => 'required|in:users,branches,departments,teams',
                ];
                break;
            case 'PATCH':
            case 'PUT':
                return [
                    'file_id' => 'required|exists:files,id',
                    'fileable_id' => 'required',
                    'fileable_type' => 'required|in:users,branches,departments,teams',
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

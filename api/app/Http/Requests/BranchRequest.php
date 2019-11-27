<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BranchRequest extends FormRequest
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
                    'country_id' => 'required|exists:countries,id',
                    'state_id' => 'required|exists:states,id',
                    'area_id' => 'required|exists:areas,id',
                    'name' => 'required|string|max:104|unique:branches,name',
                    'desc' => 'nullable|string|max:255',
                    'address' => 'required|string|max:255',
                    'status' => 'nullable|string|max:52',
                ];
                break;
            case 'PATCH':
            case 'PUT':
                return [
                    'country_id' => 'required|exists:countries,id',
                    'state_id' => 'required|exists:states,id',
                    'area_id' => 'required|exists:areas,id',
                    'name' => 'required|string|max:104',
                    'desc' => 'nullable|string|max:255',
                    'address' => 'required|string|max:255',
                    'status' => 'nullable|string|max:52',
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

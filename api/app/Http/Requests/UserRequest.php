<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
                    'role_id' => 'nullable|exists:roles,id',
                    'branch_id' => 'required|exists:branches,id',
                    'department_id' => 'required|exists:departments,id',
                    'team_id' => 'required|exists:teams,id',
                    'first_name' => 'required|string|max:104',
                    'mid_name' => 'nullable|string|max:104',
                    'last_name' => 'required|string|max:104',
                    'telephone' => 'required|string|max:26',
                    'telephone_verified_at' => 'nullable|date',
                    'email' => 'required|unique:users,email',
                    'email_verified_at' => 'nullable|date',
                    'password' => 'required|string|min:7|max:255',
                    'dob' => 'required|date',
                    'status' => 'nullable|string|max:52',
                ];
                break;
            case 'PATCH':
            case 'PUT':
                return [
                    'role_id' => 'nullable|exists:roles,id',
                    'branch_id' => 'required|exists:branches,id',
                    'department_id' => 'required|exists:departments,id',
                    'team_id' => 'required|exists:teams,id',
                    'first_name' => 'required|string|max:104',
                    'mid_name' => 'nullable|string|max:104',
                    'last_name' => 'required|string|max:104',
                    'telephone' => 'required|string|max:26',
                    'telephone_verified_at' => 'nullable|date',
                    'email' => 'required|unique:users,email,'.$this->segment(3),
                    'email_verified_at' => 'nullable|date',
                    'password' => 'required|string|min:7|max:255',
                    'dob' => 'required|date',
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

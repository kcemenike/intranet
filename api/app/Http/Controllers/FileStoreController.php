<?php

namespace App\Http\Controllers;

use App\Http\Requests\FileStoreRequest;
use App\FileStore;

class FileStoreController extends Controller
{
    public function postUpload(Request $request)
    {
        //set path and check for writeability
        if (!is_writable($path = storage_path('assets\\'))) {
            return $this->jsonify([
                'status' => false,
                'msg' => 'Destination directory ('.$path.') not writable.'
            ]);
        }
        
        if (isset($_FILES['files'])) {
            //rearrage receiveds files
            $files = [];
            foreach ($_FILES['files'] as $key => $all) {
                foreach ($all as $i => $val) {
                    $files[$i][$key] = $val;
                }
            }

            $uploaded = [];
            foreach ($files as $key => $file) {
                $originalName = $file['name'];
                $filePath = $path.$file['size'].'_'.str_replace(' ', '_', $originalName);
            
                if (move_uploaded_file($file['tmp_name'], $filePath)) {
                    $uploaded[] = $filePath;
                }
            }

            return $this->jsonify([
                'status'        => true,
                'files'  => $uploaded
            ]);
        } else {
            return $this->jsonify([
                'status' => false,
                'msg' => 'No file uploaded.'
            ]);
        }
    }
    
    
    public function getDownload($fileName)
    {
        return response()->download(storage_path('assets').'/'.$fileName);
    }
    
}

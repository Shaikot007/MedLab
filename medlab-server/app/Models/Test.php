<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    use HasFactory;

    private static $test;
    private static $image;
    private static $imageName;
    private static $directory;
    private static $extension;
    private static $imageUrl;

    public static function getImageUrl($request)
    {
        self::$image = $request->file('image');
        if(self::$image)
        {
            self::$extension = self::$image->getClientOriginalExtension();
            self::$imageName = time().'.'.self::$extension;
            self::$directory = 'images/test-images/';
            self::$image->move(self::$directory, self::$imageName);
            return self::$directory.self::$imageName;
        }
        else {
            return '';
        }
    }

    public static function newTest($request)
    {
        self::$test = new Test();
        self::$test->laboratory_id       = $request->laboratory_id;
        self::$test->unit_id             = $request->unit_id;
        self::$test->name                = $request->name;
        self::$test->code                = $request->code;
        self::$test->regular_price       = $request->regular_price;
        self::$test->selling_price       = $request->selling_price;
        self::$test->short_description   = $request->short_description;
        self::$test->long_description    = $request->long_description;
        self::$test->image               = self::getImageUrl($request);
        self::$test->status              = $request->status;
        self::$test->save();
        return self::$test;
    }

    public static function updateTest($request, $id)
    {
        self::$test = Test::find($id);

        self::$image = $request->file('image');
        if(self::$image)
        {
            if(file_exists(self::$test->image))
            {
                unlink(self::$test->image);
            }
            self::$imageUrl = self::getImageUrl($request);
        }
        else
        {
            self::$imageUrl = self::$test->image;
        }

        self::$test->laboratory_id       = $request->laboratory_id;
        self::$test->unit_id             = $request->unit_id;
        self::$test->name                = $request->name;
        self::$test->code                = $request->code;
        self::$test->regular_price       = $request->regular_price;
        self::$test->selling_price       = $request->selling_price;
        self::$test->short_description   = $request->short_description;
        self::$test->long_description    = $request->long_description;
        self::$test->image               = self::$imageUrl;
        self::$test->status              = $request->status;
        self::$test->save();
    }

    public static function deleteTest($id)
    {
        self::$test = Test::find($id);
        if(file_exists(self::$test->image))
        {
            unlink(self::$test->image);
        }
        self::$test->delete();
    }

    public function laboratory()
    {
        return $this->belongsTo('App\Models\Laboratory');
    }

    public function unit()
    {
        return $this->belongsTo('App\Models\Unit');
    }
}

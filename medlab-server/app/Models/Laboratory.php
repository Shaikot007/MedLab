<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Laboratory extends Model
{
    use HasFactory;

    private static $laboratory;
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
            self::$directory = 'images/laboratory-images/';
            self::$image->move(self::$directory, self::$imageName);
            return self::$directory.self::$imageName;
        }
        else
        {
            return '';
        }
    }

    public static function newLaboratory($request)
    {
        self::$laboratory = new Laboratory();
        self::$laboratory->name           = $request->name;
        self::$laboratory->description    = $request->description;
        self::$laboratory->image          = self::getImageUrl($request);
        self::$laboratory->status         = $request->status;
        self::$laboratory->save();
    }

    public static function updateLaboratory($request, $id)
    {
        self::$laboratory = Laboratory::find($id);

        self::$image = $request->file('image');
        if(self::$image)
        {
            if(file_exists(self::$laboratory->image))
            {
                unlink(self::$laboratory->image);
            }
            self::$imageUrl = self::getImageUrl($request);
        }
        else
        {
            self::$imageUrl = self::$laboratory->image;
        }

        self::$laboratory->name           = $request->name;
        self::$laboratory->description    = $request->description;
        self::$laboratory->image          = self::$imageUrl;
        self::$laboratory->status         = $request->status;
        self::$laboratory->save();
    }

    public static function deleteLaboratory($id)
    {
        self::$laboratory = Laboratory::find($id);
        if(file_exists(self::$laboratory->image))
        {
            unlink(self::$laboratory->image);
        }
        self::$laboratory->delete();
    }
}

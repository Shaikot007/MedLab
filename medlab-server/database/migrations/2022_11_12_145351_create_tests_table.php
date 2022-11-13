<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tests', function (Blueprint $table) {
            $table->id();
            $table->integer('laboratory_id');
            $table->integer('unit_id');
            $table->string('name');
            $table->string('code');
            $table->float('regular_price', 10, 2);
            $table->float('selling_price', 10, 2);
            $table->text('short_description');
            $table->text('long_description');
            $table->text('image');
            $table->tinyInteger('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tests');
    }
};
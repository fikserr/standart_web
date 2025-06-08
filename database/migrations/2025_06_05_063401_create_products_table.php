<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
{
    Schema::create('products', function (Blueprint $table) {
        $table->id();
        $table->string('product_name');
        $table->string('category');
        $table->json('sizes')->nullable();
        $table->decimal('price', 10, 2);
        $table->string('photo1')->nullable();
        $table->string('photo2')->nullable();
        $table->string('photo3')->nullable();
        $table->string('colors')->nullable();
        $table->string('brend')->nullable();
        $table->timestamps();
    });
}
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};

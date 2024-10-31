<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('dishes', function (Blueprint $table) {
            $table->id();
            $table->string('type'); // 料理の種類（例：前菜、スープ、メインディッシュなど）
            $table->string('name'); // 料理名
            $table->string('restaurant'); // 店名
            $table->string('location'); // 場所
            $table->string('detail_link'); // 詳細リンク
            $table->text('comment')->nullable(); // コメント（任意）
            $table->string('image_url')->nullable(); // 画像URL（任意）

            // 外部キーとしてユーザーIDを追加
            $table->foreignId('user_id')->constrained()->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('dishes');
    }
};

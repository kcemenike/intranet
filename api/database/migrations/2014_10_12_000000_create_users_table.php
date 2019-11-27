<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('role_id')->nullable();
            $table->bigInteger('branch_id');
            $table->bigInteger('department_id');
            $table->bigInteger('team_id');
            $table->string('first_name', 104);
            $table->string('mid_name')->nullable();
            $table->string('last_name', 104);
            $table->string('telephone', 26);
            $table->timestamp('telephone_verified_at')->nullable();
            $table->string('email', 255)->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password', 255);
            $table->dateTime('dob')->nullable();
            $table->string('status', 52)->nullable();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}

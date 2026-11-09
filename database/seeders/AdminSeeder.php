<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

/** Creates the admin-portal account. Set ADMIN_EMAIL and ADMIN_PASSWORD in .env to choose its credentials. */
class AdminSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => env('ADMIN_EMAIL', 'admin@example.org')],
            ['name' => 'Administrator', 'password' => env('ADMIN_PASSWORD', 'ChangeMe-2026')],
        );
    }
}

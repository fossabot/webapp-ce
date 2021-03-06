<?php

namespace App\Http\Controllers\Api;

use App\User;
use App\Role;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;

class UsersController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $users = User::all();

        return compact('users');
    }

    public function show(User $user)
    {
        $roles = Role::all();

        return compact('user', 'roles');
    }

    public function projects(User $user)
    {
        return ProjectResource::collection($user->projects);
    }
}

<?php

namespace App\Http\Controllers\Groups\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Group;
use App\Http\Resources\ProjectResource;

class ProjectsController extends Controller
{
    public function index(Group $group)
    {
        return ProjectResource::collection($group->projects);
    }
}

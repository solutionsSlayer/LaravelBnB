<?php

namespace App\Http\Controllers\Api;
use App\Bookable;
use App\Http\Controllers\Controller;
use App\Http\Resources\BookableIndexRessource;
use App\Http\Resources\BookableShowRessource;
use Illuminate\Http\Request;

class BookableController extends Controller
{
    // GIVE US ALL THE ELEMENTS
    public function index() {
        return BookableIndexRessource::collection(Bookable::all());
    }

    // GIVE US ONE ELEMENT
    public function show($id) {
        return new BookableShowRessource(Bookable::findOrFail($id));
    }
}

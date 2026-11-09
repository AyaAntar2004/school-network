<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $fillable = ['year', 'title', 'date_text', 'place'];

    /** Columns in the shape the React pages expect (date_text is exposed as "date"). */
    public function scopeForPage(Builder $query): Builder
    {
        return $query->select(['id', 'year', 'title', 'date_text as date', 'place']);
    }
}

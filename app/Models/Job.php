<?php

namespace App\Models;

use Illuminate\Support\Arr;

class Job {


static function getAll(){
    return  [
        [
            'id' => 1,
            'title' => 'Job 1',
            'description' => 'Description 1',
            'location' => 'Location 1',
            'salary' => 100000,
            'created_at' => '2021-01-01',
            'updated_at' => '2021-01-01',
        ],
        [
            'id' => 2,
            'title' => 'Job 2',
            'description' => 'Description 2',
            'location' => 'Location 2',
            'salary' => 200000,
            'created_at' => '2021-01-01',
            'updated_at' => '2021-01-01',
        ],
        [
            'id' => 3,
            'title' => 'Job 3',
            'description' => 'Description 3',
            'location' => 'Location 3',
            'salary' => 300000,
            'created_at' => '2021-01-01',
            'updated_at' => '2021-01-01',
        ],
    ];
}

static function getJobById(int $jobId ){
 
return Arr::first(self::getAll(),fn ($job) => $job['id'] == (int) $jobId);
}

}
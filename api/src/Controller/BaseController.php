<?php

namespace App\Controller;

use App\Service\ApiService;
use App\Service\UserService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BaseController extends AbstractController{

    /**
     * @var UserService
     */
    protected $userService;

    /**
     * @var ApiService
     */
    protected $apiService;

    /**
     * BaseController constructor.
     * @param UserService $userService
     */
    public function __construct(UserService $userService, ApiService $apiService)
    {

        $this->userService = $userService;
        $this->apiService = $apiService;
    }
}
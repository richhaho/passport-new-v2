<?php

namespace App\Classes;

use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Class ApiResponse
 * @package App\Service
 */
class ApiResponse{

    /**
     * @var bool
     */
    private $valid = true;

    /**
     * @var object|null
     */
    private $data;

    /**
     * @var string
     */
    private $message = '';

    /**
     * @var string
     */
    private $code = '200';


    /**
     * ApiResponse constructor.
     * @param bool $valid
     * @param object|null $data
     * @param string $message
     * @param string $code
     */
    public function __construct(bool $valid =true, ?object $data = null, string $message = '', string $code = '200'){

        $this->valid = $valid;
        $this->data = $data;
        $this->message = $message;
        $this->code = $code;
    }

    public function respond() : JsonResponse {

        $resp = (object)[
            'valid' => $this->valid,
            'message' => $this->message,
            'data' => $this->data,
            'code' => $this->code
        ];

        return new JsonResponse($resp);
    }



}
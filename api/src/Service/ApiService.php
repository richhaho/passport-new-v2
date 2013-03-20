<?php

namespace App\Service;

use App\Classes\ApiResponse;

/**
 * Class ApiService
 * @package App\Service
 */
class ApiService
{



    /**
     * @param bool $valid
     * @param object|null $data
     * @param string $message
     * @param string $code
     * @return ApiResponse
     */
      public function response(bool $valid = true, ?object $data = null, string $message = '', string $code = '200') : ApiResponse{


          return new ApiResponse($valid,$data,$message,$code);

      }

    /**
     * @param bool $valid
     * @param object|null $data
     * @param string $message
     * @param string $code
     * @return ApiResponse
     */
    public function responder(bool $valid = true, ?object $data = null, string $message = '', string $code = '200') : ApiResponse{


    }
}
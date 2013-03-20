<?php

namespace App\Controller;

use App\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


/**
 * Class LoginController
 * @package App\Controller
 */
class LoginController extends AbstractController
{

    /**
     * @Route("/user/login", name="userLoginApiCallback")
     * @param Request $request
     * @return JsonResponse
     */
    public function doLogin(Request $request): JsonResponse
    {
        $loginResponse = (object)
        [
            'valid' => false,
            'data' => (object)[
                'user' => (object)[
                    'email' => '',
                    'displayName' => '',
                    'username' => '',
                    'fname' => '',
                    'lname' => '',
                    'csfrToken' => '',
                    'roles'=>[],
                    'permissions'=>[],
                    'organisationName'=>''
                ],
            ]
        ];
        /** @var User $user */
        if ($user = $this->getUser()) {
            $loginResponse->valid = true;
            $loginResponse->data->user->email = $user->getEmail();

            // if the user is an owner use it's display name
            // if not use it's parent display name
            //if ($user->isParent()) {
                $loginResponse->data->user->displayName = $user->getDisplayName();
            //} else {
               // $loginResponse->data->user->displayName = $user->getParentUser()->getDisplayName();
           // }
            $loginResponse->data->user->username = $user->getUsername();
            $loginResponse->data->user->fname = $user->getFname();
            $loginResponse->data->user->lname = $user->getLname();
            $loginResponse->data->user->csfrToken = $user->getCsfrToken();
            $loginResponse->data->user->roles = $user->getRoles();
            $loginResponse->data->user->permissions = $user->getPermissions();
            $loginResponse->data->user->id = $user->getId();


        }
        return $this->json($loginResponse);
    }

    /**
     * @Route("/user/logout", name="userLogout")
     */
    public function logout()
    {
    }

}
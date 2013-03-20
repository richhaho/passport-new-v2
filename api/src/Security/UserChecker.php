<?php

namespace App\Security;

use App\Entity\User;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Core\Exception\DisabledException;
use Symfony\Component\Security\Core\User\UserCheckerInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * Class UserChecker
 * @package App\Security
 */
class UserChecker implements UserCheckerInterface{

    /**
     * @param UserInterface $user
     */
    public function checkPreAuth(UserInterface $user)
    {
        if(!$user instanceof User)
            return;

    }

    /**
     * @param UserInterface $user
     */
    public function checkPostAuth(UserInterface $user)
    {
        if(!$user instanceof User)
            return;


        if(!$user->getActive()){
            throw new DisabledException();
        }

    }
}
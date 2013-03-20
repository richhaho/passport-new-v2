<?php

namespace App\Service;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;


/**
 * Class UserService
 * @package App\Service
 */
class UserService{

      /**
       * @var UserPasswordEncoderInterface
       */
      private $passwordEncoder;

    /**
     * @var EntityManagerInterface
     */
      private $em;

    /**
     * @var UserRepository
     */
      private $repo;

    /**
     * UserService constructor.
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @param EntityManagerInterface $em
     */
      public function __construct(UserPasswordEncoderInterface $passwordEncoder, EntityManagerInterface $em)
      {
            $this->passwordEncoder = $passwordEncoder;
            $this->em  = $em;
            $this->repo = $this->em->getRepository(User::class);
      }

      /**
       * @param User $user
       * @param string $password
       * @return string
       */
      public function encodePassword(User $user, string $password) : string{

            $newPassword = $this->passwordEncoder->encodePassword($user,$password);

            return $newPassword;
      }

    /**
     * @param string $token
     * @return User|null
     */
      public function getUserByToken(string $token) : ?User{

          return $this->repo->findOneBy(['csfrToken'=>$token]);

      }

    /**
     * @param Request $request
     * @return User|null
     */
      public function getUserByRequestToken(Request $request) : ?User{

          // get the user by token - at this point the token is here!
          $token = $request->headers->get('X-AUTH-TOKEN');

          return ($token ? $this->getUserByToken($token) : null);
      }
}
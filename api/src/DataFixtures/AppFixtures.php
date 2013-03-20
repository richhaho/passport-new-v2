<?php

namespace App\DataFixtures;

use App\Entity\Branch;
use App\Entity\User;
use App\Service\UserService;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Symfony\Component\DependencyInjection\ContainerInterface;

class AppFixtures extends Fixture
{

    /**
     * @var UserService
     */
    private $userService;

    /**
     * AppFixtures constructor.
     * @param ContainerInterface $container
     */
    public function __construct(ContainerInterface $container)
    {
        $this->userService = $container->get('App\Service\UserService');
    }

    /**
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager)
    {


        $user = new User();
        $user->setDisplayName('Test')
            ->setEmail('test@localhost')
            ->setUsername('test')
            ->setCsfrToken('94e9fss556c0bc8hh3e8ecfddb22c615')
            ->setRoles(['ROLE_OWNER','ROLE_ADMIN'])
            ->setFname('System')
            ->setLname('System')
            ->setPassword($this->userService->encodePassword($user,'123456'));


        $manager->persist($user);
        $manager->flush();
    }
}

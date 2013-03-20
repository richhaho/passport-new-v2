<?php

namespace App\Repository;

use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository
{

    /**
     * @var \Doctrine\ORM\EntityManager
     */
    private $em;

    /**
     * UserRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);

        $this->em = $this->getEntityManager();
    }


    /**
     * @param User $user
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function delete(User $user): void
    {

        $user->setDeleted(true)->setDeletedDateTime(new \DateTime());
        $this->em->flush();

    }

    /**
     * @param User $user
     * @return int
     */
    public function insert(User $user): int
    {
        try {
            $this->em->persist($user);
            $this->em->flush();
        } catch (\Exception $e) {
            die($e->getMessage());
        }
        return $user->getId();
    }

    /**
     * @param User $user
     * @return int
     */
    public function update(User $user): int
    {
        try {
            $this->em->flush();
        } catch (\Exception $e) {
            die();
        }
        return $user->getId();
    }

}

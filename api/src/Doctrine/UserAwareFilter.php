<?php

namespace App\Doctrine;

use App\Entity\User;
use Doctrine\ORM\Mapping\ClassMetadata;
use Doctrine\ORM\Query\Filter\SQLFilter;

/**
 * Class UserAwareFilter
 * @package App\Doctrine
 */
class UserAwareFilter extends SQLFilter{


    /**
     * @param ClassMetadata $targetEntity
     * @param string $targetTableAlias
     * @return string|void
     */
    public function addFilterConstraint(ClassMetadata $targetEntity, $targetTableAlias)
    {


        return '';


    }

}
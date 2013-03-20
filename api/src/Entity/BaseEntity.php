<?php

namespace App\Entity;

use Doctrine\Common\Collections\Criteria;
use Doctrine\ORM\Mapping as ORM;

/**
 * Class BaseEntity
 * @package App\Entity
 */
class BaseEntity{



    /**
     * @var bool
     * @ORM\Column(type="boolean", options={"default":false})
     */
    protected $deleted = false;

    /**
     * @var \DateTime
     * @ORM\Column(type="datetime", options={"default":"CURRENT_TIMESTAMP"})
     */
    protected $deletedDateTime;



    /**
     * @param bool $deleted
     * @return BaseEntity
     */
    public function setDeleted(bool $deleted = false) : self{

        $this->deleted = $deleted;

        return $this;

    }

    /**
     * @return bool
     */
    public function getDeleted() : bool {

        return $this->deleted;
    }


    /**
     * @return bool
     */
    public function isDeleted() : bool{

        return $this->getDeleted();
    }

    /**
     * @return \DateTime|null
     */
    public function getDeletedDateTime(): ?\DateTime
    {
        return $this->deletedDateTime;
    }

    /**
     * @param \DateTime|null $deletedDateTime
     * @return BaseEntity
     */
    public function setDeletedDateTime(?\DateTime $deletedDateTime): self
    {
        $this->deletedDateTime = $deletedDateTime;
        return $this;
    }



}
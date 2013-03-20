<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use FontLib\Table\Type\glyf;
use Symfony\Component\Security\Core\User\UserInterface;


/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */
class User extends BaseEntity implements UserInterface, \JsonSerializable
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, nullable=true)
     */
    private $displayName;


    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="text")
     */
    private $password;

    /**
     * @var string
     * @ORM\Column(type="string", length=16, nullable=true)
     */
    private $username;

    /**
     * @var string
     * @ORM\Column(type="string",length=100, nullable=false)
     */
    private $email;

    /**
     * @var string
     * @ORM\Column(type="string",length=100, nullable=false)
     */
    private $fname;

    /**
     * @var string
     * @ORM\Column(type="string",length=100, nullable=false)
     */
    private $lname;

    /**
     * @var string
     * @ORM\Column(type="string",length=32, nullable=false, unique=true)
     */
    private $csfrToken;


    /**
     * @var \DateTime
     * @ORM\Column(type="datetime", options={"default":"CURRENT_TIMESTAMP"})
     */
    private $createdDateTime;


    /**
     * @var bool
     * @ORM\Column(type="boolean", options={"default":true})
     */
    private $active = true;

    

    /**
     * User constructor.
     */
    public function __construct()
    {

        $this->createdDateTime = new \DateTime();

    }


    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getDisplayName(): ?string
    {
        if (!$this->displayName) {
            return $this->getFname() . ' ' . $this->getLname();
        }
        return $this->displayName;
    }

    /**
     * @param string $displayName
     * @return $this
     */
    public function setDisplayName(?string $displayName): self
    {
        $this->displayName = $displayName;
        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): ?array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';
        return array_unique($roles);
    }

    /**
     * @param array $roles
     * @return $this
     */
    public function setRoles(?array $roles): self
    {
        $this->roles = $roles;
        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): ?string
    {
        return (string)$this->password;
    }

    /**
     * @param string $password
     * @return $this
     */
    public function setPassword(?string $password): self
    {
        $this->password = $password;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getFname(): ?string
    {
        return $this->fname;
    }

    /**
     * @param string $lname
     * @return $this
     */
    public function setLname(?string $lname): self
    {
        $this->lname = $lname;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getLname(): ?string
    {
        return $this->lname;
    }

    /**
     * @param string $fname
     * @return $this
     */
    public function setFname(?string $fname): self
    {
        $this->fname = $fname;
        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * @param string $username
     * @return $this
     */
    public function setUsername(?string $username): self
    {
        $this->username = $username;
        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): ?string
    {
        return (string)$this->username;
    }

    /**
     * @return string|null
     */
    public function getCsfrToken(): ?string
    {
        return $this->csfrToken;
    }

    /**
     * @param string $csfrToken
     * @return $this
     */
    public function setCsfrToken(?string $csfrToken): self
    {
        $this->csfrToken = $csfrToken;
        return $this;
    }

    /**
     * @return string|null
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    /**
     * @param string $email
     * @return $this
     */
    public function setEmail(?string $email): self
    {
        $this->email = $email;
        return $this;
    }

    /**
     * @return array
     */
    public function jsonSerialize(): array
    {


        return [
            'id' => $this->getId(),
            'displayName' => $this->getDisplayName(),
            'username' => $this->getUsername(),
            'fname' => $this->getFname(),
            'lname' => $this->getLname(),
            'roles' => $this->getRoles(),
            'email' => $this->getEmail(),
            'csfrToken' => $this->getCsfrToken(),
            'createdDateTime' => $this->getCreatedDateTime()->format('c'),
            'active' => $this->getActive()
        ];

    }

    /**
     * @return bool
     */
    public function isAdmin() : bool {

        return $this->hasRole('ROLE_ADMIN');
    }


    /**
     * @param string $role
     * @return bool
     */
    public function hasRole(string $role): bool
    {

        return (in_array($role, $this->roles) ? true : false);
    }

    /**
     * @param \DateTime $dateTime
     * @return User
     */
    public function setCreatedDateTime(\DateTime $dateTime): self
    {

        $this->createdDateTime = $dateTime;

        return $this;
    }

    /**
     * @return \DateTime
     */
    public function getCreatedDateTime(): \DateTime
    {

        return $this->createdDateTime;
    }


    /**
     * @param bool $active
     * @return User
     */
    public function setActive(bool $active = true): self
    {

        $this->active = $active;

        return $this;
    }

    /**
     * @return bool
     */
    public function getActive(): bool
    {

        return $this->active;
    }



}

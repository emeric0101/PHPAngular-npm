<?php

namespace LIM\MoreSalle\Entity;
use Emeric0101\PHPAngular\Entity\IUser;
use Emeric0101\PHPAngular\Entity\EntityAbstract;
/**
 * User
 *
 * @Table(name="user")
 * @Entity(repositoryClass="LIM\MoreSalle\Repository\UserRepository")
 */
class User extends EntityAbstract implements IUser
{
    /**
     * @var int
     *
     * @Column(name="id", type="integer")
     * @Id
     * @GeneratedValue(strategy="AUTO")
     */
    private $id;


    /**
     * @var string
     *
     * @Column(name="firstName", type="string", length=255, nullable=true)
     */
    private $firstName;

    /**
     * @var string
     *
     * @Column(name="lastName", type="string", length=255, nullable=true)
     */
    private $lastName;

    /**
     * @var string
     *
     * @Column(name="password", type="string", length=255, nullable=true)
     */
    private $password;
    /** The method return NULL because the password should not be json encoded
    */
    public function getPassword() {
        return $this->password;
    }
    public function setHashedPassword(string $p) {
        $this->password = $p;
        return $this;
    }

    /**
     * @var string
     *
     * @Column(name="address", type="string", length=255, nullable=true)
     */
    private $address;
    /**
     * @var string
     *
     * @Column(name="cp", type="string", length=255, nullable=true)
     */
    private $cp;
    /**
     * @var string
     *
     * @Column(name="city", type="string", length=255, nullable=true)
     */
    private $city;

    /**
     * @var int
     *
     * @Column(name="sex", type="smallint")
     */
    private $sex;

    /**
     * @var string
     *
     * @Column(name="mail", type="string", length=255, unique=true)
     */
    private $mail;



    /**
     * @var int
     *
     * @Column(name="created", type="datetime", nullable=true)
     */
    private $created;

    /**
     * @var groupe
     * @ManyToOne(targetEntity="LIM\MoreSalle\Entity\Groupe")
     */
    private $groupe;

    /**
     * Bidirectional - One-To-Many (INVERSE SIDE)
     *
     * @OneToMany(targetEntity="Emeric0101\PHPAngular\Entity\Session", mappedBy="user", cascade={"persist", "remove"})
     */
    private $sessions;


      /**
       * Get id
       *
       * @return integer
       */
      public function getId()
      {
          return $this->id;
      }

      /**
       * Set firstName
       *
       * @param string $firstName
       *
       * @return User
       */
      public function setFirstName($firstName)
      {
          $this->firstName = $firstName;

          return $this;
      }

      /**
       * Get firstName
       *
       * @return string
       */
      public function getFirstName()
      {
          return $this->firstName;
      }

      /**
       * Set lastName
       *
       * @param string $lastName
       *
       * @return User
       */
      public function setLastName($lastName)
      {
          $this->lastName = $lastName;

          return $this;
      }

      /**
       * Get lastName
       *
       * @return string
       */
      public function getLastName()
      {
          return $this->lastName;
      }

      /**
       * Set password
       *
       * @param string $password
       *
       * @return User
       */
      public function setPassword($password)
      {
          $this->password = $password;

          return $this;
      }



      /**
       * Set address
       *
       * @param string $address
       *
       * @return User
       */
      public function setAddress($address)
      {
          $this->address = $address;

          return $this;
      }

      /**
       * Get address
       *
       * @return string
       */
      public function getAddress()
      {
          return $this->address;
      }

      /**
       * Set cp
       *
       * @param string $cp
       *
       * @return User
       */
      public function setCp($cp)
      {
          $this->cp = $cp;

          return $this;
      }

      /**
       * Get cp
       *
       * @return string
       */
      public function getCp()
      {
          return $this->cp;
      }

      /**
       * Set city
       *
       * @param string $city
       *
       * @return User
       */
      public function setCity($city)
      {
          $this->city = $city;

          return $this;
      }

      /**
       * Get city
       *
       * @return string
       */
      public function getCity()
      {
          return $this->city;
      }

      /**
       * Set sex
       *
       * @param integer $sex
       *
       * @return User
       */
      public function setSex($sex)
      {
          $this->sex = $sex;

          return $this;
      }

      /**
       * Get sex
       *
       * @return integer
       */
      public function getSex()
      {
          return $this->sex;
      }

      /**
       * Set mail
       *
       * @param string $mail
       *
       * @return User
       */
      public function setMail($mail)
      {
          $this->mail = $mail;

          return $this;
      }

      /**
       * Get mail
       *
       * @return string
       */
      public function getMail()
      {
          return $this->mail;
      }

      /**
       * Set created
       *
       * @param \DateTime $created
       *
       * @return User
       */
      public function setCreated($created)
      {
          $this->created = $created;

          return $this;
      }

      /**
       * Get created
       *
       * @return \DateTime
       */
      public function getCreated()
      {
          return $this->created;
      }

      /**
       * Set groupe
       *
       * @param \LIM\MoreSalle\Entity\Groupe $groupe
       *
       * @return User
       */
      public function setGroupe($groupe = null)
      {
          $this->groupe = $groupe;

          return $this;
      }

      /**
       * Get groupe
       *
       * @return \LIM\MoreSalle\Entity\Groupe
       */
      public function getGroupe()
      {
          return $this->groupe;
      }

      /**
       * Add session
       *
       * @param \Emeric0101\PHPAngular\Entity\Session $session
       *
       * @return User
       */
      public function addSession($session)
      {
          $this->sessions[] = $session;

          return $this;
      }

      /**
       * Remove session
       *
       * @param \Emeric0101\PHPAngular\Entity\Session $session
       */
      public function removeSession($session)
      {
          $this->sessions->removeElement($session);
      }

      /**
       * Get sessions
       *
       * @return \Doctrine\Common\Collections\Collection
       */
      public function getSessions()
      {
          return $this->sessions;
      }
}

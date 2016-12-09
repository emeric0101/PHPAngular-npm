<?php

namespace LIM\MoreSalle\Entity;
use Emeric0101\PHPAngular\Entity\EntityAbstract;
/**
 * User
 *
 * @Table(name="fichier")
 * @Entity(repositoryClass="LIM\MoreSalle\Repository\FichierRepository")
 */
class Fichier extends EntityAbstract
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
     * @ManyToOne(targetEntity="LIM\MoreSalle\Entity\User")
     */
    private $owner;

    /**
     * @var int
     *
     * @Column(name="created", type="datetime", nullable=true)
     */
    private $created;

    /**
     * @var int
     *
     * @Column(name="type", type="smallint")
     */
    private $type;

    public function setOwner($u) {
        $this->owner = $u;
    }
    public function getOwner() {
        return $this->owner;
    }

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
        * Set created
        *
        * @param \DateTime $created
        *
        * @return Fichier
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
        * Set type
        *
        * @param \tinyint $type
        *
        * @return Fichier
        */
       public function setType( $type)
       {
           $this->type = $type;

           return $this;
       }

       /**
        * Get type
        *
        * @return \tinyint
        */
       public function getType()
       {
           return $this->type;
       }
}

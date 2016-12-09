<?php

namespace LIM\MoreSalle\Entity;
use Emeric0101\PHPAngular\Entity\EntityAbstract;
/**
 * User
 *
 * @Table(name="notification")
 * @Entity(repositoryClass="LIM\MoreSalle\Repository\NotificationRepository")
 */
class Notification extends EntityAbstract
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
     * @Column(name="title", type="string", length=100, nullable=true)
     */
    private $title;
    /**
     * @var string
     *
     * @Column(name="msg", type="string", length=255, nullable=true)
     */


     /**
      * @ManyToOne(targetEntity="LIM\MoreSalle\Entity\User")
      */
     private $owner;
     /**
      * @ManyToOne(targetEntity="LIM\MoreSalle\Entity\Fichier")
      */
     private $file;
     /**
      * @var int
      *
      * @Column(name="created", type="datetime", nullable=true)
      */
     private $created;

     public function setOwner($u) {$this->owner = $u;}
     public function getOwner() {return $this->owner;}
     public function setFile($f) {$this->file = $f;}
     public function getFile() {return $this->file;}

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
    * Set title
    *
    * @param string $title
    *
    * @return Notification
    */
   public function setTitle($title)
   {
       $this->title = $title;

       return $this;
   }

   /**
    * Get title
    *
    * @return string
    */
   public function getTitle()
   {
       return $this->title;
   }

   /**
    * Set created
    *
    * @param \DateTime $created
    *
    * @return Notification
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

}

<?php

namespace LIM\MoreSalle\Entity;
use Emeric0101\PHPAngular\Entity\EntityAbstract;
/**
 * User
 *
 * @Table(name="ressource")
 * @Entity(repositoryClass="LIM\MoreSalle\Repository\RessourceRepository")
 */
class Ressource extends EntityAbstract
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
     * @Column(name="description", type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @var $ressourceType
     * @ManyToOne(targetEntity="LIM\MoreSalle\Entity\RessourceType")
     */
     private $ressourceType;

     /**
      * @var int
      *
      * @Column(name="delais", type="integer", nullable=true)
      */
     private $delais;

     /**
      * @OneToMany(targetEntity="LIM\MoreSalle\Entity\EntrepotRessource", mappedBy="ressource", cascade={"persist", "remove"})
      */
     private $entrepotRessources;
     public function getEntrepotRessources() {
         return $this->entrepotRessources;
     }

     /**
      * @OneToMany(targetEntity="LIM\MoreSalle\Entity\Price", mappedBy="ressource", cascade={"persist", "remove"})
      */
     private $price;
     public function getPrice() {
         return $this->price;
     }



     /**
      * @var int
      *
      * @Column(name="isLieu", type="smallint")
      */
     private $isLieu = false;
     /**
      * @var int
      *
      * @Column(name="active", type="smallint")
      */
     private $active = true;



      /**
       * @var string
       *
       * @Column(name="color", type="string", length=100, nullable=true)
       */
      private $color;

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
        * @return Ressource
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
        * Set description
        *
        * @param string $description
        *
        * @return Ressource
        */
       public function setDescription($description)
       {
           $this->description = $description;

           return $this;
       }

       /**
        * Get description
        *
        * @return string
        */
       public function getDescription()
       {
           return $this->description;
       }

       /**
        * Set delais
        *
        * @param integer $delais
        *
        * @return Ressource
        */
       public function setDelais($delais)
       {
           $this->delais = $delais;

           return $this;
       }

       /**
        * Get delais
        *
        * @return integer
        */
       public function getDelais()
       {
           return $this->delais;
       }

       /**
        * Set isLieu
        *
        *
        * @return Ressource
        */
       public function setIsLieu( $isLieu)
       {
           $this->isLieu = $isLieu;

           return $this;
       }

       /**
        * Get isLieu
        *
        * @return \tinyint
        */
       public function getIsLieu()
       {
           return $this->isLieu;
       }

       /**
        * Set active
        *
        *
        * @return Ressource
        */
       public function setActive( $active)
       {
           $this->active = $active;

           return $this;
       }

       /**
        * Get active
        *
        * @return \tinyint
        */
       public function getActive()
       {
           return $this->active;
       }

       /**
        * Set color
        *
        * @param string $color
        *
        * @return Ressource
        */
       public function setColor($color)
       {
           $this->color = $color;

           return $this;
       }

       /**
        * Get color
        *
        * @return string
        */
       public function getColor()
       {
           return $this->color;
       }

       /**
        * Set ressourceType
        *
        * @param \LIM\MoreSalle\Entity\RessourceType $ressourceType
        *
        * @return Ressource
        */
       public function setRessourceType($ressourceType = null)
       {
           $this->ressourceType = $ressourceType;

           return $this;
       }

       /**
        * Get ressourceType
        *
        * @return \LIM\MoreSalle\Entity\RessourceType
        */
       public function getRessourceType()
       {
           return $this->ressourceType;
       }
}

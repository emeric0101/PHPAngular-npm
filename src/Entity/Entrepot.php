<?php

namespace LIM\MoreSalle\Entity;
use Emeric0101\PHPAngular\Entity\EntityAbstract;
/**
 * User
 *
 * @Table(name="entrepot")
 * @Entity(repositoryClass="LIM\MoreSalle\Repository\EntrepotRepository")
 */
class Entrepot extends EntityAbstract
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
     * @Column(name="adresse", type="string", length=255, nullable=true)
     */
    private $adresse;
    /**
     * @var string
     *
     * @Column(name="cp", type="string", length=20, nullable=true)
     */
    private $cp;
    /**
     * @var string
     *
     * @Column(name="city", type="string", length=100, nullable=true)
     */
    private $city;

     /**
      * @OneToMany(targetEntity="LIM\MoreSalle\Entity\EntrepotRessource", mappedBy="entrepot", cascade={"persist", "remove"})
      */
     private $entrepotRessources;



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
          * @return Entrepot
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
          * Set adresse
          *
          * @param string $adresse
          *
          * @return Entrepot
          */
         public function setAdresse($adresse)
         {
             $this->adresse = $adresse;

             return $this;
         }

         /**
          * Get adresse
          *
          * @return string
          */
         public function getAdresse()
         {
             return $this->adresse;
         }

         /**
          * Set cp
          *
          * @param string $cp
          *
          * @return Entrepot
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
          * @return Entrepot
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
}

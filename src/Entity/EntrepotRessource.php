<?php

namespace LIM\MoreSalle\Entity;
use Emeric0101\PHPAngular\Entity\EntityAbstract;
/**
 * User
 *
 * @Table(name="EntrepotRessource")
 * @Entity(repositoryClass="LIM\MoreSalle\Repository\EntrepotRessourceRepository")
 */
class EntrepotRessource extends EntityAbstract
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
    * @ManyToOne(targetEntity="LIM\MoreSalle\Entity\Ressource", inversedBy="entrepotRessources")
    * @JoinColumn(name="ressource_id", referencedColumnName="id")
    */
    private $ressource;
    /**
    * @ManyToOne(targetEntity="LIM\MoreSalle\Entity\Entrepot", inversedBy="entrepotRessources")
    * @JoinColumn(name="entrepot_id", referencedColumnName="id")
    */
    private $entrepot;
    /**
     * @var int
     *
     * @Column(name="quantity", type="integer")
     */
    private $quantity;

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
        * Set quantity
        *
        * @param integer $quantity
        *
        * @return EntrepotRessource
        */
       public function setQuantity($quantity)
       {
           $this->quantity = $quantity;

           return $this;
       }

       /**
        * Get quantity
        *
        * @return integer
        */
       public function getQuantity()
       {
           return $this->quantity;
       }
}

<?php

namespace LIM\MoreSalle\Entity;
use Emeric0101\PHPAngular\Entity\EntityAbstract;
/**
 * User
 *
 * @Table(name="devis")
 * @Entity(repositoryClass="LIM\MoreSalle\Repository\DevisRepository")
 */
class Devis extends EntityAbstract
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
     * @var int
     *
     * @Column(name="devis", type="array")
     */
    private $devis;

    /**
     * @var int
     *
     * @Column(name="price", type="float")
     */
    private $price;

    /**
     * @ManyToOne(targetEntity="LIM\MoreSalle\Entity\User")
     */
    private $owner;
    /**
     * @OneToMany(targetEntity="LIM\MoreSalle\Entity\Reservation", mappedBy="devis", cascade={"persist", "remove"})
     */
    private $reservation;


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
         * Set devis
         *
         * @param array $devis
         *
         * @return Devis
         */
        public function setDevis($devis)
        {
            $this->devis = $devis;

            return $this;
        }

        /**
         * Get devis
         *
         * @return array
         */
        public function getDevis()
        {
            return $this->devis;
        }

        /**
         * Set price
         *
         * @param float $price
         *
         * @return Devis
         */
        public function setPrice($price)
        {
            $this->price = $price;

            return $this;
        }

        /**
         * Get price
         *
         * @return float
         */
        public function getPrice()
        {
            return $this->price;
        }
}

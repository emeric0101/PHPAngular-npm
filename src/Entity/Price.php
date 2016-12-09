<?php

namespace LIM\MoreSalle\Entity;
use Emeric0101\PHPAngular\Entity\IUser;
use Emeric0101\PHPAngular\Entity\EntityAbstract;
/**
 * User
 *
 * @Table(name="price")
 * @Entity(repositoryClass="LIM\MoreSalle\Repository\PriceRepository")
 */
class Price extends EntityAbstract
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
     * @ManyToOne(targetEntity="LIM\MoreSalle\Entity\Ressource")
     */
    private $ressource;
    public function getResssource() {return $this->ressource;}
    public function setRessource($u) {$this->ressource = $u;}

    /**
     * @var int
     *
     * @Column(name="created", type="datetime", nullable=true)
     */
    private $created;
    /**
     * @var int
     *
     * @Column(name="tva", type="float")
     */
    private $tva;
    /**
     * @var int
     *
     * @Column(name="price", type="array")
     */
    private $price;

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
         * @return Price
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
         * Set tva
         *
         * @param float $tva
         *
         * @return Price
         */
        public function setTva($tva)
        {
            $this->tva = $tva;

            return $this;
        }

        /**
         * Get tva
         *
         * @return float
         */
        public function getTva()
        {
            return $this->tva;
        }

        /**
         * Set price
         *
         * @param array $price
         *
         * @return Price
         */
        public function setPrice($price)
        {
            $this->price = $price;

            return $this;
        }

        /**
         * Get price
         *
         * @return array
         */
        public function getPrice()
        {
            return $this->price;
        }
}

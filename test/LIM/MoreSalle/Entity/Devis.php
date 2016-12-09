<?php

namespace LIM\MoreSalle\Entity;

/**
 * Devis
 */
class Devis
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var array
     */
    private $devis;

    /**
     * @var float
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


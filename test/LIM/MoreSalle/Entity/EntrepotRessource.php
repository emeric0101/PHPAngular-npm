<?php

namespace LIM\MoreSalle\Entity;

/**
 * EntrepotRessource
 */
class EntrepotRessource
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var integer
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


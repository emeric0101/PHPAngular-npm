<?php

namespace LIM\MoreSalle\Entity;

/**
 * Fichier
 */
class Fichier
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var \DateTime
     */
    private $created;

    /**
     * @var tinyint
     */
    private $type;


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
    public function setType(\tinyint $type)
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


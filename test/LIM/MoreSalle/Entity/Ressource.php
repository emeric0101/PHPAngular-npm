<?php

namespace LIM\MoreSalle\Entity;

/**
 * Ressource
 */
class Ressource
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var string
     */
    private $title;

    /**
     * @var string
     */
    private $description;

    /**
     * @var integer
     */
    private $delais;

    /**
     * @var tinyint
     */
    private $isLieu;

    /**
     * @var tinyint
     */
    private $active;

    /**
     * @var string
     */
    private $color;

    /**
     * @var \LIM\MoreSalle\Entity\RessourceType
     */
    private $ressourceType;


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
     * @param \tinyint $isLieu
     *
     * @return Ressource
     */
    public function setIsLieu(\tinyint $isLieu)
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
     * @param \tinyint $active
     *
     * @return Ressource
     */
    public function setActive(\tinyint $active)
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
    public function setRessourceType(\LIM\MoreSalle\Entity\RessourceType $ressourceType = null)
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


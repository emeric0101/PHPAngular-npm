<?php

namespace LIM\MoreSalle\Entity;

/**
 * Reservation
 */
class Reservation
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var \DateTime
     */
    private $start;

    /**
     * @var \DateTime
     */
    private $end;

    /**
     * @var string
     */
    private $title;

    /**
     * @var \DateTime
     */
    private $created;

    /**
     * @var \DateTime
     */
    private $updated;

    /**
     * @var tinyint
     */
    private $validationprovider;

    /**
     * @var tinyint
     */
    private $validationclient;

    /**
     * @var string
     */
    private $comment;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $ressource_Fichier;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $groupe_targeted;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->ressource_Fichier = new \Doctrine\Common\Collections\ArrayCollection();
        $this->groupe_targeted = new \Doctrine\Common\Collections\ArrayCollection();
    }

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
     * Set start
     *
     * @param \DateTime $start
     *
     * @return Reservation
     */
    public function setStart($start)
    {
        $this->start = $start;

        return $this;
    }

    /**
     * Get start
     *
     * @return \DateTime
     */
    public function getStart()
    {
        return $this->start;
    }

    /**
     * Set end
     *
     * @param \DateTime $end
     *
     * @return Reservation
     */
    public function setEnd($end)
    {
        $this->end = $end;

        return $this;
    }

    /**
     * Get end
     *
     * @return \DateTime
     */
    public function getEnd()
    {
        return $this->end;
    }

    /**
     * Set title
     *
     * @param string $title
     *
     * @return Reservation
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
     * @return Reservation
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
     * Set updated
     *
     * @param \DateTime $updated
     *
     * @return Reservation
     */
    public function setUpdated($updated)
    {
        $this->updated = $updated;

        return $this;
    }

    /**
     * Get updated
     *
     * @return \DateTime
     */
    public function getUpdated()
    {
        return $this->updated;
    }

    /**
     * Set validationprovider
     *
     * @param \tinyint $validationprovider
     *
     * @return Reservation
     */
    public function setValidationprovider(\tinyint $validationprovider)
    {
        $this->validationprovider = $validationprovider;

        return $this;
    }

    /**
     * Get validationprovider
     *
     * @return \tinyint
     */
    public function getValidationprovider()
    {
        return $this->validationprovider;
    }

    /**
     * Set validationclient
     *
     * @param \tinyint $validationclient
     *
     * @return Reservation
     */
    public function setValidationclient(\tinyint $validationclient)
    {
        $this->validationclient = $validationclient;

        return $this;
    }

    /**
     * Get validationclient
     *
     * @return \tinyint
     */
    public function getValidationclient()
    {
        return $this->validationclient;
    }

    /**
     * Set comment
     *
     * @param string $comment
     *
     * @return Reservation
     */
    public function setComment($comment)
    {
        $this->comment = $comment;

        return $this;
    }

    /**
     * Get comment
     *
     * @return string
     */
    public function getComment()
    {
        return $this->comment;
    }

    /**
     * Add ressourceFichier
     *
     * @param \Lim\MoreSalle\Entity\Fichier $ressourceFichier
     *
     * @return Reservation
     */
    public function addRessourceFichier(\Lim\MoreSalle\Entity\Fichier $ressourceFichier)
    {
        $this->ressource_Fichier[] = $ressourceFichier;

        return $this;
    }

    /**
     * Remove ressourceFichier
     *
     * @param \Lim\MoreSalle\Entity\Fichier $ressourceFichier
     */
    public function removeRessourceFichier(\Lim\MoreSalle\Entity\Fichier $ressourceFichier)
    {
        $this->ressource_Fichier->removeElement($ressourceFichier);
    }

    /**
     * Get ressourceFichier
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getRessourceFichier()
    {
        return $this->ressource_Fichier;
    }

    /**
     * Add groupeTargeted
     *
     * @param \Lim\MoreSalle\Entity\Groupe $groupeTargeted
     *
     * @return Reservation
     */
    public function addGroupeTargeted(\Lim\MoreSalle\Entity\Groupe $groupeTargeted)
    {
        $this->groupe_targeted[] = $groupeTargeted;

        return $this;
    }

    /**
     * Remove groupeTargeted
     *
     * @param \Lim\MoreSalle\Entity\Groupe $groupeTargeted
     */
    public function removeGroupeTargeted(\Lim\MoreSalle\Entity\Groupe $groupeTargeted)
    {
        $this->groupe_targeted->removeElement($groupeTargeted);
    }

    /**
     * Get groupeTargeted
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getGroupeTargeted()
    {
        return $this->groupe_targeted;
    }
}


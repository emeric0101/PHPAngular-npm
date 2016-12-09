<?php

namespace LIM\MoreSalle\Entity;
use Emeric0101\PHPAngular\Entity\EntityAbstract;
/**
 * User
 *
 * @Table(name="RessourceType")
 * @Entity(repositoryClass="LIM\MoreSalle\Repository\RessourceTypeRepository")
 */
class RessourceType extends EntityAbstract
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
     * @return RessourceType
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
     * @return RessourceType
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

}
